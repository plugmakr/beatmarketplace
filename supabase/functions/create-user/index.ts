
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
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing environment variables')
      throw new Error('Server configuration error')
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseKey)

    // Parse request body
    let body
    try {
      body = await req.json()
      console.log('Received request body:', JSON.stringify(body))
    } catch (e) {
      console.error('Error parsing request body:', e)
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const { email, password, name, role } = body

    // Validate required fields
    if (!email || !password || !name || !role) {
      console.error('Missing required fields:', { email: !!email, password: !!password, name: !!name, role: !!role })
      return new Response(
        JSON.stringify({ error: 'Email, password, name, and role are required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Validate role
    const validRoles = ['artist', 'seller']
    if (!validRoles.includes(role)) {
      console.error('Invalid role:', role)
      return new Response(
        JSON.stringify({ error: `Invalid role. Must be one of: ${validRoles.join(', ')}` }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Check if user exists
    const { data: existingUser } = await supabaseAdmin.auth.admin.getUserByEmail(email)
    if (existingUser) {
      console.error('User already exists:', email)
      return new Response(
        JSON.stringify({ error: 'User with this email already exists' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Create user
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
      console.error('Error creating user:', createError)
      return new Response(
        JSON.stringify({ error: createError.message }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (!userData?.user) {
      console.error('No user data returned')
      return new Response(
        JSON.stringify({ error: 'Failed to create user' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('User created successfully:', userData.user.id)

    return new Response(
      JSON.stringify({
        user: userData.user,
        message: 'User created successfully'
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
