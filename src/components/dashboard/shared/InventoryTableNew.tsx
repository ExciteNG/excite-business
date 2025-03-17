import React from "react";
import { format } from "date-fns";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { IoIosArrowRoundDown } from "react-icons/io";
// import { IoMdArrowDropup } from "react-icons/io";

import { Inventory } from "@/types/dashboard";
import Link from "next/link";

const InventoryTable = ({ inventory }: { inventory: Inventory[] }) => {
	console.log("Invernt: ", inventory);
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
					<Link
						href="/sales-performance-report/1"
						className="text-xs font-bold underline"
					>
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
								Old stock
							</TableHead>
							<TableHead className="text-center">Quantity Supplied</TableHead>
							<TableHead className="text-center">Quantity Sold</TableHead>
							<TableHead className="text-center">Quantity Remaining</TableHead>
							<TableHead className="text-center">Unit Price</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{inventory.map((list, key) => {
							return (
								<TableRow key={key} className="text-nowrap">
									<TableCell className="text-center font-semibold">
										<div className="flex justify-center items-center space-x-1">
											{Date.now() < new Date(list.exitDate).getTime() &&
											list.oldStockQuantity == 0 ? (
												<div className="p-1 rounded-full bg-green-400" />
											) : (
												<div className="p-1 rounded-full bg-yellow-500" />
											)}
											<span>{list.productName}</span>
										</div>
									</TableCell>
									<TableCell className="text-center cursor-pointer">
										{list.currentBatch.number}
									</TableCell>
									<TableCell className="text-center">
										{format(list.entryDate, "MMM do, yyy")}
									</TableCell>
									<TableCell className="text-center">
										{list.oldStockQuantity}
									</TableCell>
									<TableCell className="text-center">{list.quantity}</TableCell>
									<TableCell className="text-center">
										{list.quantitySold}
									</TableCell>
									<TableCell className="text-center">
										{list.oldStockQuantity + list.quantity - list.quantitySold}
									</TableCell>
									<TableCell className="text-center">
										&#8358; {list.price}
									</TableCell>
									{/* <TableCell className="">
										<p className="mx-auto text-[#027A48] bg-[#ECFDF3] w-10 rounded-lg flex items-center justify-center">
											<IoMdArrowDropup />
											<span className="text-xs">
												{Math.round((list.quantitySold / list.quantity) * 100)}%
											</span>
										</p>
									</TableCell> */}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default InventoryTable;
