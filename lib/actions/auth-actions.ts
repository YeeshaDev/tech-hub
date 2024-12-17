'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullName = formData.get('fullName') as string
  const username = formData.get('username') as string

  if (!email || !password || !fullName || !username) {
    throw new Error('All fields are required.')
  }

  // Sign up the user
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (signUpError) throw new Error(signUpError.message)

  const user = signUpData.user
  if (!user) throw new Error('User creation failed. Please verify your email.')

  const { error: profileError } = await supabase.from('profiles').insert({
    id: user.id,
    email,
    full_name: fullName,
    username,
  })

  if (profileError) throw new Error(profileError.message)

  // Revalidate paths or redirect
  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function loginUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const supabase = await createClient();
  
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      throw new Error("Invalid credentials. Please try again.");
    }
  
    return data;
  }
  
export async function loginWithGoogle() {
    const supabase = await createClient();
  
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback` },
    });
  
    if (error) {
      throw new Error("Could not sign in with Google. Please try again.");
    }
  }