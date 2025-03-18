"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoIosAdd } from "react-icons/io";
import emptyInventory from "../../../../public/assets/img/emptyInventory.png";
import InventoryTable from './InventoryTable';
import { DashCard } from './Card';
import { miniInventoryList, product } from '@/lib/dummyData';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { IoReturnUpBackSharp } from "react-icons/io5";




const InventoryManage = () => {
    const [inventoryState, setInventoryState] = useState({
        add: false,
        availableInventory: [],
    });

    function addProduct() {
        setInventoryState((prev) => {
            return{...prev, add: !inventoryState.add}
        })
    };

    function addInventory() {
        
    }

  return (
    <div className='w-full h-[80vh]'>
      {inventoryState.add ? (
        <div className='w-full h-full'>
                  <div className='p-2 cursor-pointer border border-slate-300 rounded-full shadow w-fit'
                      onClick={addProduct}
                  >
            <IoReturnUpBackSharp size={20}/>
          </div>

          <form className='w-80 mt-8 space-y-4'>
            <fieldset>
              <Label htmlFor=''>Product</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select Product' />
                </SelectTrigger>
                <SelectContent>
                  {product.map((item, index) => {
                    return (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </fieldset>
            <fieldset>
              <Label htmlFor=''>Product Quantity</Label>
              <Input type='text' placeholder='Input quantity' />
            </fieldset>
            <fieldset>
              <Label htmlFor=''>Product Price</Label>
              <Input type='text' placeholder='Product Price' />
            </fieldset>
            <fieldset className='pt-5 w-full'>
              <Button
                className='shadow bg-[#A7CC48] hover:bg-[#A7CC48] hover:scale-105 hover:font-semibold text-black flex items-center w-full'
                onClick={addInventory}
              >
                <IoIosAdd />
                <span>Add to Inventory</span>
              </Button>
            </fieldset>
          </form>
        </div>
      ) : inventoryState.availableInventory.length < 1 ? (
        <div className='h-full w-full'>
          <div className='flex justify-end'>
            <Button
              className='shadow bg-[#A7CC48] hover:bg-[#A7CC48] hover:scale-105 hover:font-semibold text-black flex items-center'
              onClick={addProduct}
            >
              <IoIosAdd />
              <span>Add Product</span>
            </Button>
          </div>
          <div className='w-full flex justify-center items-center h-full'>
            <div className='w-fit text-center space-y-1.5'>
              <Image src={emptyInventory} alt='empty' className='w-[200px]' />
              <p className='text-slate-600'>No Inventory added yet!</p>
              <p className='cursor-pointer text-slate-700' onClick={addProduct}>
                +
                <span className='text-xs font-semibold underline'>
                  Add Product
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full h-full space-y-10'>
          <div className='w-full flex items-center justify-between'>
            <DashCard matrix={32} title='Total Inventory' width={25} />
            <Button
              className='shadow bg-[#A7CC48] hover:bg-[#A7CC48] hover:scale-105 hover:font-semibold text-black flex items-center'
              onClick={addProduct}
            >
              <IoIosAdd />
              <span>Add Product</span>
            </Button>
          </div>

          {/* inventory table */}
          <InventoryTable inventoryList={miniInventoryList} thisProduct='ALL' />
        </div>
      )}
    </div>
  );
}

export default InventoryManage