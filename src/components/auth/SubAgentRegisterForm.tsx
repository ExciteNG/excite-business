"use client";

import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubAgentRegisterInputs } from "@/types/auth";
import { SubAgentRegisterSchema } from "@/zodSchemas/schema";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import PrimaryButton from "../ui/PrimaryButton";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "react-phone-number-input";

export default function SubAgentRegisterForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SubAgentRegisterInputs>({
    resolver: zodResolver(SubAgentRegisterSchema),
  });

  const { toast } = useToast();

  const onSubmit: SubmitHandler<SubAgentRegisterInputs> = (data) => {
    console.log(data);

    toast({
      variant: "success",
      title: "Success!",
      description: "Account created successfully!",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full my-4">
      <FormInput
        type="text"
        label="Name"
        id="name"
        register={register}
        error={errors.name?.message}
      />
      <FormInput
        type="email"
        label="Work Email"
        id="email"
        register={register}
        error={errors.email?.message}
      />
      <FormInput
        type="text"
        label="Referral Code"
        id="referralCode"
        register={register}
        error={errors.referralCode?.message}
      />
      <FormInput
        type="text"
        label="location"
        id="location"
        register={register}
        error={errors.location?.message}
      />

      <div className="w-full flex flex-col gap-1 my-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone Number
        </label>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              id="phone"
              placeholder="Enter phone number"
              defaultCountry="NG"
              onChange={(value) => field.onChange(value)}
              value={field.value || ""}
              className="border rounded w-full *:p-2 *:outline-none text-sm"
            />
          )}
        />
        {errors.phoneNumber && (
          <p className="text-xs text-[#F04438]">{errors.phoneNumber.message}</p>
        )}
      </div>

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
      <PrimaryButton text="Sign Up" className="my-4" />
    </form>
  );
}
