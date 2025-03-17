"use client";
import React, { useState, useEffect } from "react";
// import { distributorList } from "@/lib/dummyData";
import DistributorTable from "../shared/DistributorTable";
import { useReactQuery } from "@/services/apiHelper";
import ChartOverview from "../shared/ChartOverview";

export default function MainAgentOverview() {
  const [distributors, setDistributors] = useState([]);
  const [location, setLocation] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, isPending } = useReactQuery<any>(
    "distributor-overview",
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
      <DistributorTable
        distRank={"ALL"}
        distributors={distributors || []}
        matrix={data?.data.data.distributors.length}
      />
    </section>
  );
}

