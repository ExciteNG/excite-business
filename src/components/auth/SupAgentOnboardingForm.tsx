"use client";
import React, { useState, useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SupAgentOnboardingInputs } from "@/types/auth";
import { SupAgentOnboardingSchema } from "@/zodSchemas/schema";
import FormInput from "./FormInput";
import PrimaryButton from "../ui/PrimaryButton";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { companyEmplyCountValues, industry } from "@/constants/dummy";
import Image from "next/image";

export default function SupAgentOnboardingForm() {
	const [image, setImage] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SupAgentOnboardingInputs>({
		resolver: zodResolver(SupAgentOnboardingSchema),
	});

	const { toast } = useToast();
	const router = useRouter();

	const onSubmit: SubmitHandler<SupAgentOnboardingInputs> = (data) => {
		console.log(data);
		toast({
			variant: "success",
			title: "Success!",
			description: "Onboarding successfull",
		});

		router.push("/super-agent");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full my-4">
			<div>
				<p>Upload Identity</p>
				{image ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={image}
						alt="company-image"
						className="w-28 h-28 object-cover object-center"
					/>
				) : (
					<Controller
						name="image"
						control={control}
						render={({ field: { ref, name, onBlur, onChange } }) => (
							<div
								onClick={() => fileInputRef.current?.click()}
								className="w-full h-28 p-5 flex flex-col items-center justify-center rounded-lg border"
							>
								<Image
									src="/assets/img/upload.png"
									alt="upload"
									width={40}
									height={40}
								/>

								<p className="text-[#A7CC48] font-medium">
									Click here to upload
								</p>
								<input
									type="file"
									hidden
									ref={(e) => {
										ref(e);
										fileInputRef.current = e;
									}}
									onBlur={onBlur}
									name={name}
									onChange={(e) => {
										const file = e.target.files?.[0];
										onChange(file ? file : null);
										setImage(file ? URL.createObjectURL(file) : null);
									}}
								/>
							</div>
						)}
					/>
				)}
			</div>
			<FormInput
				type="text"
				label="Acronym"
				id="acronym"
				register={register}
				error={errors.acronym?.message}
			/>

			<div className="w-full flex flex-col gap-1 my-3">
				<label htmlFor="commodities" className="text-sm font-medium">
					Staff size
				</label>
				<Controller
					name="staffSize"
					control={control}
					render={({ field }) => (
						<Select value={field.value} onValueChange={field.onChange}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select staff size" />
							</SelectTrigger>
							<SelectContent>
								{companyEmplyCountValues.map((item) => (
									<SelectItem key={item} value={item}>
										{item}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>
				{errors.staffSize && (
					<p className="mt-1 text-sm text-red-500">
						{errors.staffSize.message}
					</p>
				)}
			</div>

			<div className="w-full flex flex-col gap-1 my-3">
				<label htmlFor="commodities" className="text-sm font-medium">
					Industry
				</label>
				<Controller
					name="industry"
					control={control}
					render={({ field }) => (
						<Select value={field.value} onValueChange={field.onChange}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select industry" />
							</SelectTrigger>
							<SelectContent>
								{industry.map((item) => (
									<SelectItem key={item} value={item}>
										{item}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>
				{errors.industry && (
					<p className="mt-1 text-sm text-red-500">{errors.industry.message}</p>
				)}
			</div>

			{/* <FormInput
        type="text"
        multiple={true}
        label="Products"
        id="products"
        register={register}
        error={errors.products?.message}
      /> */}

			<PrimaryButton text="Submit" className="my-4" />
		</form>
	);
}
