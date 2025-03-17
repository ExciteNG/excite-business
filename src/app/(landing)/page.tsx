import FAQ from "@/components/landing/FAQ";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
// import { redirect } from "next/navigation";

export default function Home() {
	// redirect("/auth/sign-in");

	return (
		<main className="">
			<Hero />
			<Features />
			<FAQ />
		</main>
	);
}
