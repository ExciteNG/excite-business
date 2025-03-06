import React, {useState, useMemo} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { IoIosArrowRoundDown } from "react-icons/io";
// import { IoMdArrowDropup } from "react-icons/io";
import { InventoryProps } from '@/types/dashboard';

const InventoryTable = ({ inventoryList }: { inventoryList: InventoryProps[] }) => {
  const [totals, setTotals] = useState({
    amountSupplied: 0,
    amountSold: 0,
    amountRemaining: 0,
  });

   useMemo(() => {
    const amountSupply = inventoryList.reduce((a, b) => a + (b.UnitP*b.QuantityS), 0);
    const amountSold = inventoryList.reduce((a, b) => a + (b.UnitP*b.quantityS), 0 );
    const amountRemain = inventoryList.reduce((a, b) => a + (b.UnitP *(b.QuantityS-b.quantityS)), 0);
    
    return setTotals({
      amountSupplied: amountSupply,
      amountSold: amountSold,
      amountRemaining:amountRemain,
    })
    // console.log(amountSupply)
  },[inventoryList])
  
    return (
      <div className=' border border-slate-100 shadow p-2'>
        <div className='p-2 border-b'>
          <h3 className='font-semibold'>Inventory Management</h3>
        </div>
        <div className='max-h-[60vh] overflow-auto relative'>
          <Table>
            <TableHeader className=''>
              <TableRow className=''>
                <TableHead className='flex items-center justify-center space-x-1'>
                  <span>Product</span>
                  <IoIosArrowRoundDown />
                </TableHead>
                <TableHead className='text-center'>Entry Date</TableHead>
                <TableHead className='text-center'>Batch ID</TableHead>
                <TableHead className='text-center font-extrabold text-green-800'>
                  Quantity Supplied
                </TableHead>
                <TableHead className='text-center'>Unit Price</TableHead>
                <TableHead className='text-center font-bold text-slate-800 bg-green-600/50'>
                  Supplied Receivable
                </TableHead>
                <TableHead className='text-center'>Quantity Sold</TableHead>
                <TableHead className='text-center font-bold text-slate-800 bg-green-400/50'>
                  Amount Sold
                </TableHead>
                <TableHead className='text-center'>
                  Quantity Remaining
                </TableHead>
                <TableHead className='text-center font-bold text-slate-800 bg-yellow-600/50'>
                  Amount Remaining
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryList.map((list, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell className='text-center cursor-pointer'>
                      {list.Product}
                    </TableCell>
                    <TableCell className='text-center font-semibold'>
                      {list.BatchID}
                    </TableCell>
                    <TableCell className='text-center'>{list.EntryD}</TableCell>

                    <TableCell className='text-center'>
                      {list.QuantityS}
                    </TableCell>
                    <TableCell className='font-semibold text-center'>
                      &#8358;{list.UnitP}
                    </TableCell>
                    <TableCell className='font-semibold text-center bg-green-600/50 '>
                      &#8358;{list.QuantityS * list.UnitP}
                    </TableCell>
                    <TableCell className='text-center'>
                      {list.quantityS}
                    </TableCell>
                    <TableCell className='font-semibold bg-green-400/50 text-center'>
                      &#8358;{list.quantityS * list.UnitP}
                    </TableCell>
                    <TableCell className='text-center'>
                      {list.QuantityS - list.quantityS}
                    </TableCell>
                    <TableCell className='font-semibold bg-yellow-600/50 text-center'>
                      &#8358;{(list.QuantityS - list.quantityS) * list.UnitP}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <footer className=''>
          <Table>
            {/* */}
            <TableFooter className='relative bottom-1'>
              <TableRow className=' bg-slate-200 '>
                <TableCell className='text-center w-[115px]'></TableCell>
                <TableCell className='text-center w-[89px]'></TableCell>
                <TableCell className='text-center w-[93px]'></TableCell>
                <TableCell className='text-center w-[124px]'></TableCell>
                <TableCell className='text-center w-[84px]'></TableCell>
                <TableCell className='text-center w-[124px] font-bold text-base text-slate-700'>
                  &#8358;{totals.amountSupplied}
                </TableCell>
                <TableCell className='text-center w-[106px]'></TableCell>
                <TableCell className='text-center w-[104px] font-bold text-base text-slate-700'>
                  &#8358;{totals.amountSold}
                </TableCell>
                <TableCell className='text-center w-[135px]'></TableCell>
                <TableCell className='text-center w-[135px] font-bold text-base text-slate-700'>
                  &#8358;{totals.amountRemaining}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </footer>
      </div>
    );
}

export default InventoryTable;