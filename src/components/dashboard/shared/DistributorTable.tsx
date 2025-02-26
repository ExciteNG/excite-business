import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { distributorList } from '@/lib/dummyData';
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { Pagination,PaginationContent, PaginationItem, PaginationNext, PaginationPrevious, PaginationLink, PaginationEllipsis } from '@/components/ui/pagination';


const DistributorTable = ({userType, distributors}:{userType:string, distributors:string}) => {
  return (
    <section>
      <div className=' border border-slate-100 shadow p-2'>
        <div className='p-2 border-b flex items-center space-x-4'>
          <h3 className='font-semibold'>{'All'} Distributors</h3>
          <p className='text-[#7b9833] bg-[#f5fedc] text-sm w-10 text-center rounded-full shadow'>
            {"675"}
          </p>
        </div>
        <div className='h-[60vh] overflow-auto'>
          <Table>
            <TableHeader className=''>
              <TableRow className=''>
                <TableHead className='flex items-center justify-center space-x-1'>
                  <span>Distributors</span>
                  <IoIosArrowRoundDown />
                </TableHead>
                <TableHead className='text-center'>Last Assessed</TableHead>
                <TableHead className='text-center'>State</TableHead>
                <TableHead className='text-center'>Category</TableHead>
                <TableHead className='text-center'>{ }</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {distributorList.map((list, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell className='text-center cursor-pointer'>
                      {list.name}
                    </TableCell>
                    <TableCell className='text-center'>{list.lastModified}</TableCell>
                    <TableCell className='text-center'>{list.location}</TableCell>
                    <TableCell className='text-[#027A48] bg-[#ECFDF3] text-center'>
                      &#10687; {list.category}
                    </TableCell>
                    <TableCell className='text-center'>
                      <p className='text-[#027A48] bg-[#ECFDF3] text-center w-10 rounded-lg flex items-center'>
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

      {/* PAGINATION */}
      <div className='p-2'>
        <Pagination className='justify-between'>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>10</PaginationLink>
            </PaginationItem>
          </PaginationContent>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className='border' />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext className='border' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}

export default DistributorTable