"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
//import { supabase } from "@/lib/supabase/client"
import { toast } from "@/hooks/use-toast"
import { Progress } from "@/components/ui/progress"
import { createClient } from "@/lib/supabase/client"

export default function OAuthCallback() {
  const router = useRouter()
  const supabase = createClient()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    async function checkAuth() {
      const { data: { session }, error } = await supabase.auth.getSession()

      if (error) {
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description: "Could not complete sign-in. Please try again.",
        })
        router.push("/login")
      } else if (session) {
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        })
        router.push("/dashboard")
      }
    }

    checkAuth()
  }, [router])

  return (
    <div className="flex flex-col h-screen items-center justify-center space-y-4">
      <h2 className="text-2xl font-semibold">Preparing your dashboard...</h2>
      <div className="w-64">
        <Progress value={progress} className="w-full" />
      </div>
    </div>
  )
}
