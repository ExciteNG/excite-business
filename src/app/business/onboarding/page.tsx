import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import Image from "next/image";
import SupAgentOnboardingForm from "@/components/auth/SupAgentOnboardingForm";
import authBg from "../../../../../public/assets/auth.png";

export default function page() {
  return (
    <AuthLayout logo={false}>
      <section className="flex-1">
        <div className="w-full h-full relative flex justify-center overflow-y-scroll no-scrollbar">
          <div className="w-[90%] max-w-[30rem] py-6 px-4">
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
    </AuthLayout>
  );
}
