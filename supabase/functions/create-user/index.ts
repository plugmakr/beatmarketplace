
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
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
    console.log('Starting user creation process for:', { email, name, role })

    if (!email || !password || !name || !role) {
      throw new Error('Email, password, name, and role are required')
    }

    // Validate role
    const validRoles = ['admin', 'artist', 'seller']
    if (!validRoles.includes(role)) {
      throw new Error(`Invalid role. Must be one of: ${validRoles.join(', ')}`)
    }

    try {
      // First, check if user already exists
      const { data: existingUser } = await supabaseAdmin.auth.admin.getUserByEmail(email)
      if (existingUser) {
        throw new Error('User with this email already exists')
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
        console.error('User creation failed:', createError)
        throw createError
      }

      if (!userData?.user) {
        throw new Error('User creation succeeded but no user data was returned')
      }

      // Wait a moment for the trigger to complete
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Verify profile creation
      const { data: profile, error: profileError } = await supabaseAdmin
        .from('profiles')
        .select('*')
        .eq('id', userData.user.id)
        .single()

      if (profileError || !profile) {
        console.error('Profile verification failed:', profileError)
        // Clean up the created user if profile creation failed
        await supabaseAdmin.auth.admin.deleteUser(userData.user.id)
        throw new Error('Failed to create user profile')
      }

      console.log('User and profile created successfully:', userData.user.id)

      return new Response(
        JSON.stringify({
          message: 'User created successfully',
          user: userData.user,
          profile
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    } catch (specificError: any) {
      console.error('Specific error in user creation:', specificError)
      throw new Error(specificError.message || 'Error creating user')
    }
  } catch (error) {
    console.error('Error in create-user function:', error)
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error',
        details: error instanceof Error ? error.stack : 'No stack trace available'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
