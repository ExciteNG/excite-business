"use client";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
// import { distributorList } from "@/lib/dummyData";
// import { distributorList as dummyData } from "@/constants/dummy";
import DistributorTable from "../shared/DistributorTable";
// import DataDistributorTable from "../shared/DataDistributorTable";
import { useReactQuery } from "@/services/apiHelper";

import ChartOverview from "../shared/ChartOverview";

export type QueryType = {
	state: string;
	month: string | null;
	year: string | null;
	day: string | null;
	userType: string | null;
	refCode: string | null;
};
export default function SuperAgentOverview() {
	const [location, setLocation] = useState("all");
	const [chart, setChart] = useState(chartData);
	const [distributors, setDistributors] = useState([]);
	const [query, setQuerey] = useState<QueryType>({
		state: "",
		month: null,
		year: null,
		day: null,
		userType: null,
		refCode: null,
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { data, isPending, refetch, isFetching } = useReactQuery<any>(
		"business-overvie",
		`/supagent/overview?state=${query.state}&month=${query.month || ""}&year=${
			query.year || ""
		}&day=${query.day || ""}&userType=${query.userType || ""}&refCode=${
			query.refCode || ""
		}`
	);

	const handleQueryChange = (value: Partial<QueryType>) => {
		setQuerey((prev) => ({ ...prev, ...value }));
		refetch();
	};
	console.log("Distributor: ", data, isPending);

	useEffect(() => {
		const filteredDistributors =
			data?.data.data.distributors &&
			data?.data.data.distributors.map(
				(distributor: {
					_id: string;
					userType: string;
					fullname: string;
					createdAt: string;
					performance: number;
					location: { state: string };
				}) => {
					console.log("Dist: ", distributor.performance);
					return {
						id: distributor._id,
						category: distributor.userType,
						name: distributor.fullname,
						performance: distributor.performance,
						lastModified: format(distributor.createdAt, "MMM do, YYY"),
						location: distributor.location.state,
					};
				}
			);
		setDistributors(filteredDistributors || []);
	}, [data]);

	const filterByLocation = () => {
		if (location !== "all") {
			const filteredDistributor = distributorList.filter(
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
			setDistributor(distributorList);
			setChart(chartData);
		}
	};

	if (isPending) {
		return <div>Loading...</div>;
	}

	// console.log("Dist: ", distributors);

	return (
		<section className="w-full">
			<ChartOverview
				query={query}
				handleQueryChange={handleQueryChange}
				isFetching={isFetching}
				refCode={data?.data.data.user.refCode}
				totalDistributors={data?.data.data.distributors.length}
				salesData={data?.data.data.salesData}
			/>

			{/* Distributor table */}
			{/* <DataDistributorTable columns={columns} data={dummyData} /> */}
			<DistributorTable
				distRank={"ALL"}
				distributors={distributors || []}
				matrix={data?.data.data.distributors.length}
			/>
		</section>
	);
}
