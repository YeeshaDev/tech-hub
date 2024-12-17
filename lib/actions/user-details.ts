import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function getUser() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
//console.log('user',data)
  if (error || !data?.user) {
    redirect('/login')
  }

  return data.user
}