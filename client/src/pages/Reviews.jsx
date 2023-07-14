import * as React from "react";
import { AiFillStar } from "react-icons/ai";
import { Rating } from "@mui/material";
import sample from "../assets/sample.jpg";

const Reviews = () => {
  return (
    <div className="h-full bg-white mb-[50px]">
      <div className="mx-5">
        <h1 className="font-bold text-lg lg:text-2xl pt-7 mb-3">Reviews</h1>
        <hr className="w-full border-primary opacity-50 mb-14" />
        <div className="grid grid-cols-3 mb-2 py-4 border-b-[2px] border-t-[2px]">
          <div className="col-span-1 text-start border-r-[2px] px-4 my-auto">
            <h2 className="mb-5">Total Reviews</h2>
            <p className="font-medium text-2xl">5.7k</p>
          </div>
          <div className="col-span-1 text-center border-r-[2px] my-auto px-4">
            <h2 className="mb-5">Average Rating</h2>
            <p className="font-medium text-2xl">4.7</p>
          </div>
          <div className="col-span-1 px-4 my-auto">
            <div className="flex items-center">
              <div className="flex items-center max-sm:visible sm:hidden">
                <p className="text-xs mr-1">5</p>
                <AiFillStar color="gold" className="mr-1 text-xs" />
              </div>
              <div className="flex items-center max-sm:hidden">
                <Rating readOnly value={5} size="small" />
              </div>
              <p className="text-sm ml-2">5,657</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center max-sm:visible sm:hidden">
                <p className="text-xs mr-1">4</p>
                <AiFillStar color="gold" className="mr-1 text-xs" />
              </div>
              <div className="flex items-center max-sm:hidden">
                <Rating readOnly value={4} size="small" />
              </div>
              <p className="text-sm ml-2">4,128</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center max-sm:visible sm:hidden">
                <p className="text-xs mr-1">3</p>
                <AiFillStar color="gold" className="mr-1 text-xs" />
              </div>
              <div className="flex items-center max-sm:hidden">
                <Rating readOnly value={3} size="small" />
              </div>
              <p className="text-sm ml-2">456</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center max-sm:visible sm:hidden">
                <p className="text-xs mr-1">2</p>
                <AiFillStar color="gold" className="mr-1 text-xs" />
              </div>
              <div className="flex items-center max-sm:hidden">
                <Rating readOnly value={2} size="small" />
              </div>
              <p className="text-sm ml-2">56</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center max-sm:visible sm:hidden">
                <p className="text-xs mr-1">1</p>
                <AiFillStar color="gold" className="mr-1 text-xs" />
              </div>
              <div className="flex items-center max-sm:hidden">
                <Rating readOnly value={1} size="small" />
              </div>
              <p className="text-sm ml-2">6</p>
            </div>
          </div>
        </div>
        {Array(5)
          .fill()
          .map((_, index) => (
            <div className="my-10 flex pb-10 border-b-[2px] items-center flex-wrap md:flex-nowrap" key={index}>
              <img src={sample} alt="profile pic" className="rounded-xl h-[100px]" />
              <div className="ml-8">
                <p className="font-medium text-sm md:text-base">Alexandria Mason</p>
                <Rating value={2} precision={1} readOnly size="small" className="my-2" />
                <p className="opacity-60 text-sm">24-02-2022</p>
              </div>
              <div className="review mt-5 md:ml-[100px]">
                <p className="break-words text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis magnam molestias sapiente placeat consectetur, iure
                  modi assumenda numquam accusantium! Dicta possimus sed nemo aut est, numquam ipsam recusandae suscipit, quis corrupti iste iure
                  molestiae illum tenetur! Aliquam beatae inventore, maiores velit harum voluptates fugiat amet expedita, nesciunt magni rerum?
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
