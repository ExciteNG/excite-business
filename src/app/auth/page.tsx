import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className='w-full min-h-screen flex bg-[url("/assets/auth-bg.png")] bg-cover bg-center bg-no-repeat'>
      <section className="flex-1 bg-white flex justify-center items-center">
        <div className="flex flex-col gap-2 w-[90%] max-w-[40rem]">
          <h1 className="font-semibold text-3xl">
            <span className="text-[#A7CC48]">Excite Business</span> Distribution
            Management System
          </h1>
          <p className="text-[#475467 ]">
            Streamline and optimize your business distribution with Excite
            Business, the all-in-one management system designed for efficiency,
            tracking, and growth.
          </p>

          <div className="my-6 space-x-4">
            <Link
              href="/auth/register"
              className="bg-[#A7CC48] py-3 px-6 rounded-lg font-medium"
            >
              Register
            </Link>
            <Link
              href="/auth/sign-in"
              className="border border-[#A7CC48] bg-[#DFE9C7] py-3 px-6 rounded-lg font-medium"
            >
              Log in
            </Link>
          </div>
        </div>
      </section>
      <section className="flex-1 bg-[#FBFCF6] opacity-50 hidden md_sm:flex"></section>
    </main>
  );
}
