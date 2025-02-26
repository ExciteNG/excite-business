"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { distributorList } from '@/lib/dummyData';

const Page = () => {
    const { distributor } = useParams();
    const thisDistributor = distributorList.filter((distri) => distri.id === distributor)[0];

  return (
      <section>
          
    </section>
  )
}

export default Page;