/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import {
	Controller,
	SubmitHandler,
	useForm,
	useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// import { ChromePicker } from "react-color";

import { SupAgentOnboardingInputs } from "@/types/auth";
import { SupAgentOnboardingSchema } from "@/zodSchemas/schema";
import FormInput from "./FormInput";
import PrimaryButton from "../ui/PrimaryButton";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useReactMutation } from "@/services/apiHelper";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { companyEmplyCountValues, industry } from "@/constants/dummy";
import { Button } from "../ui/button";

const productCategories = [
	"Electronics",
	"Clothing",
	"Furniture",
	"Toys",
	"Books",
	"Food",
	"Drinks",
	"Beauty",
	"Sports",
	"Automotive",
	"Health",
	"Home",
	"Garden",
	"Office Supplies",
	"Pet Supplies",
	"Jewelry",
	"Music",
	"Movies",
	"Video Games",
	"Tools",
	"Baby Products",
];

export default function SupAgentOnboardingForm() {
	// const {} = useRea
	const { mutate, isPending } = useReactMutation("/auth/business/onboarding");
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

	const { fields, append, remove } = useFieldArray({
		control,
		name: "products",
	});

	const { toast } = useToast();
	const router = useRouter();

	const onSubmit: SubmitHandler<SupAgentOnboardingInputs> = (data) => {
		console.log(data);
		const formData = new FormData();
		formData.append("acronym", data.acronym);
		formData.append("staffSize", data.staffSize);
		formData.append("industry", data.industry);
		formData.append("image", data.image);
		data.products.forEach((product, index) => {
			formData.append(`products[${index}][title]`, product.title);
			formData.append(`products[${index}][category]`, product.category);
			formData.append(`products[${index}][color]`, product.color);
		});

		mutate(formData, {
			onSuccess: (res: any) => {
				console.log(res.data);
				if (res.data.success) {
					toast({
						variant: "success",
						title: "Success!",
						description: "Business onboarded successfully!",
					});

					router.push("/business");
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

			<div className="w-full flex flex-col gap-1 my-3">
				<label htmlFor="products" className="text-sm font-medium">
					Products
				</label>

				{fields.map((field, index) => (
					<div key={field.id} className="flex flex-col">
						<div className="w-full flex justify-end">
							<div
								onClick={() => remove(index)}
								className="w-fit text-sm text-red-500 cursor-pointer"
							>
								X
							</div>
						</div>
						<div className="w-full flex gap-2 items-center">
							<FormInput
								type="text"
								label="Title"
								id={`products.${index}.title`}
								register={register}
								error={errors.products?.[index]?.title?.message}
							/>

							<div className="w-full flex flex-col gap-1 my-3">
								<label htmlFor="commodities" className="text-sm font-medium">
									Category
								</label>
								<Controller
									name={`products.${index}.category`}
									control={control}
									render={({ field }) => (
										<Select value={field.value} onValueChange={field.onChange}>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select category" />
											</SelectTrigger>
											<SelectContent>
												{productCategories.map((item) => (
													<SelectItem key={item} value={item}>
														{item}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									)}
								/>
							</div>
							<FormInput
								type="color"
								label="Color"
								id={`products.${index}.color`}
								register={register}
								error={errors.products?.[index]?.color?.message}
							/>
							{/* <div className="flex flex-col gap-1">
								<label
									htmlFor={`products[${index}].color`}
									className="text-sm font-medium"
								>
									Color
								</label>
								<Controller
									name={`products[${index}].color`}
									control={control}
									render={({ field }) => (
										<ChromePicker
											color={color}
											onChange={(color: any) => {
												setColor(color.hex);
												field.onChange(color.hex);
											}}
										/>
									)}
								/>
								{errors.products?.[index]?.color && (
									<p className="mt-1 text-sm text-red-500">
										{errors.products?.[index]?.color?.message}
									</p>
								)}
							</div> */}
						</div>
					</div>
				))}
				<Button
					type="button"
					variant="outline"
					className="w-fit"
					onClick={() => append({ title: "", category: "", color: "" })}
				>
					Add Product
				</Button>
			</div>

			<PrimaryButton text="Submit" className="my-4" disabled={!!isPending} />
		</form>
	);
}
