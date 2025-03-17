"use client"
import React, {useState, useMemo} from 'react';
import { useParams } from 'next/navigation';
import { distributorList} from '@/lib/dummyData';
import FullInventoryDash from '@/components/dashboard/shared/FullInventoryDash';
import { inventoryManagement } from '@/lib/dummyData';




const Page = () => {
    const { distributorid } = useParams();
  const thisDistributor = distributorList.filter((distri) => distri.id === distributorid)[0];
  const [totalInventory, setTotalInventory] = useState({
    inventory: 0,
    sales: 0
  });

   useMemo(() => {
    const inventoryTotal = inventoryManagement.reduce((a, b) => a + b.QuantityS, 0);
    const inventorySales = inventoryManagement.reduce((a, b) => a + b.quantityS, 0);
    
    return setTotalInventory({
      inventory: inventoryTotal,
      sales: inventorySales,
    })
  },[])

  return (
    <section className='p-5'>
      <FullInventoryDash
        perDistributor={thisDistributor}
        id={distributorid}
        inventory={totalInventory.inventory}
        sales={totalInventory.sales}
      />
    </section>
  );
}

export default Page;