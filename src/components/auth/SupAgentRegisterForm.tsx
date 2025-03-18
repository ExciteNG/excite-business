"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SupAgentRegisterInputs } from "@/types/auth";
import { SupAgentRegisterSchema } from "@/zodSchemas/schema";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import PrimaryButton from "../ui/PrimaryButton";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function SupAgentForm() {
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

		toast({
			variant: "success",
			title: "Success!",
			description: "Account created successfully!",
		});

		router.push("/super-agent/onboarding");
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
			<PrimaryButton text="Sign Up" className="my-4" />
		</form>
	);
}
