// import React, { useEffect, useState } from "react";
"use client";
import Link from "next/link";
import { DashCard } from "@/components/dashboard/shared/Card";
import { IoPersonOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
// import InventoryManagement from "@/components/dashboard/shared/InventoryTable";
// import { inventoryManagement } from "@/lib/dummyData";
// import { IDistributor } from "@/types/dashboard";
import { useReactQuery } from "@/services/apiHelper";
import { useParams } from "next/navigation";
import InventoryTable from "./InventoryTableNew";

const FullInventoryDash = () => {
	const { distributorId } = useParams();
	// const [inventory, setInventory] = useState([]);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { data, isPending, isError } = useReactQuery<any>(
		"distributur-data",
		`/supagent/${distributorId}`
	);
	console.log(data?.data.data);

	// useEffect(() => {
	// 	const filteredInventory =
	// 		data?.data.data &&
	// 		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	// 		data?.data.data.inventory.map((inventory: any) => ({
	// 			batchId: inventory.currentBatch.id,
	// 		}));
	// 	setInventory(filteredInventory || []);
	// }, [data]);

	if (isPending) {
		return <div className="p-5">Loading...</div>;
	}

	if (isError) {
		return <div className="p-5">An error occured</div>;
	}

	return (
		<>
			<div className="space-y-9">
				{/* PROFILE */}
				<div className="flex items-end justify-between">
					<div className="flex items-center space-x-6">
						<div className="p-5 rounded-full border-4 border-white bg-slate-100 shadow-md">
							<IoPersonOutline size={50} className="text-slate-500" />
						</div>
						<div className="space-y-1.5">
							<p className="font-bold text-xl">{data?.data.data.fullname}</p>
							<div className="flex items-center space-x-3">
								<p className="bg-[#ECFDF3] text-[#027A48] flex items-center w-fit px-2 rounded-full space-x-1">
									<span>&#8226; </span>
									<span className="text-xs">{data?.data.data.userType}</span>
								</p>
								<div className="flex items-center space-x-2">
									<IoLocationOutline className="text-red-800" />{" "}
									<span className="text-xs font-medium">
										{data?.data.data.location.state}
									</span>
								</div>
								<div className="flex items-center space-x-2">
									<FiGift className="text-yellow-700" />
									<p className="text-xs font-medium">Give Incentive</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						{data?.data.data.userType !== "Retailer" && (
							<Link
								href={`/business/${data?.data.data._id}/distributors`}
								className="text-xs underline cursor-pointer"
							>
								View{" "}
								{data?.data.data.userType === "Distributor"
									? "Retailers"
									: "Distributors"}{" "}
								working with {data?.data.data.fullname}
							</Link>
						)}
					</div>
				</div>

				{/* DASHBOARD CARDS */}
				<div className="flex items-center w-full space-x-5 px-1">
					<DashCard
						width={40}
						title="Total Inventory"
						matrix={data?.data.data.totalProducts}
					/>
					<DashCard
						width={40}
						title="Total Sales"
						matrix={data?.data.data.totalSales}
					/>
				</div>

				{/* INVENTORY MANAGEMENT TABLE */}
				{/* <InventoryManagement inventoryList={inventoryManagement} /> */}
				<InventoryTable inventory={data?.data.data.inventory} />
			</div>
		</>
	);
};

export default FullInventoryDash;
