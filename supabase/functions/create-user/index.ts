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
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    const { email, password, name, role } = await req.json()
    console.log('Attempting to create user:', { email, name, role })

    if (!email || !password || !name || !role) {
      throw new Error('Email, password, name, and role are required')
    }

    // Create user in auth.users
    const { data: userData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (createError) {
      console.error('Error creating auth user:', createError)
      throw new Error(`Auth error: ${createError.message}`)
    }

    if (!userData.user) {
      throw new Error('User creation succeeded but no user was returned')
    }

    // Insert into profiles table
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert([
        { 
          id: userData.user.id,
          username: name,
          role: role,
          updated_at: new Date().toISOString()
        }
      ])

    if (profileError) {
      console.error('Error creating profile:', profileError)
      // Clean up the auth user if profile creation fails
      await supabaseAdmin.auth.admin.deleteUser(userData.user.id)
      throw new Error(`Profile error: ${profileError.message}`)
    }

    console.log('User created successfully:', userData.user.id)
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