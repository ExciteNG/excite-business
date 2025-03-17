import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
// import PrimaryButton from "../ui/PrimaryButton";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
	return (
		<div className="h-[10dvh] mx-auto max-w-7xl flex justify-between items-center">
			<Link href="/">
				<div className="relative w-24 h-16">
					<Image
						src="/excite-logo-dark.png"
						alt="excite-logo"
						fill={true}
						className="hidden lg:flex"
					/>
				</div>
			</Link>

			{/* <div className="flex gap-4 items-center">
				<Button>Log in</Button>
				<PrimaryButton text="Sign up" />
			</div> */}
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/auth/sign-in" legacyBehavior passHref>
							<NavigationMenuLink asChild>
								<Button variant="outline" className="border-black">
									Login
								</Button>
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="bg-[#A7CC48] hover:bg-[#A7CC48]/70">
							Sign up
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="flex flex-col gap-2 p-1">
								<Link href="/auth/business/register" legacyBehavior passHref>
									<NavigationMenuLink asChild>
										<a className="p-2 bg-transparent hover:bg-[#A7CC48] rounded font-medium">
											As a Business
										</a>
									</NavigationMenuLink>
								</Link>
								<div className="w-full h-px bg-slate-900" />
								<Link href="/auth/register" legacyBehavior passHref>
									<NavigationMenuLink asChild>
										<a className="p-2 bg-transparent hover:bg-[#A7CC48] rounded font-medium">
											As a Distributor
										</a>
									</NavigationMenuLink>
								</Link>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};

export default Navbar;
