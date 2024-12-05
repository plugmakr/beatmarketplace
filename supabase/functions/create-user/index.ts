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
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { email, password, name, role } = await req.json()
    console.log('Attempting to create user:', { email, name, role })

    if (!email || !password) {
      throw new Error('Email and password are required')
    }

    // Create user in auth.users
    const { data: userData, error: createError } = await supabaseClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { role }
    })

    if (createError) {
      console.error('Error creating user:', createError)
      throw createError
    }

    // Update the profile with the username
    if (userData.user) {
      const { error: updateError } = await supabaseClient
        .from('profiles')
        .update({ username: name, role })
        .eq('id', userData.user.id)

      if (updateError) {
        console.error('Error updating profile:', updateError)
        throw updateError
      }
    }

    console.log('User created successfully:', userData.user?.id)
    return new Response(
      JSON.stringify({ message: 'User created successfully', user: userData.user }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error in create-user function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})