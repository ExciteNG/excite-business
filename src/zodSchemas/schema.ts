import * as z from "zod";

export const SignInSchema = z.object({
	email: z
		.string({
			required_error: "Email is required",
			invalid_type_error: "Email must be a string",
		})
		.min(1, { message: "Email is required" })
		.email({ message: "Invalid email address" }),
	password: z
		.string({
			required_error: "Password is required",
			invalid_type_error: "Password must be a string",
		})
		.min(1, { message: "Password is required" })
		.min(8, { message: "Password must be 8 or more characters long" }),
});

export const SupAgentRegisterSchema = z
	.object({
		name: z
			.string({
				required_error: "Company Name is required",
			})
			.min(1, { message: "Company Name is required" }),
		email: z
			.string({
				required_error: "Email is required",
				invalid_type_error: "Email must be a string",
			})
			.min(1, { message: "Email is required" })
			.email({ message: "Invalid email address" }),
		password: z
			.string({
				required_error: "Password is required",
				invalid_type_error: "Password must be a string",
			})
			.min(1, { message: "Password is required" })
			.min(8, { message: "Password must be 8 or more characters long" }),
		confirmPassword: z
			.string({
				required_error: "Please re-enter your password",
				invalid_type_error: "Password confirmation must be a string",
			})
			.min(1, { message: "Please re-enter your password" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export const SubAgentRegisterSchema = z
	.object({
		name: z
			.string({
				required_error: "Company Name is required",
			})
			.min(1, { message: "Company Name is required" }),
		email: z
			.string({
				required_error: "Email is required",
				invalid_type_error: "Email must be a string",
			})
			.min(1, { message: "Email is required" })
			.email({ message: "Invalid email address" }),
		referralCode: z
			.string({
				required_error: "Referral Code is required",
			})
			.min(1, { message: "Referral Code is required" }),
		address: z
			.string({
				required_error: "Address is required",
			})
			.min(1, { message: "Address is required" }),
		state: z
			.string({
				required_error: "State is required",
			})
			.min(1, { message: "State is required" }),
		lga: z
			.string({
				required_error: "Local government area is required",
			})
			.min(1, { message: "Local government area is required" }),
		phoneNumber: z
			.string({
				required_error: "Phone Number is required",
			})
			.min(1, { message: "Phone Number is required" }),
		password: z
			.string({
				required_error: "Password is required",
				invalid_type_error: "Password must be a string",
			})
			.min(1, { message: "Password is required" })
			.min(8, { message: "Password must be 8 or more characters long" }),
		confirmPassword: z
			.string({
				required_error: "Please re-enter your password",
				invalid_type_error: "Password confirmation must be a string",
			})
			.min(1, { message: "Please re-enter your password" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export const SupAgentOnboardingSchema = z.object({
	image: z
		.union([
			z.instanceof(File, { message: "Image is required" }),
			z.string().optional(),
		])
		.refine((value) => value instanceof File || typeof value === "string", {
			message: "Image is required",
		}),
	acronym: z
		.string({
			required_error: "Acronym is required",
		})
		.min(1, { message: "Acronym is required" }),
	industry: z
		.string({
			required_error: "Industry is required",
			invalid_type_error: "Industry must be a string",
		})
		.min(1, { message: "Industry is required" }),
	staffSize: z.string({
		required_error: "Staff size is required",
		invalid_type_error: "Staff size must be a string",
	}),
	products: z
		.array(
			z.object({
				title: z
					.string({ required_error: "Product title is required" })
					.min(1, { message: "Product title is required" }),
				category: z
					.string({ required_error: "Product category is required" })
					.min(1, { message: "Product category is required" }),
				color: z
					.string({ required_error: "Product color is required" })
					.min(1, { message: "Product color is required" }),
			})
		)
		.min(1, { message: "Must have at least 1 product" }),
});
