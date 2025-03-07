import React, {useMemo, useState} from 'react';
import { useParams, useRouter } from "next/navigation";
import { DashCard } from "@/components/dashboard/shared/Card";
import { IoPersonOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import InventoryTable from "@/components/dashboard/shared/InventoryTable";
import { inventoryManagement } from '@/lib/dummyData';
import { DisList } from '@/types/dashboard';
import { IndividualProductChart } from './IndividualProductChart';

type MerginProps = {
  name: string;
  eachAmount: number;
}
const FullInventoryDash = ({perDistributor, id, inventory, sales}:{perDistributor:DisList, id:string|string[], inventory:number, sales:number}) => {
  const router = useRouter();
  const paramsObj = useParams();
  const navKeys = Object.keys(paramsObj).length;
    // console.log(paramsObj);
  const { distributorid, subdistributor } = paramsObj;

  const [filterProd, setFilterProd] = useState('ALL');
  // console.log(filterProd)

  const extractionBox = useMemo(() => {
    const products = inventoryManagement.map((box) => box.Product);
    const singlizeProducts = [...new Set(products)];
    const eachAndQuantity = inventoryManagement.map(box => { return { name: box.Product, eachAmount: box.quantityS } });
    
    const merged: MerginProps[] = [];
    (function () {
      const merging = eachAndQuantity.map((box) => {
        if (merged.some((obj: MerginProps) => obj.name === box.name)) {
          // console.log(box.name)
          const key = merged.findIndex((key => JSON.stringify(key.name) === JSON.stringify(box.name)));
          if (key !== -1) {
            // console.log(key);
            const summation = merged[key]?.eachAmount + box.eachAmount;
            merged.splice(key, 1, ({ name: box.name, eachAmount: summation }));
            // merged.push({ name: box.name, eachAmount: summation });
          }
        } else {
          merged.push(box);
          // console.log(JSON.stringify(box))
        }
        // return box;
      });
      console.log(merging);
    })()
    console.log(merged)
    return {
      length: singlizeProducts.length,
      segregate: [...merged]
    }
  }, []);



// DISTRIBUTION LINK CHAIN
  function pathNavLink(who: DisList) {
    const baseLink = '/super-agent/distribution';
        if (navKeys === 3) {
            //  alert('fix this link chain')
            return router.push(`${baseLink}/${distributorid}/${subdistributor}/${id}/${who.name}`);
        } else if (navKeys === 4) {
          return alert("fix this link chain");
        }
        
        return router.push(`${baseLink}/${id}/${who.name}`);
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
              <p className='font-bold text-xl'>{perDistributor?.name}</p>
              <div className='flex items-center space-x-3'>
                <p className='bg-[#ECFDF3] text-[#027A48] flex items-center w-fit px-2 rounded-full space-x-1'>
                  <span>&#8226; </span>
                  <span className='text-xs'>{perDistributor?.category}</span>
                </p>
                <div className='flex items-center space-x-2'>
                  <IoLocationOutline className='text-red-800' />{" "}
                  <span className='text-xs font-medium'>
                    {perDistributor?.location}
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
        <div className='flex items-center w-full space-x-5 px-1'>
          <div
            className='cursor-pointer w-[30%] hover:shadow-lg'
            onClick={() => setFilterProd("ALL")}
          >
            <DashCard width={100} title='Total Inventory' matrix={inventory} />
          </div>
          <DashCard width={30} title='Total Sales' matrix={sales} />
          <IndividualProductChart
            productMeasures={extractionBox}
            setThisProduct={setFilterProd}
          />
        </div>

        {/* INVENTORY MANAGEMENT TABLE */}
        <InventoryTable
          inventoryList={inventoryManagement}
          thisProduct={filterProd}
        />
      </div>
    </>
  );
}

export default FullInventoryDash