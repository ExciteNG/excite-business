// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
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
import { QueryType } from "../super-agent/SuperAgentOverview";
import { useState } from "react";
// import { chartData } from "@/constants/dummy";

// const referral = {
//   superAgent: "SBC/004",
//   mainAgent: "SBC/004/010",
//   subAgent: " SBC/004/010/003",
// };

type Props = {
	query: QueryType;
	handleQueryChange: (value: QueryType) => void;
	refCode: string;
	isFetching: boolean;
	totalDistributors: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	salesData: any;
};

const ChartOverview = ({
	refCode,
	// query,
	isFetching,
	salesData,
	handleQueryChange,
	totalDistributors,
}: Props) => {
	// const pathName = usePathname();
	const [state, setState] = useState<string>("");

	return (
		<div>
			<div className="w-full flex justify-between gap-4 items-center">
				<div className="flex gap-2">
					<Select value={state} onValueChange={setState}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select states" />
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
						onClick={() =>
							handleQueryChange({
								state: state,
								month: null,
								year: null,
								day: null,
								userType: null,
								refCode: null,
							})
						}
						className="bg-[#A7CC48] py-2 px-6 rounded-md font-medium"
					>
						{isFetching ? "Searching" : "Search"}
					</button>
				</div>
				<div>
					<p className="text-sm font-medium flex items-center gap-2">
						Referral Code:{" "}
						<span className="font-semibold">
							{/* {pathName.startsWith("/super-agent")
                ? referral.superAgent
                : pathName.startsWith("/main-agent")
                ? referral.mainAgent
                : pathName.startsWith("/sub-agent") && referral.subAgent} */}
							{refCode}
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
						<YearlySalesChart chartData={salesData} />
					</div>
				</div>
				<div className="w-1/3 border my-4 rounded-md p-4 space-y-4">
					<div>
						<h2 className="font-semibold">Distributors monitored</h2>
						<p className="text-xs ">
							You’re using {Math.round((totalDistributors / 1000) * 100)}% of
							available spots.
						</p>
					</div>

					<div className="w-full">
						<TotalSalesChart
							agents={totalDistributors || 0}
							totalAgents={1000}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartOverview;
