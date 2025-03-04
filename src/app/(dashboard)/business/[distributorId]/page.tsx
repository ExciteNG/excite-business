"use client";
import React from "react";
import { useParams } from "next/navigation";
import { distributorList } from "@/lib/dummyData";
import FullInventoryDash from "@/components/dashboard/shared/FullInventoryDash";
import { useReactQuery } from "@/services/apiHelper";

const Page = () => {
  const { distributorId } = useParams();
  const { data, isPending } = useReactQuery(
    "distributur-data",
    `/supagent/${distributorId}`
  );
  const thisDistributor = distributorList.filter(
    (distri) => distri.id === distributorId
  )[0];

  console.log("Distributor: ", data?.data, isPending);
  return (
    <section className="p-5">
      {/* <FullInventoryDash
        perDistributor={thisDistributor}
        id={distributorId}
        inventory={280}
        sales={143}
      /> */}
    </section>
  );
};

export default Page;
