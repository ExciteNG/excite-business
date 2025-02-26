"use client"
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoIosNotificationsOutline } from "react-icons/io";
import { distributorList } from '@/lib/dummyData';
import { RiHome6Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";


const Header = () => {
  const { distributor } = useParams();
  const router = useRouter()

  return (
    <nav className='sticky top-0 h-20 bg-white z-40 border border-slate-50 shadow w-full flex items-center justify-between px-5'>
      {distributor === undefined ? (
        <div className=''>
          <h1 className='text-lg font-bold'>Welcome! {""}</h1>
          <p>Track, Manage your distributors</p>
        </div>
      ) : (
        <div className='flex items-center'>
          <RiHome6Line
            className='text-slate-500 cursor-pointer'
            title='Home'
            size={20}
            onClick={() => router.back()}
          />
          <div>
            <MdKeyboardArrowRight /> Profile of {'David Willson'}
          </div>
        </div>
      )}

      <div className='flex items-center space-x-2'>
        <IoIosNotificationsOutline size={25} />
        <div className='p-5 w-fit rounded-full bg-slate-300'></div>
        <p>SBC</p>
      </div>
    </nav>
  );
}

export default Header;