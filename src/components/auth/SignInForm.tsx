/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useReactMutation } from "@/services/apiHelper";
import { setAuthCookie } from "@/lib/utils";

export default function SignInForm() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { mutate, isPending } = useReactMutation<any, any>(
		"/auth/business/login"
	);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInInputs>({ resolver: zodResolver(SignInSchema) });

	const router = useRouter();
	const { toast } = useToast();

	const onSubmit: SubmitHandler<SignInInputs> = (data) => {
		console.log(data);

		mutate(data, {
			onSuccess: (res: any) => {
				console.log(res.data);
				if (res.data.success) {
					const { isOnboarded, userType } = res.data.data;
					const user =
						userType.toUpperCase() == "SUPERAGENT" ? "BUSINESS" : "DISTRIBUTOR";
					setAuthCookie(res.data.token, user);

					if (userType.toUpperCase() == "SUPERAGENT" && !isOnboarded) {
						toast({
							variant: "caution",
							title: "Onboarding Required",
							description: "Please complete the onboarding process.",
						});
						router.push("/business/onboarding");
						return;
					}

					toast({
						variant: "success",
						title: "Success!",
						description: "Signin successfully!",
					});

					router.replace(`/${user.toLowerCase()}`);
				} else {
					toast({
						variant: "destructive",
						title: "Error!",
						description: res.data.message || "Something went wrong!",
					});
				}
			},
			onError: (error: any) => {
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
			<PrimaryButton text="Sign In" className="my-4" disabled={!!isPending} />
		</form>
	);
}
