"use client";
import React from "react";
import { useParams } from "next/navigation";

import { useReactQuery } from "@/services/apiHelper";
import { DashCard } from "@/components/dashboard/shared/Card";
import DistributorTable from "@/components/dashboard/shared/DistributorTable";

const Page = () => {
	const { distributorId } = useParams();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { data, isPending } = useReactQuery<any>(
		"distributors",
		`/supagent/${distributorId}/distributors`
	);

	if (isPending) {
		return <div className="p-5">Loading...</div>;
	}

	return (
		<section className="p-5">
			<div className="space-y-9">
				<DashCard
					title="Total Distributors"
					matrix={data?.data.data.totalDistributors || 0}
					width={25}
				/>
				<DistributorTable
					distRank={data?.data.data.fullname}
					distributors={data?.data.data.distributors || []}
					matrix={data?.data.data.totalDistributors}
				/>
			</div>
		</section>
	);
};

export default Page;
