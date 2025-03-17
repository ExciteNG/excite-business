import React from "react";
import { Input } from "../ui/input";
import PrimaryButton from "../ui/PrimaryButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="bg-[#F9FAFB] ">
			<div className="w-full flex justify-between mx-auto max-w-7xl p-5 py-10">
				<div className="w-2/3 space-y-2">
					<h1 className="font-semibold text-4xl">Sign up for our newsletter</h1>
					<p>
						Be the first to know about releases and industry news and insights.
					</p>
				</div>

				<div className="w-1/3 space-y-1">
					<div className="flex gap-2 items-center">
						<Input placeholder="Enter your email" />
						<PrimaryButton text="Subscribe" className="w-fit" />
					</div>

					<p className="text-sm">
						We care about your data in our{" "}
						<Link href="/privacy" className="underline">
							privacy policy.
						</Link>
					</p>
				</div>
			</div>

			<div className="mx-auto max-w-7xl p-5">
				<div className="relative w-24 h-16">
					<Image
						src="/excite-logo-dark.png"
						alt="excite-logo"
						fill={true}
						className="hidden lg:flex"
					/>
				</div>

				<div className="w-full border-t py-1 flex justify-between items-center">
					<p>© 2024 Excite Enterprise. All rights reserved.</p>

					<div className="flex gap-2">
						<Link href="#">
							<Image
								src="/assets/img/twitter.png"
								alt="twitter"
								width={20}
								height={20}
								className="hidden lg:flex"
							/>
						</Link>
						<Link href="#">
							<Image
								src="/assets/img/linkedin.png"
								alt="twitter"
								width={20}
								height={20}
								className="hidden lg:flex"
							/>
						</Link>
						<Link href="#">
							<Image
								src="/assets/img/facebook.png"
								alt="twitter"
								width={20}
								height={20}
								className="hidden lg:flex"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
