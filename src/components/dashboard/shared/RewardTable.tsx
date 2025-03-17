"use client"
import React from 'react'
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { RewardProps } from '@/types/dashboard';
import { IoIosArrowRoundDown } from "react-icons/io";

const RewardTable = ({title, recipients}:{title:string, recipients:RewardProps}) => {
  return (
    <div className='w-full p-3 shadow rounded-lg'>
      <div className='flex items-center justify-between p-3 border-b'>
        <span className='text-base font-semibold capitalize'>
          {title}{" "}
          <span
            className={`${
              (title === "incentive" || title === "intervention") && "hidden"
            }`}
          >
            reward
          </span>
        </span>
        <div className='flex items-center space-x-3'>
          <Button
            variant={"outline"}
            className='border border-[#00AA4F] text-[#00AA4F] hover:bg-white hover:text-[#00AA4F] hover:font-semibold hover:scale-105'
          >
            Edit
          </Button>
          <Button className='bg-[#027A48] hover:bg-[#00AA4F] hover:scale-105'>
            {title === "incentive" ? (
              <span>Give Incentive</span>
            ) : title === "intervention" ? (
              <span>Intervene</span>
            ) : (
              <span>Give Reward</span>
            )}
          </Button>
        </div>
      </div>
      <div className='w-full max-h-[45vh] overflow-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='flex items-center justify-center space-x-1'>
                <span>Distributors</span>
                <IoIosArrowRoundDown />
              </TableHead>
              <TableHead className='text-center'>Location</TableHead>
              <TableHead className='text-center'>Category</TableHead>
              <TableHead className='text-center'>Performance Measure</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recipients[title as keyof RewardProps]?.map((list, key) => {
              return (
                <TableRow key={key}>
                  <TableCell className='text-center'>{list.name}</TableCell>
                  <TableCell className='text-center'>{list.location}</TableCell>
                  <TableCell
                    className={"text-[#027A48] bg-[#ECFDF3] text-center"}
                  >
                    &#10687; {list.rank}
                  </TableCell>
                  <TableCell className={`text-center font-bold`}>
                    <span
                      className={`${
                        Number(list.performance) >= 90
                          ? "text-green-800"
                          : Number(list.performance) < 90 &&
                            Number(list.performance) >= 80
                          ? "text-green-600"
                          : Number(list.performance) < 80 &&
                            Number(list.performance) >= 70
                          ? "text-green-400"
                          : Number(list.performance) < 70 &&
                            Number(list.performance) >= 50
                          ? "text-yellow-600"
                          : "text-red-700"
                      }`}
                    >
                      {list.performance}%
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default RewardTable