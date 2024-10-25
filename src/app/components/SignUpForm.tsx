"use client";

import Link from "next/link";
import { z } from "zod";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addNewUser } from "@/lib/user.db";
import { useAuth } from "../(root)/providers/AuthProvider";

type SignUpFormValues = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const formSchema = z
  .object({
    email: z.string().email({ message: "You need to enter a valid email" }),
    firstName: z.string().min(1, { message: "You need to enter a first name" }),
    lastName: z.string().min(1, { message: "You need to enter a last name" }),
    password: z.string().min(6, {
      message: "The password must be at least 6 characters long",
    }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignUpForm = () => {
  const { register } = useAuth();
  const router = useRouter();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      const uid = await register(values);
      if (!uid) {
        throw new Error("Registration failed, no user ID returned");
      }
      await addNewUser({
        id: uid,
        username: `${values.firstName} ${values.lastName}`,
        name: "",
        email: values.email,
        password: values.password,
      });
      router.push("/");
      console.log("User added successfully");
    } catch (error) {
      console.error("Could not add user to database!", error);
    }
  };

  return (
    <div className="flex flex-row">
      <img src="/signupform.png" alt="loginform" className="w-1/2" />
      <form
        className="flex flex-col w-1/2 px-32 pt-44"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <p className="text-title-sm-desktop pb-10">Register</p>
        <div className="flex flex-row text-caption-desktop gap-4 pb-4 justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="pb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
              {...form.register("firstName")}
            />
            {form.formState.errors.firstName && (
              <p className="text-warning">
                {form.formState.errors.firstName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className="pb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
              {...form.register("lastName")}
            />
            {form.formState.errors.lastName && (
              <p className="text-warning">
                {form.formState.errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col text-caption-desktop gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="pb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
              {...form.register("email")}
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
              placeholder="Password"
              required
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
              {...form.register("password")}
            />
            {form.formState.errors.password && (
              <p className="text-warning">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="pb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
              {...form.register("confirmPassword")}
            />
            {form.formState.errors.confirmPassword && (
              <p className="text-warning">
                {form.formState.errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        <button type="submit" className="btn-primary w-full my-10">
          Create an account
        </button>
        <div className=" text-center text-sm">
          Already a member? <br />
          <Link href="/sign-in" className="underline">
            log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
