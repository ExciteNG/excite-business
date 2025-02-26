"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { subDistributorList } from '@/lib/dummyData';
import DistributorTable from '@/components/dashboard/shared/DistributorTable';
import { DashCard } from '@/components/dashboard/shared/Card';

const Page = () => {
    const { subdistributor } = useParams();
    const index = subdistributor.indexOf('%');
    const cleanFN = subdistributor.slice(0, index)
    console.log(cleanFN);
  return (
      <section className='p-5'>
          <div className='space-y-9'>
              <DashCard title='Total Distributors' matrix={75} width={25} />
              <DistributorTable distRank={cleanFN} distributors={subDistributorList} matrix={75} />
          </div>
    </section>
  )
}

export default Page;