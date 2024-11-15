"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../(root)/providers/AuthProvider";
import { getAuth } from "firebase/auth";

type LoginFormValues = {
  id: string;
  email: string;
  password: string;
};

const formSchema = z.object({
  email: z.string().email({ message: "You need to enter a valid email" }),
  password: z.string().min(1, { message: "You need to enter a password" }),
});

const SignInForm = () => {
  const { login } = useAuth();
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await login(values);

      const auth = getAuth();
      const idToken = await auth.currentUser?.getIdToken(true);

      if (idToken) {
        const response = await fetch("/api/sessionLogin", {
          method: "POST",
          body: JSON.stringify({ idToken }),
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const sessionExpiry = Date.now() + 5 * 60 * 1000; // 5 minutes from now
          localStorage.setItem("sessionExpiry", sessionExpiry.toString());

          // Convert to readable date format
          const readableExpiry = new Date(sessionExpiry).toLocaleString();
          console.log("Session expiry date and time:", readableExpiry);
        }
      }

      router.push("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      <Link href="/" className="block md:hidden px-6 pt-4">
        <img src="/nestify-logo.png" alt="Nestify Logo" className="w-32" />
      </Link>
      <img
        src="/loginform.png"
        alt="loginform"
        className="w-full md:w-1/2 object-cover hidden md:block"
      />
      <form className="flex flex-col w-full md:w-1/2 px-8 md:px-20 pt-16 md:pt-44">
        <p className="text-title-sm-desktop pb-10 text-center md:text-left">
          Log in
        </p>
        <div className="flex flex-col gap-8 text-caption-desktop">
          <div className="flex flex-col">
            <label htmlFor="email" className="pb-2">
              Email Address
            </label>
            <input
              id="email"
              {...form.register("email")}
              type="email"
              placeholder="Email Address"
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
            />
            {form.formState.errors.email && (
              <p className="text-warning">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="pb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...form.register("password")}
              placeholder="Password"
              required
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
            />
            {form.formState.errors.password && (
              <p className="text-warning">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="btn-primary w-full"
            onClick={form.handleSubmit(onSubmit)}
          >
            Login
          </button>
        </div>
        <div className="mt-8 text-center text-sm">
          Not a member? <br />
          <Link href="/sign-up" className="underline">
            create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
