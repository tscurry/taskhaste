import * as React from "react";
import { RiVisaLine } from "react-icons/ri";
import { FaCcAmex } from "react-icons/fa";
import { BiLogoMastercard } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";

const PaymentSettings = () => {
  return (
    <div className="h-full">
      <h2 className="font-bold text-lg my-[60px]">Payment</h2>
      <h2 className="mb-[50px]">Payment Methods</h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="p-8 col-span-1 rounded-lg bg-background shadow flex items-center xs:justify-between">
          <RiVisaLine size={55} />
          <div className="ml-5 xs:ml-10 xl:ml-0">
            <p className="mb-1 text-xs lg:text-sm">**** **** 9024</p>
            <div className="text-xs flex gap-7">
              <button className="hover:underline">Edit</button>
              <button className="text-[#ff0000] hover:underline">Delete</button>
            </div>
          </div>
          <p className="text-xs ml-5 xs:ml-10">Exp: 06/29</p>
        </div>
        <div className="p-8 col-span-1 rounded-lg bg-background shadow flex items-center xs:justify-between">
          <BiLogoMastercard size={55} />
          <div className="ml-5 xs:ml-10 xl:ml-0">
            <p className="mb-1 text-xs lg:text-sm">**** **** 9024</p>
            <div className="text-xs flex gap-7">
              <button className="hover:underline">Edit</button>
              <button className="text-[#ff0000] hover:underline">Delete</button>
            </div>
          </div>
          <p className="text-xs ml-5 xs:ml-10">Exp: 06/29</p>
        </div>
        <div className="p-8 col-span-1 rounded-lg bg-background shadow flex items-center xs:justify-between">
          <FaCcAmex size={55} />
          <div className="ml-5 xs:ml-10 xl:ml-0">
            <p className="mb-1 text-xs lg:text-sm">**** **** 9024</p>
            <div className="text-xs flex gap-7">
              <button className="hover:underline">Edit</button>
              <button className="text-[#ff0000] hover:underline">Delete</button>
            </div>
          </div>
          <p className="text-xs ml-5 xs:ml-10">Exp: 06/29</p>
        </div>
        <div className="p-8 col-span-1 rounded-lg bg-background shadow flex items-center xs:justify-between">
          <FaCcAmex size={55} />
          <div className="ml-5 xs:ml-10 xl:ml-0">
            <p className="mb-1 text-xs lg:text-sm">**** **** 9024</p>
            <div className="text-xs flex gap-7">
              <button className="hover:underline">Edit</button>
              <button className="text-[#ff0000] hover:underline">Delete</button>
            </div>
          </div>
          <p className="text-xs ml-5 xs:ml-10">Exp: 06/29</p>
        </div>
        <div className="p-8 col-span-1 rounded-lg bg-background shadow flex items-center xs:justify-between">
          <BiLogoMastercard size={55} />
          <div className="ml-5 xs:ml-10 xl:ml-0">
            <p className="mb-1 text-xs lg:text-sm">**** **** 9024</p>
            <div className="text-xs flex gap-7">
              <button className="hover:underline">Edit</button>
              <button className="text-[#ff0000] hover:underline">Delete</button>
            </div>
          </div>
          <p className="text-xs ml-5 xs:ml-10">Exp: 06/29</p>
        </div>
      </div>
      <div className="pb-5 border-b-[2px]">
        <button className="mt-[75px] flex items-center hover:underline">
          <BsPlus size={35} className="mr-1" /> Add Payment Method
        </button>
      </div>
    </div>
  );
};

export default PaymentSettings;
