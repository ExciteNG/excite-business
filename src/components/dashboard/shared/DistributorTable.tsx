"use client"
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious, PaginationLink, PaginationEllipsis } from '@/components/ui/pagination';
import { DisList } from '@/types/dashboard';


const DistributorTable = ({ distRank, distributors, matrix }: { distRank: string | string[], distributors: DisList[], matrix: number }) => {
  const { distributorid, subdistributor,subdistributorid, retailer } = useParams();
  const router = useRouter();
  // console.log(distributors);

  // NAVIGATING DISTRIBUTORS TO THERE SUB DISTRIBUTORS;
  function pathNavFn(list: DisList) {
    const baseLink = "/super-agent/distribution";
    if (distributorid !== undefined && retailer === undefined) {

      return router.push(`${baseLink}/${distributorid}/${subdistributor}/${list.id}`);
    } else if (retailer !== undefined) {

      return router.push(`${baseLink}/${distributorid}/${subdistributor}/${subdistributorid}/${retailer}/${list.id}`);
    }
   return router.push(`${baseLink}/${list.id}`);
  };

  return (
    <section>
      <div className=' border border-slate-100 shadow p-2'>
        <div className='p-2 border-b flex items-center space-x-4'>
          <h3 className='font-semibold'>
            {distRank}&apos;s{" "}
            {retailer !== undefined ? "Retailers" : "Distributors"}
          </h3>
          <p className='text-[#7b9833] bg-[#f5fedc] text-sm w-10 text-center rounded-full shadow'>
            {matrix}
          </p>
        </div>
        <div className='h-[60vh] overflow-auto'>
          <Table>
            <TableHeader className=''>
              <TableRow className=''>
                <TableHead className='flex items-center justify-center space-x-1'>
                  <span>
                    {retailer !== undefined ? "Retailers" : "Distributors"}
                  </span>
                  <IoIosArrowRoundDown />
                </TableHead>
                <TableHead className='text-center'>Last Assessed</TableHead>
                <TableHead className='text-center'>State</TableHead>
                <TableHead className='text-center'>Category</TableHead>
                <TableHead className='text-center'>{}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {distributors.map((list, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell
                      className='text-center cursor-pointer'
                      onClick={() => pathNavFn(list)}
                      title={`View ${list.name}'s Profile`}
                    >
                      {list.name}
                    </TableCell>
                    <TableCell className='text-center'>
                      {list.lastModified}
                    </TableCell>
                    <TableCell className='text-center'>
                      {list.location}
                    </TableCell>
                    <TableCell
                      className={`${
                        list.category === "Main distributor"
                          ? "text-[#027A48] bg-[#ECFDF3] text-center"
                          : list.category === "Subdistributor"
                          ? " text-[#026AA2] bg-[#F0F9FF] text-center"
                          : "text-[#363F72] bg-[#F8F9FC] text-center"
                      }`}
                    >
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