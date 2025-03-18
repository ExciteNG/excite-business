"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInInputs } from "@/types/auth";
import { SignInSchema } from "@/zodSchemas/schema";
import Link from "next/link";
import PrimaryButton from "../ui/PrimaryButton";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import { setAuthCookie } from "@/lib/utils";

export default function SignInForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInInputs>({ resolver: zodResolver(SignInSchema) });

	const router = useRouter();
	const { toast } = useToast();

	const onSubmit: SubmitHandler<SignInInputs> = (data) => {
		console.log(data);

		toast({
			variant: "success",
			title: "Success!",
			description: "Sign in successfull!",
		});

		const user = data.email == "admin@sevenup.org" ? "BUSINESS" : "DISTRIBUTOR";
		setAuthCookie("sample-token", user);

		if (user === "BUSINESS") {
			router.push("/super-agent");
		} else {
			router.push("/main-agent");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full my-4">
			<FormInput
				type="email"
				label="Email"
				id="email"
				placeholder="Enter your email"
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
			<Link href="" className="text-[#A7CC48] text-sm">
				Forgot your password?
			</Link>
			<PrimaryButton text="Sign In" className="my-4" />
		</form>
	);
}
