"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  distributorList,
  subDistributorList,
  retailerList,
} from "@/lib/dummyData";
import { RiHome6Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const {
    distributorid,
    subdistributor,
    subdistributorid,
    retailer,
    retailerid,
  } = useParams();
  const params = useParams();
  const router = useRouter();
  console.log(params);
  //filter distributor ID
  const { name } =
    distributorid !== undefined
      ? distributorList.filter((distri) => distri.id === distributorid)[0]
      : { name: "name" };
  // filter subdistributor ID
  const { name: subName } =
    subdistributorid !== undefined
      ? subDistributorList.filter((distri) => distri.id === subdistributorid)[0]
      : { name: "name" };
  // filter retailer ID
  const { name: subSubName } =
    retailerid !== undefined
      ? retailerList.filter((distri) => distri.id === retailerid)[0]
      : { name: "name" };

  return (
    <nav className="sticky top-0 h-20 bg-white z-40 border border-slate-50 shadow w-full flex items-center justify-between px-5">
      {distributorid === undefined ? (
        <div className="">
          <h1 className="text-lg font-bold">Welcome! {""}</h1>
          <p>Track, Manage your distributors</p>
        </div>
      ) : (
        <div className="flex items-center space-x-1">
          <RiHome6Line
            className="text-slate-500 cursor-pointer"
            title={`${subdistributor === undefined ? "Home" : "Go Back"}`}
            size={20}
            onClick={() => router.back()}
          />
          <div className="flex items-center space-x-1 text-sm text-slate-600">
            <MdKeyboardArrowRight />{" "}
            <span className="">
              Profile of <span className="font-medium">{name}</span>
            </span>
          </div>
          {subdistributor !== undefined && (
            <div className="flex items-center space-x-1 text-sm text-slate-600">
              <MdKeyboardArrowRight />
              {subdistributorid === undefined ? (
                <span className="">
                  Distributors working with{" "}
                  <span className="font-medium">{name}</span>
                </span>
              ) : (
                <span className="">
                  Distributors wor...{" "}
                  {/* <span className='font-medium'>{name}</span> */}
                </span>
              )}
            </div>
          )}
          {subdistributorid !== undefined && (
            <div className="flex items-center space-x-1 text-sm text-slate-600">
              <MdKeyboardArrowRight />{" "}
              <span className="">
                Profile of <span className="font-medium">{subName}</span>
              </span>
            </div>
          )}
          {retailer !== undefined && (
            <div className="flex items-center space-x-1 text-sm text-slate-600">
              <MdKeyboardArrowRight />{" "}
              {retailerid === undefined ? (
                <span className="">
                  Retailers under <span className="font-medium">{subName}</span>
                </span>
              ) : (
                <span className="">
                  Retailers under...{" "}
                  {/* <span className='font-medium'>{name}</span> */}
                </span>
              )}
            </div>
          )}
          {retailerid !== undefined && (
            <div className="flex items-center space-x-1 text-sm text-slate-600">
              <MdKeyboardArrowRight />{" "}
              <span className="">
                Profile of <span className="font-medium">{subSubName}</span>
              </span>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center space-x-2">
        <IoIosNotificationsOutline size={25} />
        <div className="p-5 w-fit rounded-full bg-slate-200 shadow border border-slate-300"></div>
        <p>SBC</p>
      </div>
    </nav>
  );
};

export default Header;
