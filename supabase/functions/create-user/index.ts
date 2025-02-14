
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
    console.log('Received request with data:', { email, name, role }) // Log incoming data

    if (!email || !password || !name || !role) {
      throw new Error('Email, password, name, and role are required')
    }

    // Validate role
    const validRoles = ['admin', 'artist', 'seller']
    if (!validRoles.includes(role)) {
      throw new Error(`Invalid role. Must be one of: ${validRoles.join(', ')}`)
    }

    try {
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
        console.error('User creation error:', createError)
        throw createError
      }

      if (!userData?.user) {
        throw new Error('User creation succeeded but no user was returned')
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
    } catch (authError: any) {
      console.error('Detailed auth error:', authError)
      throw new Error(`Auth error: ${authError.message}`)
    }
  } catch (error) {
    console.error('Error in create-user function:', error)
    return new Response(
      JSON.stringify({
        error: error.message,
        details: error instanceof Error ? error.stack : 'Unknown error'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
