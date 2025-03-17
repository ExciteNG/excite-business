/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
	distributorList,
	subDistributorList,
	retailerList,
} from "@/lib/dummyData";
import { RiHome6Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { env } from 'node:process';

const company = {
	super: "SBC",
	main: "MainPartner",
	sub: "SubPartner",
	retail: "Retailer",
};
import { useReactQuery } from "@/services/apiHelper";

const Header = () => {
	const {
		data,
		// isPending
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} = useReactQuery<any>("profile", "/supagent");
	const {
		distributorid,
		subdistributor,
		subdistributorid,
		retailer,
		retailerid,
	} = useParams();
	const params = useParams();
	const pathName = usePathname();
	const router = useRouter();
	console.log(pathName.split("/"));

	//filter distributor ID
	const { name } =
		distributorid !== undefined
			? distributorList.filter((distri) => distri.id === distributorid)[0]
			: { name: "name" };
	// filter subdistributor ID
	const { name: subName } =
		subdistributorid !== undefined
			? subDistributorList.filter((distri) => distri.id === subdistributorid)[0]
			: { name: "name" };
	// filter retailer ID
	const { name: subSubName } =
		retailerid !== undefined
			? retailerList.filter((distri) => distri.id === retailerid)[0]
			: { name: "name" };

	return (
		<nav className="sticky top-0 h-20 bg-white z-40 border border-slate-50 shadow w-full flex items-center justify-between px-5">
			{Object.keys(params).length === 0 && pathName.split("/").length === 2 ? (
				<div className="">
					<h1 className="text-lg font-bold">
						Welcome!{" "}
						<span className="font-medium">
							{data?.data.data.name || data?.data.data.fullname || ""}
						</span>
					</h1>
					<p>Track, Manage your distributors</p>
				</div>
			) : (
				<div className="flex items-center space-x-1">
					<RiHome6Line
						className="text-slate-500 cursor-pointer"
						title={`${subdistributor === undefined ? "Home" : "Go Back"}`}
						size={20}
						onClick={() => router.back()}
					/>
					<div className="flex items-center space-x-1 text-sm text-slate-600">
						<MdKeyboardArrowRight />{" "}
						{pathName.includes("inventory") ? ( //THIS CODE WILL NEED REFACTORING
							<span className="font-bold text-xl">Inventory Management</span>
						) : (
							<span className="">
								Profile of <span className="font-medium">{name}</span>
							</span>
						)}
					</div>
					{subdistributor !== undefined && (
						<div className="flex items-center space-x-1 text-sm text-slate-600">
							<MdKeyboardArrowRight />
							{subdistributorid === undefined ? (
								<span className="">
									Distributors working with{" "}
									<span className="font-medium">{name}</span>
								</span>
							) : (
								<span className="">
									Distributors wor...{" "}
									{/* <span className='font-medium'>{name}</span> */}
								</span>
							)}
						</div>
					)}
					{subdistributorid !== undefined && (
						<div className="flex items-center space-x-1 text-sm text-slate-600">
							<MdKeyboardArrowRight />{" "}
							<span className="">
								Profile of <span className="font-medium">{subName}</span>
							</span>
						</div>
					)}
					{retailer !== undefined && (
						<div className="flex items-center space-x-1 text-sm text-slate-600">
							<MdKeyboardArrowRight />{" "}
							{retailerid === undefined ? (
								<span className="">
									Retailers under <span className="font-medium">{subName}</span>
								</span>
							) : (
								<span className="">
									Retailers under...{" "}
									{/* <span className='font-medium'>{name}</span> */}
								</span>
							)}
						</div>
					)}
					{retailerid !== undefined && (
						<div className="flex items-center space-x-1 text-sm text-slate-600">
							<MdKeyboardArrowRight />{" "}
							<span className="">
								Profile of <span className="font-medium">{subSubName}</span>
							</span>
						</div>
					)}
				</div>
			)}

			<div className="flex items-center space-x-2">
				<IoIosNotificationsOutline size={25} />
				<div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-200 shadow overflow-hidden">
					{data?.data.data.image?.Location && (
						<img
							src={data?.data.data.image.Location}
							alt="profile-image"
							className="w-full h-full object-center"
						/>
					)}
				</div>
				<p className="font-medium">
					{pathName.startsWith("/business")
						? data?.data.data.acronym
						: pathName.startsWith("/main-agent")
						? company.main
						: pathName.startsWith("/sub-agent")
						? company.sub
						: company.retail}
				</p>
			</div>
		</nav>
	);
};

export default Header;
