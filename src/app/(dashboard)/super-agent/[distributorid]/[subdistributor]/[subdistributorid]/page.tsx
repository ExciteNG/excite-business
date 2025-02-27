"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { subDistributorList } from '@/lib/dummyData';
import FullInventoryDash from '@/components/dashboard/shared/FullInventoryDash';

const Page = () => {
    const { subdistributorid } = useParams();
    const thisSubDistributor = subDistributorList.filter((distri) => distri.id === subdistributorid)[0];
  return (
    <section className='p-5'>
      <FullInventoryDash
        perDistributor={thisSubDistributor}
        id={subdistributorid}
        inventory={80}
        sales={23}
      />
    </section>
  )
}

export default Page;