import React from 'react';
import { useParams, useRouter } from "next/navigation";
import { distributorList } from "@/lib/dummyData";
import { DashCard } from "@/components/dashboard/shared/Card";
import { IoPersonOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import InventoryManagement from "@/components/dashboard/shared/InventoryManagement";
import { DisList } from '@/types/dashboard';


const FullInventoryDash = ({perDistributor, id}:{perDistributor:DisList, id:string|string[]}) => {
    const router = useRouter();
    const paramsObj = useParams();
    console.log(`/super-agent/${id}/${perDistributor.name}/${perDistributor.id}`);

    function pathNavLink(who:DisList) {
        if (Object.keys(paramsObj).length === 3) {
            return alert('fix this link chain')
            // return router.push(`/super-agent/${id}/${who.name}/${who.id}`);
        }
        
        return router.push(`/super-agent/${id}/${who}`);
    };
    
  return (
    <>
      <div className='space-y-9'>
        {/* PROFILE */}
        <div className='flex items-end justify-between'>
          <div className='flex items-center space-x-6'>
            <div className='p-5 rounded-full border-4 border-white bg-slate-100 shadow-md'>
              <IoPersonOutline size={50} className='text-slate-500' />
            </div>
            <div className='space-y-1.5'>
              <p className='font-bold text-xl'>{perDistributor.name}</p>
              <div className='flex items-center space-x-3'>
                <p className='bg-[#ECFDF3] text-[#027A48] flex items-center w-fit px-2 rounded-full space-x-1'>
                  <span>&#8226; </span>
                  <span className='text-xs'>{perDistributor.category}</span>
                </p>
                <div className='flex items-center space-x-2'>
                  <IoLocationOutline className='text-red-800' />{" "}
                  <span className='text-xs font-medium'>
                    {perDistributor.location}
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <FiGift className='text-yellow-700' />
                  <p className='text-xs font-medium'>Give Incentive</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p
              className='text-xs underline cursor-pointer'
              onClick={() => pathNavLink(perDistributor)}
            >
              View distributors working with {perDistributor.name}
            </p>
          </div>
        </div>
        {/* DASHBOARD CARDS */}
        <div className='flex items-center w-full space-x-5 px-1'>
          <DashCard width={40} title='Total Inventory' matrix={280} />
          <DashCard width={40} title='Total Sales' matrix={143} />
        </div>

        {/* INVENTORY MANAGEMENT TABLE */}
        <InventoryManagement />
      </div>
    </>
  );
}

export default FullInventoryDash