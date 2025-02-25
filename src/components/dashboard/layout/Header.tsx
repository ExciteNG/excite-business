import React from 'react';
// import Image from 'next/image';
import { IoIosNotificationsOutline } from "react-icons/io";



const Header = () => {
  return (
    <nav className='h-20 border border-slate-50 shadow w-full flex items-center justify-between px-5'>
      <div className=''>
        <h1 className='text-lg font-bold'>Welcome! {""}</h1>
        <p>Track, Manage your distributors</p>
      </div>
      <div className='flex items-center space-x-2'>
        <IoIosNotificationsOutline size={25}/>
        <div className='p-5 w-fit rounded-full bg-slate-300'></div>
        <p>SBC</p>
      </div>
    </nav>
  );
}

export default Header;