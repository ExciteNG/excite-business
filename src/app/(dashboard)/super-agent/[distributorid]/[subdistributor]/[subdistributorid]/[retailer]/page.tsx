"use client";
import React from "react";
import { useParams } from "next/navigation";
import { retailerList } from "@/lib/dummyData";
import DistributorTable from "@/components/dashboard/shared/DistributorTable";
import { DashCard } from "@/components/dashboard/shared/Card";

const Page = () => {
  const { retailer } = useParams();
  const index = retailer.indexOf("%");
  const cleanFN = retailer.slice(0, index);
  console.log(cleanFN, ": cleaned name");
  return (
    <section className='p-5'>
      <div className='space-y-9'>
        <DashCard title='Total Distributors' matrix={32} width={25} />
        <DistributorTable
          distRank={cleanFN}
          distributors={retailerList}
          matrix={32}
        />
      </div>
    </section>
  );
};

export default Page;
