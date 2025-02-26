import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import authBg from "../../../../public/assets/img/auth-bg.png"
import Image from "next/image";
import Link from "next/link";
import SignInForm from "@/components/auth/SignInForm";

export default function page() {
  return (
    <AuthLayout>
      <section className="hidden lg:flex flex-1">
        <Image src={authBg} alt="auth-bg" className="w-full h-full" />
      </section>
      <section className="flex-1">
        <div className="w-full h-full relative flex justify-center items-center overflow-y-scroll no-scrollbar">
          <div className="w-[90%] max-w-[30rem] py-6 px-4">
            <h1 className="font-semibold text-xl">Sign In</h1>
            <p className="text-sm font-light">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register/sub-agent"
                className="text-[#A7CC48] hover-[#86ac25]"
              >
                Join Excite Business for free
              </Link>
            </p>
            <SignInForm />
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
