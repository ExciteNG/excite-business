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
		"business-overview",
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
					location: { state: string };
				}) => ({
					id: distributor._id,
					category: distributor.userType,
					name: distributor.fullname,
					lastModified: format(distributor.createdAt, "MMM do, YYY"),
					location: distributor.location.state,
				})
			);
		setDistributors(filteredDistributors || []);
	}, [data]);

	if (isPending) {
		return <div>Loading...</div>;
	}

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
