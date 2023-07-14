import * as React from "react";
import { BsCashCoin, BsCheckSquare } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";

import img from "../assets/sample.jpg";

const Dashboard = () => {
  const title = ["Cleaning Dishes", "Deliver a Document", "Help mixing concrete"];
  const status = ["In Progress", "Completed", "Completed"];
  const dates = ["Jun 15, 2021", "May 2, 2019", "Oct 18, 2023"];
  const type = ["Shopping & Delivery", "Landscaping", "Indoor Chores & Personal Assistance"];

  const activities = title.map((title, key) => ({
    title,
    type: type[key],
    date: dates[key],
    status: status[key],
  }));

  return (
    <div className="bg-white h-full mb-[50px]">
      <div className="mx-5">
        <h1 className="font-bold text-lg lg:text-2xl pt-7 mb-3">Overview</h1>
        <hr className="w-full border-primary opacity-50 mb-14" />
        <div className="overview-cards grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
          <div className="rounded-lg w-[300px] sm:w-[250px] bg-[#BFE3B4] md:w-auto">
            <div className="flex items-center p-5 gap-5 ">
              <BsCashCoin className="text-2xl" />
              <h2 className="font-medium text-sm">Total Earned</h2>
            </div>
            <p className="pb-5 text-center font-medium text-2xl">$4,596.00</p>
          </div>
          <div className="rounded-lg w-[300px] bg-[#FFD700] sm:w-[250px] md:w-auto">
            <div className="flex items-center p-5 gap-5">
              <FaRegThumbsUp className="text-2xl" />
              <h2 className="font-medium text-sm">Average Rating</h2>
            </div>
            <p className="pb-5 text-center font-medium text-2xl">4.7</p>
          </div>
          <div className="rounded-lg w-[300px] bg-orange sm:w-[250px] md:w-auto">
            <div className="flex items-center p-5 gap-5">
              <BsCheckSquare className="text-2xl" />
              <h2 className="font-medium text-sm">Completed Tasks</h2>
            </div>
            <p className="pb-5 text-center font-medium text-2xl">572</p>
          </div>
        </div>
        <div className="my-14">
          <h2 className="font-medium text-lg lg:text-2xl mb-5">Active Tasks</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Array(10)
              .fill()
              .map((_, key) => (
                <div className="rounded-xl bg-background" key={key}>
                  <div className="flex p-5 items-center">
                    <img src={img} alt="active tasks" className="w-[65px] rounded-lg" />
                    <div className="mx-5 my-auto">
                      <p className="text-sm">Document Delivery in St. Johns</p>
                      <p className="opacity-60 text-xs mt-1">September 12, 2021</p>
                    </div>
                    <div className="bg-[#008000] rounded-lg p-1 w-[120px] my-auto">
                      <p className="text-xs text-center my-auto text-white">Completed</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="rounded-xl bg-background p-5 w-full">
          <div className="flex justify-between mb-5 text-sm md:text-base">
            <h2 className="font-medium">Recent Activity</h2>
            <p className="text-orange cursor-pointer hover:underline">View All</p>
          </div>
          <hr className="w-full border-primary opacity-50 mb-5" />
          <div className="grid grid-cols-4 text-xs md:text-sm mb-5">
            <h2 className="font-bold px-2 col-span-1">Title</h2>
            <h2 className="font-bold px-2 col-span-1">Type</h2>
            <h2 className="font-bold px-2 col-span-1">Date</h2>
            <h2 className="font-bold px-2 col-span-1">Status</h2>
          </div>
          <hr className="w-full border-primary opacity-50 mt-3 mb-3" />
          {activities.map((activity, index) => (
            <div key={index} className="grid grid-cols-4 text-xs md:text-sm">
              <p className="whitespace-normal break-words col-span-1">{activity.title}</p>
              <p className="col-span-1">{activity.type}</p>
              <p className="col-span-1">{activity.date}</p>
              <div className={`${activity.status === "Completed" ? "bg-[#008000]" : "bg-[#FFA500]"} rounded-lg p-1 md:w-[120px] h-max col-span-1`}>
                <p className="text-[8px] sm:text-xs text-center text-white">{activity.status}</p>
              </div>
              <hr className="w-full border-primary opacity-50 col-span-4 my-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
