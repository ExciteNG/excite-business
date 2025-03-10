"use client"
import React from 'react';
import Image from 'next/image';
import cautionOrange from "@/../public/assets/img/cautionSignOrange.png";
import { Table, TableHeader, TableHead, TableRow, TableCell, TableBody, TableCaption } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { recallDemo } from '@/lib/dummyData';
import { RiRefreshLine } from "react-icons/ri";


const RecallProduct = () => {
  return (
    <div className='space-y-5'>
      <header className='flex items-center justify-between'>
        <span className='text-slate-600'>
          Ensuring Quality and Safety in Distribution.
        </span>
        <Button
          variant={"outline"}
          className='shadow flex items-center space-x-0'
        >
          <RiRefreshLine />
          <span>Refresh</span>
        </Button>
      </header>
      <div className='flex items-center space-x-3 p-3 border border-[#F9AF03] rounded-lg bg-[#FFFCF4]'>
        <Image src={cautionOrange} alt='caution sign' className='h-9 w-9' />
        <div>
          <h3 className='text-[#F9AF03] font-semibold'>Recall Products</h3>
          <p className='text-xs text-[#F9AF03] font-medium'>
            The recall allows you to track and manage products that need to be
            removed from distribution due to quality concerns, regulatory
            compliance or expired stock. Once a recall is initiated, all
            distributors carrying the affected product will be automatically
            notified to take appropriate action.
          </p>
        </div>
      </div>
      <div className='w-full border border-slate-100 shadow rounded-lg'>
        <div className='p-5'>
          <Input
            type='search'
            placeholder='Search with Batch ID...'
            className='w-[25%]'
          />
        </div>
        <div className='pb-5 w-full max-h-[60vh] overflow-auto'>
          <Table>
            <TableCaption>Product List</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='text-center'>Product</TableHead>
                <TableHead className='text-center'>Batch ID</TableHead>
                <TableHead className='text-center'>Quantity</TableHead>
                <TableHead className='text-center'>Unit Price</TableHead>
                <TableHead className='text-center'>Entry Date</TableHead>
                <TableHead className='text-center'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recallDemo.map((list, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell className='text-center'>
                      {list.product}
                    </TableCell>
                    <TableCell className='text-center'>{list.batch}</TableCell>
                    <TableCell className='text-center'>
                      {list.quantity}
                    </TableCell>
                    <TableCell className='text-center'>{list.price}</TableCell>
                    <TableCell className='text-center'>{list.entry}</TableCell>
                    <TableCell className='text-center'>
                      <Button className='bg-[#00AA4F] hover:bg-[#00AA4F]/70 hover:scale-105'>
                        Recall
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default RecallProduct;