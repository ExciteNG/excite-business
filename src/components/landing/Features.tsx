import React from "react";
import Image from "next/image";

const features = [
	{
		icon: "/assets/inventory-icon.png",
		title: "Inventory Management",
		description:
			"Excite Enterprise simplifies inventory tracking with real-time updates, ensuring you maintain optimal stock levels effortlessly.",
		image: "/assets/inventory.png",
		color: "#648B00",
	},
	{
		icon: "/assets/bookkeeping-icon.png",
		title: "Book Keeping",
		description:
			"Keep your finances organized with our easy-to-use bookkeeping tools that automate expense tracking and report generation.",
		image: "/assets/bookkeeping.png",
		color: "#5C71BC",
	},
	{
		icon: "/assets/zap.png",
		title: "Sales Performance",
		description:
			"Reach more customers by listing your products or services on our integrated marketplace, designed to boost your sales.",
		image: "/assets/sales.png",
		color: "hsla(133, 82%, 33%, 0.72)",
	},
];

const Features = () => {
	return (
		<div className="mx-auto max-w-7xl p-5">
			<p className="text-[#A7CC48] text-sm">Features</p>
			<h1 className="text-2xl font-semibold">
				What Makes Excite Business The Right Choice?
			</h1>
			<p>
				Excite Business offers a seamless, efficient, and scalable distribution
				management system designed to optimize operations, enhance productivity,
				and drive growth. With advanced tracking, real-time insights, and
				user-friendly tools, managing your business has never been easier.
			</p>

			<div className="mt-5 grid grid-cols-3 gap-5 md:gap-5">
				{features.map((feature, index) => (
					<div
						key={index}
						className="w-full h-80 p-5 rounded-2xl text-white space-y-2"
						style={{
							backgroundColor: feature.color,
						}}
					>
						<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
							<Image
								src={feature.icon}
								alt={feature.title}
								width={20}
								height={20}
							/>
						</div>

						<h3 className="font-semibold text-xl">{feature.title}</h3>
						<p>{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
