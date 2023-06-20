import * as React from "react";
import { AuthenticatedHeader } from "./Header";
import { MdDashboard } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

import user from '../assets/sample.jpg';

const SidePanel = () => {
  return (
    <>
      <AuthenticatedHeader />
      <nav className="fixed h-screen lg:w-[225px] w-[75px] lg:pt-[50px] pt-[125px]">
        <div className="hidden lg:flex lg:mb-[75px] items-center flex-col">
          <img className='mb-[10px] mt-10 h-24 w-24 rounded-full' src={user} alt="user " />
          <p className="mb-[10px]">Joshua Williams</p>
          <button className="w-[90px] text-sm h-[25px] rounded bg-primary text-white">Edit</button>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center max-lg:justify-center w-full lg:w-[175px] border cursor-pointer hover:bg-white rounded-md h-[60px] lg:h-[45px] mb-[10px]">
            <MdDashboard className="h-[40px] w-[40px] lg:h-[25px] lg:ml-5" />
            <span className="lg:pl-20px hidden lg:block">Dashboard</span>
          </div>
          <div className="flex items-center max-lg:justify-center w-full lg:w-[175px] border cursor-pointer hover:bg-white rounded-md h-[60px] lg:h-[45px] mb-[10px]">
            <BsCheck2Square className="h-[40px] w-[40px] lg:h-[25px] lg:ml-5" />
            <span className="lg:pl-20px hidden lg:block">Tasks</span>
          </div>
          <div className="flex items-center max-lg:justify-center w-full lg:w-[175px] border  cursor-pointer hover:bg-white rounded-md h-[60px] lg:h-[45px] mb-[10px]">
            <AiFillStar className=" h-[40px] w-[40px] lg:h-[25px] lg:ml-5" />
            <span className="lg:pl-20px hidden lg:block">Reviews</span>
          </div>
          <div className="flex items-center max-lg:justify-center w-full lg:w-[175px] border  cursor-pointer hover:bg-white rounded-md h-[60px] lg:h-[45px] mb-[20px]">
            <IoIosSettings className=" h-[40px] w-[40px] lg:h-[25px] lg:ml-5" />
            <span className="lg:pl-20px hidden lg:block">Settings</span>
          </div>
          <div className="flex items-center max-lg:justify-center w-full lg:w-[175px] border  cursor-pointer hover:bg-white rounded-md h-[60px] lg:h-[45px] mt-[75px]">
            <FiLogOut className="h-[40px] w-[40px] lg:h-[25px] lg:ml-5" />
            <span className="lg:pl-20px hidden lg:block">Logout</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SidePanel;