"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { distributorList} from '@/lib/dummyData';
import FullInventoryDash from '@/components/dashboard/shared/FullInventoryDash';




const Page = () => {
    const { distributorid } = useParams();
    const thisDistributor = distributorList.filter((distri) => distri.id === distributorid)[0];

  return (
    <section className='p-5'>
      <FullInventoryDash
        perDistributor={thisDistributor}
        id={distributorid}
        inventory={280}
        sales={143}
      />
    </section>
  );
}

export default Page;