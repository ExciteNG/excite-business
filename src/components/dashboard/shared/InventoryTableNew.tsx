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

const InventoryTable = ({ inventory }: { inventory: Inventory[] }) => {
	return (
		<div className=" border border-slate-100 shadow p-2">
			<div className="p-2 border-b">
				<h3 className="font-semibold">Inventory Management</h3>
			</div>
			<div className="h-[60vh] overflow-auto">
				<Table>
					<TableHeader className="">
						<TableRow className="text-nowrap">
							<TableHead className="flex items-center justify-center space-x-1">
								<span>Product</span>
								<IoIosArrowRoundDown />
							</TableHead>
							<TableHead className="text-center">Entry Date</TableHead>
							<TableHead className="text-center">Batch ID</TableHead>
							<TableHead className="text-center">
								Quantity Brought forward
							</TableHead>
							<TableHead className="text-center">Quantity supplied</TableHead>
							<TableHead className="text-center">Quantity sold</TableHead>
							<TableHead className="text-center">Quantity remaining</TableHead>
							<TableHead className="text-center">Price</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{inventory.map((list, key) => {
							return (
								<TableRow key={key} className="text-nowrap">
									<TableCell className="text-center font-semibold">
										{list.productName}
									</TableCell>
									<TableCell className="text-center">
										{format(list.entryDate, "MMM do, YYY")}
									</TableCell>
									<TableCell className="text-center cursor-pointer">
										{list.currentBatch.number}
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
