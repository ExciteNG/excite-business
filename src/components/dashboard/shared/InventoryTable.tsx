import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableFooter,
} from "@/components/ui/table";
import { IoIosArrowRoundDown } from "react-icons/io";
import { InventoryProps } from "@/types/dashboard";

const InventoryTable = ({
	inventoryList,
	thisProduct,
}: {
	inventoryList: InventoryProps[];
	thisProduct: string;
}) => {
	const [totals, setTotals] = useState({
		amountSupplied: 0,
		amountSold: 0,
		amountRemaining: 0,
	});

	const [filterdProduct, setFilterdProduct] =
		useState<InventoryProps[]>(inventoryList);

	useEffect(() => {
		if (thisProduct === "ALL") {
			setFilterdProduct(inventoryList);
		} else {
			const sortInventory = inventoryList.filter(
				(item) => item.Product === thisProduct
			);
			setFilterdProduct(sortInventory);
		}
	}, [thisProduct, inventoryList]);

	useMemo(() => {
		const amountSupply = filterdProduct.reduce(
			(a, b) => a + b.UnitP * b.QuantityS,
			0
		);
		const amountSold = filterdProduct.reduce(
			(a, b) => a + b.UnitP * b.quantityS,
			0
		);
		const amountRemain = filterdProduct.reduce(
			(a, b) => a + b.UnitP * (b.QuantityS - b.quantityS),
			0
		);

		return setTotals({
			amountSupplied: amountSupply,
			amountSold: amountSold,
			amountRemaining: amountRemain,
		});
		// console.log(amountSupply)
	}, [filterdProduct]);

	return (
		<div className=" border border-slate-100 shadow p-2">
			<div className="w-full p-3 border-b flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<h3 className="font-semibold">Inventory Management</h3>
					<div className="flex items-center space-x-2">
						<div className="flex items-center space-x-0.5">
							<div className="p-1 rounded-full bg-green-400"></div>
							<span className="text-xs">Current Product</span>
						</div>
						<div className="flex items-center space-x-0.5">
							<div className="p-1 rounded-full bg-yellow-500"></div>
							<span className="text-xs">Brought Forward</span>
						</div>
						<div className="flex items-center space-x-0.5">
							<div className="p-1 rounded-full bg-red-500"></div>
							<span className="text-xs">Recalled Product</span>
						</div>
					</div>
				</div>
				<div>
					<Link href="/super-agent" className="text-xs font-bold underline">
						{" "}
						View Sales performance report
					</Link>
				</div>
			</div>
			<div className="max-h-[60vh] overflow-auto relative">
				<Table>
					<TableHeader className="">
						<TableRow className="text-nowrap">
							<TableHead className="flex items-center justify-center space-x-1">
								<span>Product</span>
								<IoIosArrowRoundDown />
							</TableHead>
							<TableHead className="text-center">Batch ID</TableHead>
							<TableHead className="text-center">Entry Date</TableHead>
							<TableHead className="text-center font-extrabold text-green-800">
								Quantity Supplied
							</TableHead>
							<TableHead className="text-center">Unit Price</TableHead>
							<TableHead className="text-center font-bold text-slate-800 bg-green-600/30">
								Supplied Receivable
							</TableHead>
							<TableHead className="text-center">Quantity Sold</TableHead>
							<TableHead className="text-center font-bold text-slate-800 bg-green-400/25">
								Amount Sold
							</TableHead>
							<TableHead className="text-center">Quantity Remaining</TableHead>
							<TableHead className="text-center font-bold text-slate-800 bg-yellow-600/25">
								Amount Remaining
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filterdProduct.map((list, key) => {
							return (
								<TableRow key={key} className="text-nowrap">
									<TableCell className="text-center cursor-pointer ">
										<div className="flex items-center space-x-1">
											{key % 2 === 0 ? (
												<div className="p-1 rounded-full bg-green-400"></div>
											) : (
												<div className="p-1 rounded-full bg-yellow-500"></div>
											)}{" "}
											<span>{list.Product}</span>
										</div>
									</TableCell>
									<TableCell className="text-center font-semibold">
										{list.BatchID}
									</TableCell>
									<TableCell className="text-center">{list.EntryD}</TableCell>
									<TableCell className="text-center">
										{list.QuantityS.toLocaleString()}
									</TableCell>
									<TableCell className="font-semibold text-center">
										&#8358;{list.UnitP.toLocaleString()}
									</TableCell>
									<TableCell className="font-semibold text-center bg-green-600/30 ">
										&#8358;{(list.QuantityS * list.UnitP).toLocaleString()}
									</TableCell>
									<TableCell className="text-center">
										{list.quantityS.toLocaleString()}
									</TableCell>
									<TableCell className="font-semibold bg-green-400/20 text-center">
										&#8358;{(list.quantityS * list.UnitP).toLocaleString()}
									</TableCell>
									<TableCell className="text-center">
										{(list.QuantityS - list.quantityS).toLocaleString()}
									</TableCell>
									<TableCell className="font-semibold bg-yellow-600/20 text-center">
										&#8358;
										{(
											(list.QuantityS - list.quantityS) *
											list.UnitP
										).toLocaleString()}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
					<TableFooter className="">
						<TableRow className=" bg-slate-200 ">
							<TableCell className="text-center w-[124px] font-bold text-base text-slate-700">
								Total
							</TableCell>
							<TableCell
								colSpan={4}
								className="text-center w-[115px]"
							></TableCell>
							<TableCell className="text-center w-[124px] font-bold text-base text-slate-700">
								&#8358;{totals.amountSupplied.toLocaleString()}
							</TableCell>
							<TableCell className="text-center w-[106px]"></TableCell>
							<TableCell className="text-center w-[104px] font-bold text-base text-slate-700">
								&#8358;{totals.amountSold.toLocaleString()}
							</TableCell>
							<TableCell className="text-center w-[135px]"></TableCell>
							<TableCell className="text-center w-[135px] font-bold text-base text-slate-700">
								&#8358;{totals.amountRemaining.toLocaleString()}
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
			{/* <footer className="">
				<Table>
					<TableFooter className="relative bottom-1">
						<TableRow className=" bg-slate-200 ">
							<TableCell className="text-center w-[115px]"></TableCell>
							<TableCell className="text-center w-[89px]"></TableCell>
							<TableCell className="text-center w-[93px]"></TableCell>
							<TableCell className="text-center w-[124px]"></TableCell>
							<TableCell className="text-center w-[84px]"></TableCell>
							<TableCell className="text-center w-[124px] font-bold text-base text-slate-700">
								&#8358;{totals.amountSupplied.toLocaleString()}
							</TableCell>
							<TableCell className="text-center w-[106px]"></TableCell>
							<TableCell className="text-center w-[104px] font-bold text-base text-slate-700">
								&#8358;{totals.amountSold.toLocaleString()}
							</TableCell>
							<TableCell className="text-center w-[135px]"></TableCell>
							<TableCell className="text-center w-[135px] font-bold text-base text-slate-700">
								&#8358;{totals.amountRemaining.toLocaleString()}
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</footer> */}
		</div>
	);
};

export default InventoryTable;
