import React from "react";
import Image from "next/image";
import SupAgentOnboardingForm from "@/components/auth/SupAgentOnboardingForm";
import authBg from "../../../../public/assets/onboarding.png";

export default function page() {
	return (
		<div className="relative w-full flex h-screen">
			<section className="flex-1">
				<div className="w-full h-full relative flex justify-center overflow-y-scroll no-scrollbar">
					<div className="w-[90%] py-6 px-4">
						<div className="relative w-24 h-12 mb-10">
							<Image
								src="/excite-logo-dark.png"
								alt="excite-logo"
								fill={true}
								className="hidden lg:flex"
							/>
						</div>
						<h1 className="font-semibold text-xl">Create your account</h1>
						<p className="text-sm font-light">
							Let&apos;s get your profile setup in less than 2 mins
						</p>

						<SupAgentOnboardingForm />
					</div>
				</div>
			</section>
			<section className="hidden lg:flex flex-1">
				<Image src={authBg} alt="auth-bg" className="w-full h-full" />
			</section>
		</div>
	);
}
