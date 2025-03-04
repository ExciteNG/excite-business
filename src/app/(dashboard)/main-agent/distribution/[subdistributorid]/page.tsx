"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import FullInventoryDash from '@/components/dashboard/shared/FullInventoryDash';
import { subDistributorList } from '@/lib/dummyData';

const Page = () => {
  const { subdistributorid } = useParams();
  const thisSubdistributor = subDistributorList.filter((distri) => distri.id === subdistributorid)[0];
  
  return (
    <section className='p-5'>
      <FullInventoryDash perDistributor={thisSubdistributor} inventory={268} sales={120} id={subdistributorid}/>
    </section>
  )
}

export default Page