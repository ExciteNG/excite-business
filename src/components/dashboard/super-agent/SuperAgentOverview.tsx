"use client";
import React, { useState, useEffect } from "react";

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
import ChartOverview from "../shared/ChartOverview";

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
      <ChartOverview
        location={location}
        setLocation={setLocation}
        refCode={data?.data.data.user.refCode}
        totalDistributors={data?.data.data.distributors.length}
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

