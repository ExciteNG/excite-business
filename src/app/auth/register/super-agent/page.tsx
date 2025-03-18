import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import authBg from "../../../../../public/assets/img/auth-bg.png";
import Image from "next/image";
import Link from "next/link";
import SupAgentForm from "@/components/auth/SupAgentRegisterForm";

export default function page() {
	return (
		<AuthLayout>
			<section className="hidden lg:flex flex-1">
				<Image src={authBg} alt="auth-bg" className="w-full h-full" />
			</section>
			<section className="flex-1 py-5">
				<div className="w-full h-full relative flex justify-center items-center overflow-y-scroll no-scrollbar">
					<div className="w-[90%] max-w-[30rem] py-6 px-4">
						<h1 className="font-semibold text-xl">
							Join Excite Enterprise for Free
						</h1>
						{/* <p className="text-sm font-light">Sign up for an account and start buying today</p> */}

						<SupAgentForm />

						<p className="text-sm my-2">
							By creating an account, you agree to Excite Trade’s{" "}
							<Link href="" className="text-[#A7CC48]">
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link href="" className="text-[#A7CC48]">
								Privacy Policy.
							</Link>
						</p>
						<p className="text-sm font-light">
							Already have an account?{" "}
							<Link
								href="/auth/sign-in"
								className="text-[#A7CC48] hover-[#86ac25]"
							>
								Sign In
							</Link>
						</p>
					</div>
				</div>
			</section>
		</AuthLayout>
	);
}
