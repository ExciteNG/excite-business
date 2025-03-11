// import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { statesAndLgas } from "@/constants/statesAndLgas";
import { Copy } from "lucide-react";
import YearlySalesChart from "../shared/YearlySalesChart";
import TotalSalesChart from "../shared/TotalSalesChart";
import { ChartDataType } from "@/constants/dummy";
import { Dispatch, SetStateAction } from "react";

const referral = {
	superAgent: "SBC/004",
	mainAgent: "SBC/004/010",
	subAgent: " SBC/004/010/003",
};

type Props = {
	location: string;
	chartData: ChartDataType;
	setLocation: Dispatch<SetStateAction<string>>;
	filterByLocation: () => void;
};

const ChartOverview = ({
	location,
	chartData,
	setLocation,
	filterByLocation,
}: Props) => {
	const pathName = usePathname();
	// const [location, setLocation] = useState<string>("Lagos");

	return (
		<div>
			<div className="w-full flex justify-between gap-4 items-center">
				<div className="flex gap-2">
					<Select value={location} onValueChange={setLocation}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Theme" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value={"all"}>All states</SelectItem>
							{Object.keys(statesAndLgas).map((state, index) => (
								<SelectItem key={index} value={state}>
									{state}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<button
						onClick={filterByLocation}
						className="bg-[#A7CC48] py-2 px-6 rounded-md font-medium"
					>
						Search
					</button>
				</div>
				<div>
					<p className="text-sm font-medium flex items-center gap-2">
						Referral Code:{" "}
						<span className="font-semibold">
							{pathName.startsWith("/super-agent")
								? referral.superAgent
								: pathName.startsWith("/main-agent")
								? referral.mainAgent
								: pathName.startsWith("/sub-agent") && referral.subAgent}
						</span>{" "}
						<Copy className="w-4 h-4" />{" "}
					</p>
				</div>
			</div>

			{/* chart section */}
			<div className="w-full flex gap-4">
				<div className="w-2/3 border my-4 rounded-md p-4">
					<h2 className="font-semibold">Distributors Sales</h2>
					<p className="text-xs ">
						Keep track of Distributors sale every month
					</p>
					<div className="w-full">
						<YearlySalesChart chartData={chartData} />
					</div>
				</div>
				<div className="w-1/3 border my-4 rounded-md p-4 space-y-4">
					<div>
						<h2 className="font-semibold">Distributors monitored</h2>
						<p className="text-xs ">You’re using 67.5% of available spots.</p>
					</div>

					<div className="w-full">
						<TotalSalesChart agents={675} totalAgents={1000} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartOverview;
