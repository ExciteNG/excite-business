import React from "react";
import { DashProps } from "@/types/dashboard";

export const DashCard = (props: DashProps) => {
	// console.log(props.width);
	return (
		<div
			className={`border rounded-md h-32 shadow flex justify-center items-center`}
			style={{ width: `${props.width}%` }}
		>
			<div className="w-fit space-y-2">
				<p className="text-center font-semibold">{props.title}</p>
				<p className="text-center font-bold text-xl">
					{props.matrix.toLocaleString()}
				</p>
			</div>
		</div>
	);
};
