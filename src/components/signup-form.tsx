import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavLink, useNavigate } from "react-router"
import axios from "axios"

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    if (registrationSuccess) {
      navigate("/login");
    }
  }, [registrationSuccess, navigate]);

  const handleformSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    // For example, you can send the form data to an API or perform validation
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const contact = formData.get("contact")
    const email = formData.get("email")
    const password = formData.get("password")
    console.log("Form submitted with data:", name, contact, email, password)

    // You can add your API call here to register the user
    // For example, using fetch or axios to send the data to your backend

    axios.post(`${"http://localhost:3000"}/api/users`, {
      name,
      contact,
      email,
      password
    })
      .then(response => {
        console.log("User registered successfully:", response.data)
        // Set registration success to true to trigger navigation
        setRegistrationSuccess(true);
      })
      .catch(error => {
        console.error("Error registering user:", error)
        // Handle error, show error message to user
      })
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="hidden md:flex justify-center items-center">
            <img
              src="https://media.istockphoto.com/id/1226420822/vector/man-think-about-house-car-and-vaction-on-the-sea-male-character-dream-about-wealth-flat.jpg?s=612x612&w=0&k=20&c=mPaZQVMWdSQBDA2x_dquc5d1KHdNYhuY9K69eiWvKGg="
              alt="Image"
              className="inset-0 h-70 dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <form className="p-6 md:p-8" onSubmit={handleformSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">RentAllHub</h1>
                <p className="text-muted-foreground text-balance">
                  Signup to create your account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="contact">Contact</Label>
                <Input
                  id="contact"
                  name="contact"
                  type="number"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <span className="ml-auto text-sm">
                    Minimum 8 characters.
                  </span>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full text-md">
                Sign Up
              </Button>
              <div className="text-center text-sm">
                Already have account?{" "}
                <NavLink
                  className="underline underline-offset-4 text-primary"
                  to={"/login"}
                >
                  login
                </NavLink>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
