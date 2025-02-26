"use client"
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { statesAndLgas } from "@/constants/statesAndLgas";
import { Copy } from "lucide-react";
import YearlySalesChart from "../shared/YearlySalesChart";
import TotalSalesChart from "../shared/TotalSalesChart";
import { chartData } from "@/constants/dummy";
import DistributorTable from "../shared/DistributorTable";

export default function SuperAgentOverview() {
  const [location, setLocation] = useState<string>("Lagos");
  
  return (
    <section className='w-full'>
      <div className='w-full flex justify-between gap-4 items-center'>
        <div className='flex gap-2'>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Theme' />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(statesAndLgas).map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button className='bg-[#A7CC48] py-2 px-6 rounded-md font-medium'>
            Search
          </button>
        </div>
        <div>
          <p className='text-sm font-medium flex items-center gap-2'>
            Referral Code: <span className='font-semibold'>SBC/NIG/SA/201</span>{" "}
            <Copy className='w-4 h-4' />{" "}
          </p>
        </div>
      </div>

      {/* chart section */}
      <div className='w-full flex gap-4'>
        <div className='w-2/3 border my-4 rounded-md p-4'>
          <h2 className='font-semibold'>Distributors Sales</h2>
          <p className='text-xs '>
            Keep track of Distributors sale every month
          </p>
          <div className='w-full'>
            <YearlySalesChart chartData={chartData} />
          </div>
        </div>
        <div className='w-1/3 border my-4 rounded-md p-4'>
          <h2 className='font-semibold'>Distributors monitored</h2>
          <p className='text-xs '>You’re using 80% of available spots.</p>
          <div className='w-full'>
            <TotalSalesChart agents={260} totalAgents={1000} />
          </div>
        </div>
      </div>

      {/* Distributor table */}
      <DistributorTable userType={""} distributors='' />
    </section>
  );
}
