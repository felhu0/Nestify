"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../(root)/providers/AuthProvider";

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
      router.push("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  return (
    <div className="flex flex-row">
      <img src="/loginform.png" alt="loginform" className="w-1/2" />
      <form className="flex flex-col w-1/2 px-32 pt-44">
        <p className="text-title-sm-desktop pb-10">Log in</p>
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
