import React from "react";
import { useParams, useRouter } from "next/navigation";
import { DashCard } from "@/components/dashboard/shared/Card";
import { IoPersonOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import InventoryManagement from "@/components/dashboard/shared/InventoryManagement";
import { DisList } from "@/types/dashboard";

const FullInventoryDash = ({
  perDistributor,
  id,
  inventory,
  sales,
}: {
  perDistributor: DisList;
  id: string | string[];
  inventory: number;
  sales: number;
}) => {
  const router = useRouter();
  const paramsObj = useParams();
  const navKeys = Object.keys(paramsObj).length;
  // console.log(paramsObj);
  const { distributorid, subdistributor } = paramsObj;

  function pathNavLink(who: DisList) {
    const baseLink = "/super-agent/distribution";
    if (navKeys === 3) {
      //  alert('fix this link chain')
      return router.push(
        `${baseLink}/${distributorid}/${subdistributor}/${id}/${who.name}`
      );
    } else if (navKeys === 4) {
      return alert("fix this link chain");
    }

    return router.push(`${baseLink}/${id}/${who.name}`);
  }

  return (
    <>
      <div className="space-y-9">
        {/* PROFILE */}
        <div className="flex items-end justify-between">
          <div className="flex items-center space-x-6">
            <div className="p-5 rounded-full border-4 border-white bg-slate-100 shadow-md">
              <IoPersonOutline size={50} className="text-slate-500" />
            </div>
            <div className="space-y-1.5">
              <p className="font-bold text-xl">{perDistributor?.name}</p>
              <div className="flex items-center space-x-3">
                <p className="bg-[#ECFDF3] text-[#027A48] flex items-center w-fit px-2 rounded-full space-x-1">
                  <span>&#8226; </span>
                  <span className="text-xs">{perDistributor?.category}</span>
                </p>
                <div className="flex items-center space-x-2">
                  <IoLocationOutline className="text-red-800" />{" "}
                  <span className="text-xs font-medium">
                    {perDistributor?.location}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiGift className="text-yellow-700" />
                  <p className="text-xs font-medium">Give Incentive</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p
              className={`${
                navKeys === 5 && "hidden"
              } text-xs underline cursor-pointer`}
              onClick={() => pathNavLink(perDistributor)}
            >
              View {navKeys === 3 ? "Retailers" : "Distributors"} working with{" "}
              {perDistributor?.name}
            </p>
          </div>
        </div>

        {/* DASHBOARD CARDS */}
        <div className="flex items-center w-full space-x-5 px-1">
          <DashCard width={40} title="Total Inventory" matrix={inventory} />
          <DashCard width={40} title="Total Sales" matrix={sales} />
        </div>

        {/* INVENTORY MANAGEMENT TABLE */}
        <InventoryManagement />
      </div>
    </>
  );
};

export default FullInventoryDash;
