import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import exciteBusinessLogo from "@/../public/assets/img/image 29.png";
import { useCustomSideBar } from '@/hooks/useCustomSideBar';

const SideBar = () => {
    const sideTabs = useCustomSideBar({ userType: 'SUPERAGENT' });

  return (
    <div className='fixed left-0 top-0 h-screen w-[17rem] bg-[#101828]'>
      <div className='w-full p-8'>
        <Image src={exciteBusinessLogo} alt='exciteBusiness logo' className='w-20 mx-auto'/>
          </div>
          <section className='p-6 space-y-4'>
              {sideTabs?.map((tab, index) => {
                return (
                  <div key={index} className='shadow'>
                    <Link href={tab.tabLink}>
                      <div
                        className={`group w-full bg-slate-100 p-2 px-3 shadow rounded flex items-center space-x-2 cursor-pointer`}
                      >
                        <tab.icon className='group-hover:text-[#A7CC48] group-hover:font-semibold' />
                        <p className='w-fit group-hover:text-[#A7CC48] group-hover:font-semibold'>
                          {tab.tab}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
              
          </section>
    </div>
  );
}

export default SideBar