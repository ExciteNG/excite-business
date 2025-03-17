import React from "react";

const FAQ = () => {
	return (
		<div className="mx-auto max-w-7xl p-5 w-full flex gap-5">
			<div className="w-full md:w-1/2 space-y-2">
				<p className="text-[#A7CC48] text-sm">Support</p>
				<h1 className="text-4xl font-semibold">FAQs</h1>
				<p>
					Everything you need to know about the product and billing. Can’t find
					the answer you’re looking for? Please get in touch with our team.
				</p>
			</div>

			<div className="w-full md:w-1/2 space-y-2">
				<div className="rounded-xl p-5 bg-[#F9FAFB]">
					<div className="w-full flex justify-between items-center">
						<p className="font-semibold">
							What is a Distribution Management System?
						</p>

            <div></div>
					</div>
					<div>
						<span>
							A DMS helps businesses manage inventory, orders, and supply chain
							operations efficiently.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
