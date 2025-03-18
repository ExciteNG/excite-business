import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RetroGrid } from "@/components/ui/RetroGrid";
import { Particles } from "@/components/ui/Particles";

const Hero = () => {
	return (
		<div className="relative w-full h-[140dvh] 2xlh-dvh mx-auto flex flex-col items-center overflow-hidden">
			<Particles
				className="absolute h-60 inset-x-0 top-0 z-0"
				quantity={500}
				ease={80}
				color="#00AA4F"
				refresh
			/>
			<RetroGrid angle={40} />
			<div className="w-full relative flex flex-col items-center space-y-4 py-10">
				<h1 className="text-6xl font-bold text-center">
					Excite Business Distribution <br /> Management System
				</h1>
				<p className="text-xl">
					Optimize your business distribution with Excite Business—an all-in-one
					system for efficiency, tracking, and growth.
				</p>

				<Button className="bg-[#A7CC48] hover:bg-[#A7CC48]/70">
					Request Demo <CircleArrowRight />
				</Button>
			</div>
			<div className="absolute bottom-0 w-full inset-x-0 z-10 flex justify-center">
				<div className="relative w-2/3 h-dvh 2xlh-[80dvh]">
					<Image
						src="/assets/dashboard.png"
						alt="dashboard image"
						fill={true}
						className="object-contain object-center"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
