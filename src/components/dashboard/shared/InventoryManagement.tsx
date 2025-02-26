import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoIosArrowRoundDown } from "react-icons/io";
import { inventoryManagement } from '@/lib/dummyData';
import { IoMdArrowDropup } from "react-icons/io";

const InventoryManagement = () => {
    return (
      <div className=' border border-slate-100 shadow p-2'>
        <div className='p-2 border-b'>
          <h3 className='font-semibold'>Inventory Management</h3>
        </div>
        <div className='h-[60vh] overflow-auto'>
          <Table>
            <TableHeader className=''>
              <TableRow className=''>
                <TableHead className='text-center'>Batch ID</TableHead>
                <TableHead className='flex items-center justify-center space-x-1'>
                  <span>Product</span>
                  <IoIosArrowRoundDown />
                </TableHead>
                <TableHead className='text-center'>Entry Date</TableHead>
                <TableHead className='text-center'>Price</TableHead>
                <TableHead className='text-center'>Quantity</TableHead>
                <TableHead className='text-center'>Sales Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryManagement.map((list, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell className='text-center cursor-pointer'>
                      {list.batch}
                    </TableCell>
                    <TableCell className='text-center font-semibold'>
                      {list.product}
                    </TableCell>
                    <TableCell className='text-center'>
                      {list.enterDate}
                    </TableCell>
                    <TableCell className='text-center'>
                      &#8358; {list.unitPrice}
                    </TableCell>
                    <TableCell className='text-center'>
                      {list.quantity}
                    </TableCell>
                    <TableCell className=''>
                      <p className='mx-auto text-[#027A48] bg-[#ECFDF3] w-10 rounded-lg flex items-center justify-center'>
                        <IoMdArrowDropup />
                        <span className='text-xs'>{list.performance}</span>
                      </p>
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

export default InventoryManagement