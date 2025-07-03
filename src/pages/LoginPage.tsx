import { LoginForm } from "@/components/login-form"

function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-gray-50">
      <LoginForm className="max-w-3xl md:w-screen"/>
    </div>
  )
}

export default LoginPage