'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { type User } from '@supabase/supabase-js'
interface Profile {
  full_name?: string | null,
  username?: string | null,
  email?: string | null
 // website?: string | null
 // avatar_url?: string | null
}
 
export default function useProfile(user: any | null) {
  const supabase = createClient()
  const userDetails =user?.user 
  console.log('testing user profile details',userDetails)
 //console.log('testing user profile', user)
  const [loading, setLoading] = useState<boolean>(true)
  const [profile, setProfile] = useState<Profile>({
    full_name: null,
    username: null,
    email: null,
   // website: null,
   // avatar_url: null,
  })

  const getProfile = useCallback(async () => {
    if (!userDetails?.id) return // Ensure user exists
  
    try {
      setLoading(true)
  
      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, email`) // Directly select the fields
        .eq('id', userDetails?.id) // Query based on user ID
        .single() // Return a single object instead of an array
  
      if (error && status !== 406) {
        throw error
      }
 
      if (data) {
        setProfile({
          full_name: data?.full_name,
          username: data?.username,
          email: data?.email,
        })
      }
    } catch (error) {
      console.error('Error loading user data:', error)
     // alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user?.id, supabase])
  
  const updateProfile = async (updates: Profile) => {
    if (!user?.id) return

    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: updates?.full_name || profile.full_name,
        username: updates?.username || profile.username,
       // website: updates.website || profile.website,
        //avatar_url: updates.avatar_url || profile.avatar_url,
        updated_at: new Date().toISOString(),
      })

      if (error) throw error
      alert('Profile updated!')
      await getProfile() // Refresh profile data after update
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProfile()
  }, [getProfile])

  return {
    profile: profile,
    loading,
    getProfile,
    updateProfile,
    setProfile, // Expose setProfile in case manual updates are needed
  }
}
