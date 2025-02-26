import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <main className="relative w-full flex h-screen">
      <Link href="/" className="absolute top-0 left-0 m-4 w-24 h-16">
        <Image
          // src="/excite-logo.png"
          src="/excite-logo-dark.png"
          alt="excite-logo"
          layout="fill"
          className="hidden lg:flex"
        />
        <Image
          src="/excite-logo-dark.png"
          alt="excite-logo"
          layout="fill"
          className="flex lg:hidden"
        />
      </Link>
      {children}
    </main>
  );
}
