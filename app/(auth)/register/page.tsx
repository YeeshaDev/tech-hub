import { RegisterForm } from "@/components/auth/register-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register - TechEvents",
  description: "Create a new account",
}

export default function RegisterPage() {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="flex flex-col space-y-2 text-center mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your details to get started
        </p>
      </div>
      <RegisterForm />
    </div>
  )
}