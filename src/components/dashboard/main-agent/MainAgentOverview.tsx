"use client";
import React, { useState } from "react";
import { subDistributorList } from "@/lib/dummyData";
import DistributorTable from "../shared/DistributorTable";
import ChartOverview from "../shared/ChartOverview";
import { DisList } from "@/types/dashboard";
import { chartData } from "@/constants/dummy";

export default function MainAgentOverview() {
	const [location, setLocation] = useState("all");
	const [chart, setChart] = useState(chartData);
	const [distributor, setDistributor] = useState<DisList[]>(subDistributorList);
	const filterByLocation = () => {
		if (location !== "all") {
			const filteredDistributor = subDistributorList.filter(
				(dist) => dist.location === location
			);

			setDistributor(filteredDistributor);
			let filteredSales;
			if (filteredDistributor.length > 0) {
				filteredSales = chartData.map((chart) => ({
					...chart,
					sales: chart.sales / [4, 8, 10][Math.floor(Math.random() * 3)],
				}));
				setChart(filteredSales);
			} else {
				filteredSales = chartData.map((chart) => ({
					...chart,
					sales: 0,
				}));
			}
			setChart(filteredSales);
		} else {
			setDistributor(subDistributorList);
			setChart(chartData);
		}
	};

	return (
		<section className="p-5">
			{/* Charts */}
			<ChartOverview
				location={location}
				chartData={chart}
				setLocation={setLocation}
				filterByLocation={filterByLocation}
			/>

			{/* DISTRIBUTORS */}
			<DistributorTable
				distRank={"All"}
				distributors={distributor}
				matrix={300}
			/>
		</section>
	);
}
