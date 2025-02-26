"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import exciteBusinessLogo from "@/../public/assets/img/image 29.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useCustomSideBar } from '@/hooks/useCustomSideBar';

const SideBar = () => {
  const pathName = usePathname();
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
                    {tab.tab === "Agents" ? (
                      <Accordion type='single' collapsible>
                        <AccordionItem value='1'>
                          <AccordionTrigger
                            className={`group w-full bg-slate-100 p-2 px-3 shadow rounded  cursor-pointer hover:no-underline`}
                          >
                            <p
                              className={`${
                                pathName === tab.tabLink &&
                                "text-[#A7CC48] font-semibold"
                              } w-fit flex items-center space-x-2 group-hover:text-[#A7CC48] group-hover:font-semibold`}
                            >
                              <tab.icon />
                              <span className=''>{tab.tab}</span>
                            </p>
                          </AccordionTrigger>
                          <AccordionContent className='bg-slate-100 rounded-b'>
                            <ul className='space-y-1 p-2'>
                              <li className='border-b border-slate-300 p-1'>
                                Main Distributor
                              </li>
                              <li className='border-b border-slate-300 p-1'>
                                Sub Distributor
                              </li>
                              <li className='border-b border-slate-300 p-1'>
                                Retailer
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link href={tab.tabLink}>
                        <div
                          className={`${
                            pathName === tab.tabLink &&
                            "text-[#A7CC48] font-semibold"
                          } group w-full bg-slate-100 p-2 px-3 shadow rounded flex items-center space-x-2 cursor-pointer`}
                        >
                          <tab.icon className='group-hover:text-[#A7CC48] group-hover:font-semibold' />
                          <p className='w-fit group-hover:text-[#A7CC48] group-hover:font-semibold'>
                            {tab.tab}
                          </p>
                        </div>
                      </Link>
                    )}
                  </div>
                );
              })}
              
          </section>
    </div>
  );
}

export default SideBar