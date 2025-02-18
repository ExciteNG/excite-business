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

export const SupAgentRegisterSchema = z.object({
    companyName: z
      .string({
        required_error: "Company Name is required",
      })
      .min(1, { message: "Company Name is required" }),
    companyEmail: z
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

  export const SubAgentRegisterSchema = z.object({
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
      location: z
      .string({
        required_error: "Location is required",
      })
      .min(1, { message: "Location is required" }),
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