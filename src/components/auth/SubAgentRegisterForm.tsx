// "use client";

// import React from "react";
// import { Controller, SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { SubAgentRegisterInputs } from "@/types/auth";
// import { SubAgentRegisterSchema } from "@/zodSchemas/schema";
// import FormInput from "./FormInput";
// import PasswordInput from "./PasswordInput";
// import PrimaryButton from "../ui/PrimaryButton";
// import { useToast } from "@/hooks/use-toast";
// import PhoneInput from "react-phone-number-input";

// export default function SubAgentRegisterForm() {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<SubAgentRegisterInputs>({
//     resolver: zodResolver(SubAgentRegisterSchema),
//   });

//   const { toast } = useToast();

//   const onSubmit: SubmitHandler<SubAgentRegisterInputs> = (data) => {
//     console.log(data);

//     toast({
//       variant: "success",
//       title: "Success!",
//       description: "Account created successfully!",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="w-full my-4">
//       <FormInput
//         type="text"
//         label="Name"
//         id="name"
//         register={register}
//         error={errors.name?.message}
//       />
//       <FormInput
//         type="email"
//         label="Work Email"
//         id="email"
//         register={register}
//         error={errors.email?.message}
//       />
//       <FormInput
//         type="text"
//         label="Referral Code"
//         id="referralCode"
//         register={register}
//         error={errors.referralCode?.message}
//       />
//       <FormInput
//         type="text"
//         label="location"
//         id="location"
//         register={register}
//         error={errors.location?.message}
//       />

//       <div className="w-full flex flex-col gap-1 my-2">
//         <label htmlFor="phone" className="text-sm font-medium">
//           Phone Number
//         </label>
//         <Controller
//           name="phoneNumber"
//           control={control}
//           render={({ field }) => (
//             <PhoneInput
//               {...field}
//               id="phone"
//               placeholder="Enter phone number"
//               defaultCountry="NG"
//               onChange={(value) => field.onChange(value)}
//               value={field.value || ""}
//               className="border rounded w-full *:p-2 *:outline-none text-sm"
//             />
//           )}
//         />
//         {errors.phoneNumber && (
//           <p className="text-xs text-[#F04438]">{errors.phoneNumber.message}</p>
//         )}
//       </div>

//       <PasswordInput
//         label="Password"
//         id="password"
//         placeholder="Enter password"
//         register={register}
//         error={errors.password?.message}
//       />
//       <PasswordInput
//         label="Confirm Password"
//         id="confirmPassword"
//         placeholder="Enter password"
//         register={register}
//         error={errors.confirmPassword?.message}
//       />
//       <PrimaryButton text="Sign Up" className="my-4" />
//     </form>
//   );
// }

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubAgentRegisterInputs } from "@/types/auth";
import { SubAgentRegisterSchema } from "@/zodSchemas/schema";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import PrimaryButton from "../ui/PrimaryButton";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "react-phone-number-input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useReactMutation } from "@/services/apiHelper";
import { getNigeriaStates, getNigeriaStatesLgas } from "@/lib/utils";

export default function SubAgentRegisterForm() {
	const { mutate, isPending } = useReactMutation("/auth/subagent/sign-up");
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<SubAgentRegisterInputs>({
		resolver: zodResolver(SubAgentRegisterSchema),
	});

	const { toast } = useToast();
	const router = useRouter();

	const onSubmit: SubmitHandler<SubAgentRegisterInputs> = (data) => {
		console.log(data);

		mutate(
			{ ...data, fullName: data.name },
			{
				onSuccess: (res) => {
					console.log(res.data);
					if (res.data.success) {
						toast({
							variant: "success",
							title: "Success!",
							description: "Account created successfully!",
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
			}
		);
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

			<div className="w-full flex flex-col gap-1 my-3">
				<label htmlFor="commodities" className="text-sm font-medium">
					State
				</label>
				<Controller
					name="state"
					control={control}
					render={({ field }) => (
						<Select value={field.value} onValueChange={field.onChange}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select state" />
							</SelectTrigger>
							<SelectContent>
								{getNigeriaStates().map((state) => (
									<SelectItem key={state} value={state}>
										{state}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>
				{errors.state && (
					<p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
				)}
			</div>

			<div className="w-full flex flex-col gap-1 my-3">
				<label htmlFor="commodities" className="text-sm font-medium">
					Local government
				</label>
				<Controller
					name="state"
					control={control}
					render={({ field: stateField }) => (
						<Controller
							name="lga"
							control={control}
							render={({ field }) => (
								<Select value={field.value} onValueChange={field.onChange}>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Select local government area" />
									</SelectTrigger>
									<SelectContent>
										{getNigeriaStatesLgas(stateField.value).map((state) => (
											<SelectItem key={state} value={state}>
												{state}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							)}
						/>
					)}
				/>
				{errors.lga && (
					<p className="mt-1 text-sm text-red-500">{errors.lga.message}</p>
				)}
			</div>

			<FormInput
				type="text"
				label="Address"
				id="address"
				register={register}
				error={errors.address?.message}
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
			<PrimaryButton text="Sign Up" className="my-4" disabled={!!isPending} />
		</form>
	);
}
