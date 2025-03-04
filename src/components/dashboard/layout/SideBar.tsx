"use client"
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import exciteBusinessLogo from "@/../public/assets/img/exciteBusinessLogo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useCustomSideBar } from '@/hooks/useCustomSideBar';

const SideBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const sideTabs = useCustomSideBar({ userType: 'MAINAGENT' });

  return (
    <div className='fixed left-0 top-0 h-screen w-[17rem] bg-[#101828]'>
      <div className='w-full p-8' onClick={()=> router.push('/')}>
        <Image src={exciteBusinessLogo} alt='exciteBusiness logo' className='w-28 mx-auto'/>
          </div>
          <section className='p-6 space-y-4'>
        {sideTabs?.map((tab, index) => {
          // let categoryKeys = ['1', '2', '3'];
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
                                (pathName === tab.category?.tabLink1 ||
                                  pathName === tab.category?.tabLink2 ||
                                  pathName === tab.category?.tabLink3) &&
                                "text-[#A7CC48] font-semibold"
                              } w-fit flex items-center space-x-2 group-hover:text-[#A7CC48] group-hover:font-semibold`}
                            >
                              <tab.icon />
                              <span className=''>{tab.tab}</span>
                            </p>
                          </AccordionTrigger>
                          <AccordionContent className='bg-slate-100 rounded-b'>
                            <ul className='space-y-1 p-2'>
                              <li
                                className={`${
                                  pathName === tab.category?.tabLink1 &&
                                  "text-[#A7CC48] font-medium"
                                } ${
                                  (pathName.startsWith("/main-agent") ||
                                    pathName.startsWith("/sub-agent") ||
                                    pathName.startsWith("/retailer")) && "hidden"
                                } border-b border-slate-300 p-1 cursor-pointer`}
                                onClick={() =>
                                  router.push(`${tab.category?.tabLink1}`)
                                }
                              >
                                Main Distributor
                              </li>
                              <li
                                className={`${
                                  pathName === tab.category?.tabLink2 &&
                                  "text-[#A7CC48] font-medium"
                                } ${
                                  (pathName.startsWith("/sub-agent") ||
                                    pathName.startsWith("/retailer")) &&
                                  "hidden"
                                } border-b border-slate-300 p-1 cursor-pointer`}
                                onClick={() =>
                                  router.push(`${tab.category?.tabLink2}`)
                                }
                              >
                                Sub Distributor
                              </li>
                              <li
                                className={`${
                                  pathName === tab.category?.tabLink3 &&
                                  "text-[#A7CC48] font-medium"
                                  } ${pathName.startsWith("/retailer") && 'hidden'} 
                                 border-b border-slate-300 p-1 cursor-pointer`}
                                onClick={() =>
                                  router.push(`${tab.category?.tabLink3}`)
                                }
                              >
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