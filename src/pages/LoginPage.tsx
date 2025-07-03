import { LoginForm } from "@/components/login-form"
import axios from "axios";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

function LoginPage() {

  const navigate = useNavigate();

  const handleformSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const email = formData.get("email")
    const password = formData.get("password")

    console.log("Form submitted with data:", email, password)

    axios.post(`${"http://localhost:3000"}/api/auth/login`, { email, password })
      .then(response => {
        console.log("User registered successfully:", response.data, response.status)
        toast.success("Login successful! Have a great Day.");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        navigate("/"); // Direct navigation
      })
      .catch(error => {
        console.error("Error registering user:", error)
        if (error.status === 401)
          toast.error(error.response.data.error || "Invalid credentials, please try again.");
        if (error.status === 404)
          toast.info(error.response.data.error || "User not found, please sign up.");
      })
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-gray-50">
      <LoginForm handleformSubmit={handleformSubmit} className="max-w-3xl md:w-screen" />
    </div>
  )
}

export default LoginPage