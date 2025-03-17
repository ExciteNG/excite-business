"use client";
import React, { useState } from "react";

import { useReactQuery } from "@/services/apiHelper";

import ChartOverview from "../shared/ChartOverview";
import DistributorTable from "../shared/DistributorTable";

export type QueryType = {
	state: string;
	month: string | null;
	year: string | null;
	day: string | null;
	userType: string | null;
	refCode: string | null;
};
export default function SuperAgentOverview() {
	// const [distributors, setDistributors] = useState([]);
	const [query, setQuery] = useState<QueryType>({
		state: "all",
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

	const handleQueryChange = () => {
		refetch();
	};
	// console.log("Distributor: ", data, isPending);

	if (isPending) {
		return <div>Loading...</div>;
	}

	return (
		<section className="w-full">
			<ChartOverview
				query={query}
				setQuery={setQuery}
				handleQueryChange={handleQueryChange}
				isFetching={isFetching || isPending}
				refCode={data?.data.data.user.refCode}
				totalDistributors={data?.data.data.distributors.length}
				salesData={data?.data.data.salesData}
			/>

			{/* Distributor table */}
			{/* <DataDistributorTable columns={columns} data={dummyData} /> */}
			<DistributorTable
				distRank={query.state}
				distributors={data?.data.data.distributors || []}
				matrix={data?.data.data.distributors.length}
			/>
		</section>
	);
}
