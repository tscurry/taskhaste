import * as React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import ctaBackground from "../assets/cta-background.svg";
import sample from "../assets/sample.jpg";

export const Task = () => {
  const auth = React.useState(true);
  return (
    <div className={`${auth ? "bg-white" : "bg-background"}`}>
      <div className="category-buttons w-full flex justify-center py-3 gap-2 md:gap-5 bg-gray-300">
        <button className="hover:scale-[105%] transition-transform duration-500 bg-white rounded text-[9px] p-1 sm:w-[175px] md:text-sm">
          Shopping & Delivery
        </button>
        <button className="hover:scale-[105%] transition-transform duration-500 bg-white rounded text-[9px] p-1 md:text-sm md:w-[125px]">
          Landscaping
        </button>
        <button className="hover:scale-[105%] transition-transform duration-500 bg-white rounded text-[9px] md:text-sm p-1 md:w-[275px]">
          Indoor Chores & Personal Assistance
        </button>
        <button className="hover:scale-[105%] transition-transform duration-500 bg-white rounded text-[9px] md:text-sm p-1 md:w-[100px]">
          Tech Help
        </button>
        <button className="hover:scale-[105%] transition-transform duration-500 bg-white rounded text-[9px] md:text-sm p-1 md:w-[90px]">
          Pet Care
        </button>
      </div>
      <div className="relative cta mt-[50px] w-full">
        <img className="max-sm:h-[300px] mx-auto rounded-3xl object-cover w-full lg:w-[1000px] p-1" src={ctaBackground} alt="cta-background" />
        <p className="absolute top-[70px] lg:text-2xl sm:text-lg text-sm text-center font-bold text-white w-full p-1">
          Welcome to Taskhaste, the easiest way to find help for your everyday tasks.
        </p>
        <p className="absolute top-[120px] lg:text-lg sm:text-sm text-white text-xs text-center font-bold opacity-50 w-full p-1">
          Browse available tasks below, or use our search and filter options to find exactly what you need.
        </p>
        <button className="absolute p-2 rounded lg:top-[210px] font-bold sm:text-base top-[170px] left-[50%] translate-x-[-50%] text-center hover:no-underline hover:border text-white underline hover:scale-[105%] transition-transform duration-500 text-xs">
          Post A Task
        </button>
      </div>
      <div className="mt-[100px] flex mx-2 lg:mx-12">
        <button className={`${!auth ? "bg-white" : "bg-background"} p-1 rounded-xl text-sm w-[120px] font-bold mr-1 hidden`}>Categories</button>
        <button className={`${!auth ? "bg-white" : "bg-background"} p-1 rounded-xl text-sm w-[75px] font-bold mr-1`}>Date</button>
        <button className={`${!auth ? "bg-white" : "bg-background"} p-1 rounded-xl text-sm w-[85px] font-bold mr-1 lg:w-[100px]`}>
          Price <RiArrowDropDownLine size={25} className="inline" />
        </button>
        <button className={`${!auth ? "bg-white" : "bg-background"} p-1 rounded-xl text-sm w-[100px] font-bold`}>Location</button>
      </div>
      <div className="mt-[50px] mx-2 lg:mx-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {Array(20)
          .fill()
          .map((_, index) => (
            <div className="relative col-span-1">
              <img src={sample} alt="avatar" className="rounded-xl w-full h-[175px] mb-3" />
              <p className="rounded-e-xl bg-orange text-xs w-[125px] h-[20px] text-center text-white absolute top-[5%]">Landscaping</p>
              <div className="flex justify-between px-1">
                <p className="font-bold text-xs">Grass cutting in Jennings</p>
                <p className="font-bold text-sm">$120</p>
              </div>
              <div className="flex justify-between px-1 mt-2 items-end">
                <p className="font-bold opacity-60">Ant Head</p>
                <button className="rounded-md bg-primary text-sm text-white w-[110px] h-[35px] hover:scale-[105%] transition-transform duration-500">
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Task;
