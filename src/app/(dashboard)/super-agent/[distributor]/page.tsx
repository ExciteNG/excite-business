"use client"
import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
    const {distributor} = useParams();
  return (
    <div>page</div>
  )
}

export default Page;