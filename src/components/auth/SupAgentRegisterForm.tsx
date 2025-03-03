"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SupAgentRegisterInputs } from "@/types/auth";
import { SupAgentRegisterSchema } from "@/zodSchemas/schema";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import PrimaryButton from "../ui/PrimaryButton";
import { useToast } from "@/hooks/use-toast";
import { useReactMutation } from "@/services/apiHelper";

export default function SupAgentForm() {
  const { mutate, isPending } = useReactMutation("/auth/business/sign-up");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SupAgentRegisterInputs>({
    resolver: zodResolver(SupAgentRegisterSchema),
  });

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit: SubmitHandler<SupAgentRegisterInputs> = (data) => {
    console.log(data);

    mutate(data, {
      onSuccess: (res) => {
        console.log(res.data);
        if (res.data.success) {
          toast({
            variant: "success",
            title: "Success!",
            description: "Business account created successfully!",
          });

          router.push("/auth/sign-in");
        } else {
          toast({
            variant: "destructive",
            title: "Error!",
            description: res.data.message || "Something went wrong!",
          });
        }
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error!",
          description:
            error?.response?.data.message ||
            error?.message ||
            "Something went wrong!",
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full my-4">
      <FormInput
        type="text"
        label="Company Name"
        id="name"
        // placeholder="Enter your Company Name"
        register={register}
        error={errors.name?.message}
      />
      <FormInput
        type="email"
        label="Work Email"
        id="email"
        // placeholder="Enter your Company Email"
        register={register}
        error={errors.email?.message}
      />
      <PasswordInput
        label="Password"
        id="password"
        placeholder="Enter password"
        register={register}
        error={errors.password?.message}
      />
      <PasswordInput
        label="Confirm Password"
        id="confirmPassword"
        placeholder="Enter password"
        register={register}
        error={errors.confirmPassword?.message}
      />
      <PrimaryButton text="Sign Up" className="my-4" disabled={!!isPending} />
    </form>
  );
}

