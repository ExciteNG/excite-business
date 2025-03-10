"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IoIosAdd } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const BookCard = ({ title, cost }: { title: string, cost: number }) => {
  return (
    <div className='w-[30%] place-content-center h-32 border border-slate-100 shadow rounded-lg'>
      <div className='w-fit mx-auto text-center'>
        <h3 className='font-semibold'>{title}</h3>
        <p className='font-medium'>&#8358;{cost}</p>
      </div>
    </div>
  );
};

const Bookeeping = () => {
  const [createTransaction, setCreateTransaction] = useState<boolean>(false);
  console.log(createTransaction, setCreateTransaction)

  return (
    <div className='w-full'>
      <div className='space-y-5'>
        <div>
          {/* CREATE TRANSACTION MODAL */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className='shadow bg-[#A7CC48] hover:bg-[#A7CC48] hover:scale-105 hover:font-semibold text-black flex items-center w-fit'
                // onClick={() => {}}
              >
                <IoIosAdd />
                Create Transaction
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Fill Transaction Details</DialogTitle>
              </DialogHeader>
              <form action=''>
                <div className='flex items-start justify-between'>
                  <fieldset className='space-y-4'>
                    <div className='space-y-1'>
                      <Label htmlFor=''>Description</Label>
                      <Input type='text' placeholder='Fill...' />
                    </div>
                    <div className='space-y-1'>
                      <Label htmlFor=''>Transaction Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder='Select Type' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='Debit'>Debit</SelectItem>
                          <SelectItem value='Credit'>Credit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='space-y-1'>
                      <Label htmlFor=''>Quantity</Label>
                      <Input type='number' placeholder='0' />
                    </div>
                  </fieldset>
                  <fieldset className='space-y-4'>
                    <div className='space-y-1'>
                      <Label htmlFor=''>Account Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder='Sales' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='Sales'>Sales</SelectItem>
                          <SelectItem value='Purchase'>Purchase</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='space-y-1'>
                      <Label htmlFor=''>Select Product</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder='Select Product' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='Pepsi'>Pepsi</SelectItem>
                          <SelectItem value='Mirinda'>Mirinda</SelectItem>{" "}
                          <SelectItem value='Teem'>Teem</SelectItem>
                          <SelectItem value='Aquafina'>Aquafina</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='space-y-1'>
                      <Label htmlFor=''>Amount</Label>
                      <Input type='number' placeholder='0' />
                    </div>
                  </fieldset>
                </div>
                <div className='mt-4'>
                  <Button className='shadow bg-[#A7CC48] hover:bg-[#A7CC48] hover:scale-105 hover:font-semibold text-black w-full'>
                    Create
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className='flex justify-between items-center'>
          <BookCard title='Gross Profit' cost={0} />
          <BookCard title='Cost of Sales' cost={0} />
          <BookCard title='Net Profit' cost={0} />
        </div>
      </div>
    </div>
  );
}

export default Bookeeping;