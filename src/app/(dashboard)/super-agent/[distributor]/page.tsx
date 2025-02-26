"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { distributorList} from '@/lib/dummyData';
import { DashCard } from '@/components/dashboard/shared/Card';
import { IoPersonOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import InventoryManagement from '@/components/dashboard/shared/InventoryManagement';




const Page = () => {
    const { distributor } = useParams();
    const thisDistributor = distributorList.filter((distri) => distri.id === distributor)[0];

  return (
    <section className='p-5'>
      <div className='space-y-9'>
        {/* PROFILE */}
        <div className='flex items-end justify-between'>
          <div className='flex items-center space-x-6'>
            <div className='p-5 rounded-full border-4 border-white bg-slate-100 shadow-md'>
              <IoPersonOutline size={50} className='text-slate-500' />
            </div>
            <div className='space-y-1.5'>
              <p className='font-bold text-xl'>{thisDistributor.name}</p>
              <div className='flex items-center space-x-3'>
                <p className='bg-[#ECFDF3] text-[#027A48] flex items-center w-fit px-2 rounded-full space-x-1'>
                  <span>&#8226; </span>
                  <span className='text-xs'>{thisDistributor.category}</span>
                </p>
                <div className='flex items-center space-x-2'>
                  <IoLocationOutline className='text-red-800' />{" "}
                  <span className='text-xs font-medium'>
                    {thisDistributor.location}
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
            <p className='text-xs underline'>
              View distributors working with {thisDistributor.name}
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
    </section>
  );
}

export default Page;