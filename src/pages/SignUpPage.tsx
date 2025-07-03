import { SignUpForm } from "@/components/signup-form"
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

function SignUpPage() {

  const navigate = useNavigate();

  const handleformSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    // For example, you can send the form data to an API or perform validation
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const contact = formData.get("contact")
    const email = formData.get("email")
    const password = formData.get("password")
    // console.log("Form submitted with data:", name, contact, email, password)

    // You can add your API call here to register the user
    // For example, using fetch or axios to send the data to your backend

    axios.post(`${"http://localhost:3000"}/api/auth/signup`, {
      name, contact, email, password
    })
      .then(response => {
        console.log("User registered successfully:", response.data)
        toast.success("Sign Up successful! Please login to continue.");
        navigate("/login");
      })
      .catch(error => {
        console.error("Error registering user:", error.message)
        if(error.status === 400)
          toast.error(error.response.data.error || "Registration failed! Please try again.");
      })
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-gray-50">
      <SignUpForm handleformSubmit={handleformSubmit} className="max-w-3xl md:w-screen" />
    </div>
  )
}

export default SignUpPage