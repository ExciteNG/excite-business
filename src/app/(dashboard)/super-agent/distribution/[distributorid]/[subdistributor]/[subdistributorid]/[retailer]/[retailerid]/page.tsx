"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { retailerList } from '@/lib/dummyData';
import FullInventoryDash from '@/components/dashboard/shared/FullInventoryDash';

const Page = () => {
    const { retailerid } = useParams();
    const thisRetailer = retailerList.filter(
      (distri) => distri.id === retailerid
    )[0];
  return (
      <section className='p-5'>
          <FullInventoryDash
              perDistributor={thisRetailer}
              id={retailerid}
              inventory={18}
              sales={9}
          />
      </section>
  )
}

export default Page;