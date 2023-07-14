import * as React from "react";
import { Rating } from "@mui/material";

import sample from "../../assets/sample.jpg";
import { useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="lg:mx-12 mx-5 py-[50px]">
        <h1 className="font-bold text-lg lg:text-2xl ">Grass cutting in Jennings</h1>
        <p className="rounded-e-xl bg-orange text-xs w-[125px] h-[20px] flex items-center justify-center text-center text-white my-4">Landscaping</p>
        <p className="opacity-60 mb-4">Tasha Evans</p>
        <img className="h-[300px] rounded-2xl w-full md:w-3/4 lg:w-1/2" src={sample} alt="task images" />
        <p className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo odio quam recusandae dolorum, suscipit, ea ipsa illum asperiores
          voluptatem quia veniam labore quas tempore ipsam sequi, et ut blanditiis! Aliquid ex consectetur in alias iure excepturi fugit eum. Sed,
          quas fugiat explicabo tenetur blanditiis doloribus eaque similique cum recusandae voluptatum eum sapiente, laudantium soluta quia. Dolor
          ducimus quod perferendis excepturi non voluptas, dignissimos explicabo unde praesentium aliquam ut rem veritatis a repellendus dolorum quis
          molestias quae soluta tempore tempora aliquid fugiat nisi eligendi. At blanditiis voluptates architecto ea enim alias distinctio. Saepe
          temporibus nobis illo repudiandae quo, quidem itaque?
        </p>
        <div className="mt-[50px]">
          <span className="font-bold mr-2">Location:</span>
          <span>Central Park Neighbourhood, New York City</span>
        </div>
        <div className="mt-2">
          <span className="font-bold mr-2">Date & Time:</span>
          <span>June 19th, 2023, from 9am - 2pm</span>
        </div>
        <div className="mt-2">
          <span className="font-bold mr-2">Payment:</span>
          <span>$20/hr</span>
        </div>
        <button
          className="text-sm my-6 hover:scale-[105%] transition-transform duration-500 bg-primary text-white rounded p-4 shadow-lg"
          onClick={() => navigate("/:userId/tasks/post-a-task")}
        >
          Start Task
        </button>
        <hr className="w-full border-primary opacity-50" />
        <div className="reviews mt-[50px]">
          <h2 className="font-bold text-lg mb-5">Tasha Evan's Ratings</h2>
          <div className="flex items-center mb-1">
            <span className="mr-2">Overall Ratings:</span>
            <Rating name="overall-ratings" readOnly precision={0.5} value={3.5} />
          </div>
          <div className="flex items-center mb-1">
            <span className="mr-2">Communication:</span>
            <Rating name="communication" readOnly precision={0.5} value={4.5} />
          </div>
          <div className="flex items-center mb-1">
            <span className="mr-2">Prompt Payment:</span>
            <Rating name="payment" readOnly precision={0.5} value={5} />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Clarity of Task Description:</span>
            <Rating name="description" readOnly precision={0.5} value={3} />
          </div>
        </div>
        <hr className="w-full border-primary opacity-50 my-[50px]" />
        <div>
          <h2 className="font-bold text-lg mb-[20px]">Feedback on Tasha Evans</h2>
          {Array(10)
            .fill()
            .map((_, index) => (
              <div className="review-card p-5 bg-background rounded-lg w-full my-[40px]" key={index}>
                <div className="flex items-end gap-2 mb-2">
                  <img src={sample} alt="avatar" className="rounded-full w-9" />
                  <p>John Delton</p>
                </div>
                <Rating value={5} precision={1} readOnly size="small" className="mb-4" />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sequi rerum sapiente ea odit! Atque, sunt eius. Nulla recusandae
                  praesentium totam quia labore consectetur in. Ad illo incidunt aut ipsam exercitationem quia error, nulla voluptatem at facilis
                  nihil dolor ratione, repellendus unde quo officiis magni. Repellendus atque nostrum laudantium sequi.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
