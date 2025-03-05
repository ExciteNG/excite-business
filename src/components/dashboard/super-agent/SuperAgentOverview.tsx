"use client"
import React from "react";
import { distributorList } from "@/lib/dummyData";
import DistributorTable from "../shared/DistributorTable";
import ChartOverview from "../shared/ChartOverview";

export default function SuperAgentOverview() {
  
  return (
    <section className='w-full'>
      {/* Chart Overview */}
      <ChartOverview />
      {/* Distributor table */}
      <DistributorTable distRank={'All'} distributors={distributorList} matrix={675} />
    </section>
  );
}
