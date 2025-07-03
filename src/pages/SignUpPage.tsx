import { SignUpForm } from "@/components/signup-form"

function SignUpPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-gray-50">
      <SignUpForm className="max-w-3xl md:w-screen"/>
    </div>
  )
}

export default SignUpPage