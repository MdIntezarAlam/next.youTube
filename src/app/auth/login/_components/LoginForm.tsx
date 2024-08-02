"use client";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";

interface ISignupForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>();
  console.log(watch("email"));
  console.log(watch("password"));

  const onSubmit: SubmitHandler<ISignupForm> = (data: ISignupForm) => {
    console.log("data: ", data);
    console.log(data);
  };

  return (
    <div className="bg-primary text-primary-foreground w-full h-screen m-auto flex flex-col gap-4 p-4">
      <div className="m-auto w-full lg:w-1/2 flex flex-col gap-10 border p-10 rounded-md bg-card">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-medium">Signup</h1>
          <h1 className=" text-2xl font-medium">
            Welcome back to your account !
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-5 place-items-center"
        >
          <Input placeholder="Email" {...register("email")} />
          <Input placeholder="Password" {...register("password")} />

          <div className="flex items-center  gap-2 w-full">
            <hr className="h-0.5 w-full bg-primary" />
            <p className="">or</p>
            <hr className="h-0.5 w-full bg-primary" />
          </div>
          <div className="text-sm font-normal space-x-2">
            <span>Already have an account?</span>
            <a href="/auth/signup">Signup</a>{" "}
          </div>
          <button className="w-full bg-secondary h-12 rounded-md text-lg font-medium">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
