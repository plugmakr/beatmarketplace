
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client with admin rights
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing environment variables')
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    // Parse and validate request body
    const { email, password, name, role } = await req.json()
    console.log('Received request to create user:', { email, name, role })

    if (!email || !password || !name || !role) {
      throw new Error('Email, password, name, and role are required')
    }

    // Validate role
    const validRoles = ['admin', 'artist', 'seller']
    if (!validRoles.includes(role)) {
      throw new Error(`Invalid role. Must be one of: ${validRoles.join(', ')}`)
    }

    // Create the user with admin API
    const { data: userData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        username: name,
        role: role
      }
    })

    if (createError) {
      console.error('Detailed create user error:', createError)
      throw new Error(`Auth error: ${createError.message}`)
    }

    if (!userData?.user) {
      throw new Error('User creation succeeded but no user was returned')
    }

    console.log('User created successfully in auth:', userData.user.id)

    // Allow some time for the trigger to create the profile
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Update the profile
    const { error: updateError } = await supabaseAdmin
      .from('profiles')
      .update({ 
        username: name,
        role: role,
        updated_at: new Date().toISOString()
      })
      .eq('id', userData.user.id)

    if (updateError) {
      console.error('Error updating profile:', updateError)
      // Clean up the auth user if profile update fails
      const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(userData.user.id)
      if (deleteError) {
        console.error('Error cleaning up auth user after profile update failure:', deleteError)
      }
      throw new Error(`Profile error: ${updateError.message}`)
    }

    console.log('Profile updated successfully for user:', userData.user.id)
    
    return new Response(
      JSON.stringify({ 
        message: 'User created successfully', 
        user: userData.user 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error in create-user function:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.stack 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
