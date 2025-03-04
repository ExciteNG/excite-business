"use client";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { statesAndLgas } from "@/constants/statesAndLgas";
import { Copy } from "lucide-react";
import YearlySalesChart from "../shared/YearlySalesChart";
import TotalSalesChart from "../shared/TotalSalesChart";
import { chartData } from "@/constants/dummy";
// import { distributorList } from "@/lib/dummyData";
// import { distributorList as dummyData } from "@/constants/dummy";
import DistributorTable from "../shared/DistributorTable";
// import DataDistributorTable from "../shared/DataDistributorTable";
import { useReactQuery } from "@/services/apiHelper";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DistributorsTable = {
  fullName: string;
  lastModified: string;
  location: string;
  userType: string;
  salesPerformance: string;
};

export const columns: ColumnDef<DistributorsTable>[] = [
  {
    accessorKey: "fullName",
    header: "Distributor",
  },
  {
    accessorKey: "lastModified",
    header: "Last modified",
  },
  {
    accessorKey: "location",
    header: "State",
  },
  {
    accessorKey: "userType",
    header: "Category",
  },
  {
    accessorKey: "salesPerformance",
    header: "",
  },
];

export default function SuperAgentOverview() {
  const [distributors, setDistributors] = useState([]);
  const [location, setLocation] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, isPending } = useReactQuery<any>(
    "business-overview",
    `/supagent/overview?state=${location}`
  );

  useEffect(() => {
    const filteredDistributors =
      data?.data.data.distributors &&
      data?.data.data.distributors.map(
        (distributor: {
          _id: string;
          userType: string;
          fullname: string;
          location: { state: string };
        }) => ({
          id: distributor._id,
          category: distributor.userType,
          name: distributor.fullname,
          performance: "5",
          location: distributor.location.state,
        })
      );
    setDistributors(filteredDistributors || []);
  }, [data]);
  console.log("Distributors: ", distributors, data?.data.data.distributors);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full">
      <div className="w-full flex justify-between gap-4 items-center">
        <div className="flex gap-2">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(statesAndLgas).map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button className="bg-[#A7CC48] py-2 px-6 rounded-md font-medium">
            Search
          </button>
        </div>
        <div>
          <p className="text-sm font-medium flex items-center gap-2">
            Referral Code:{" "}
            <span className="font-semibold">
              {data?.data.data.user.refCode}
            </span>{" "}
            <Copy className="w-4 h-4" />{" "}
          </p>
        </div>
      </div>

      {/* chart section */}
      <div className="w-full flex gap-4">
        <div className="w-2/3 border my-4 rounded-md p-4">
          <h2 className="font-semibold">Distributors Sales</h2>
          <p className="text-xs ">
            Keep track of Distributors sale every month
          </p>
          <div className="w-full">
            <YearlySalesChart chartData={chartData} />
          </div>
        </div>
        <div className="w-1/3 border my-4 rounded-md p-4">
          <h2 className="font-semibold">Distributors monitored</h2>
          <p className="text-xs ">
            You’re using{" "}
            {Math.round((data?.data.data.distributors.length / 1000) * 100)}% of
            available spots.
          </p>
          <div className="w-full">
            <TotalSalesChart
              agents={data?.data.data.distributors.length}
              totalAgents={1000}
            />
          </div>
        </div>
      </div>

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

