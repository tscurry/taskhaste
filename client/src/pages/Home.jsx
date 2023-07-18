import * as React from "react";
import { HomeHeader } from "../components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeHeader />
      <section className="cta relative text-center mx-auto pt-[100px] z-20">
        <h1 className="max-sm:text-[30px] max-xs:text-[20px] text-[40px] font-bold">Accelerating Your To-Do List</h1>
        <p className="max-sm:text-base max-xs:text-xs mt-3 text-lg">Connect with reliable helpers to tackle your to-do list.</p>
        <div className="mt-8">
          <button
            className="bg-primary border rounded h-[40px] text-sm text-center text-white w-[120px] sm:mr-[25px] max-xs:w-[100px] max-xs:text-xs max-sm:mr-[15px] transition ease-in-out hover:scale-[105%] hover:bg-white hover:text-black duration-300 hover:border-primary"
            onClick={() => navigate("/signup")}
          >
            Post a Task
          </button>
          <button
            className="bg-primary border rounded h-[40px] text-sm text-center text-white w-[120px] sm:ml-[25px] max-xs:w-[100px] max-xs:text-xs transition ease-in-out hover:scale-[105%] hover:bg-white hover:text-black duration-300 hover:border-primary"
            onClick={() => navigate("/tasks")}
          >
            Find Tasks
          </button>
        </div>
      </section>
      <section className="cta-illustrations">
        <div className="flex gap-[250px] mx-auto mt-[50px] w-full h-[500px] max-xl:gap-[200px] max-xl:justify-center max-xl:h-[400px] max-lg:h-full max-xs:h-[420px] max-xs:w-screen 3xl:justify-center">
          <div className="bg-task-done bg-contain bg-no-repeat h-[600px] relative left-[100px] w-[500px] max-xl:w-[400px] max-lg:hidden"></div>
          <div className="flex gap-[25px] items-center w-[600px] max-sm:items-center max-sm:gap-[15px] max-2xl:w-[550px] max-xl:h-[230px] max-xl:w-[500px] max-xs:w-max max-xs:flex-wrap max-xs:px-[10px] max-sm:justify-center">
            <div className="shadow-lg h-[220px] w-[170px] flex justify-center bg-coral border rounded-[15px] items-center flex-col max-sm:w-[150px] max-sm:h-[200px] max-xs:w-[40%]">
              <div className="bg-fast w-[100px] h-[100px] bg-center bg-cover"></div>
              <h3 className="font-bold mb-[10px]">Fast</h3>
              <p className="text-xs text-center p-[10px]">Get matched with helpers in minutes</p>
            </div>
            <div className="shadow-lg h-[220px] w-[170px] bg-light-purple border rounded-[15px] justify-center items-center flex flex-col max-sm:h-[200px] max-sm:w-[150px] max-xs:w-[40%]">
              <div className="bg-reliable h-[100px] w-[100px] bg-center"></div>
              <h3 className="font-bold mb-[10px]">Reliable</h3>
              <p className="text-xs text-center p-[10px]">All our helpers are vetted and reviewed</p>
            </div>
            <div className="shadow-lg h-[220px] w-[170px] bg-light-green border rounded-[15px] flex justify-center items-center flex-col max-sm:w-[150px] max-sm:h-[200px] max-xs:w-[40%]">
              <div className="bg-flexible h-[80px] w-[80px] bg-center bg-cover mb-[15px]"></div>
              <h3 className="font-bold mb-[10px]">Flexible</h3>
              <p className="text-xs text-center p-[10px]">Find help for any task, anytime</p>
            </div>
          </div>
        </div>
      </section>
      <section className="categories px-11 max-sm:px-5 my-[75px] ">
        <h2 className="font-bold text-[22px] max-lg:text-[20px] max-sm:text-lg underline 3xl:flex 3xl:items-center 3xl:justify-center">Discover Categories</h2>
        <div className="flex justify-center items-center flex-wrap gap-[20px] mt-[50px] 3xl:gap-24">
          <div className="transition ease-in-out hover:border-primary hover:shadow-2xl hover:scale-[110%] flex flex-col border-[2px] rounded border-white p-[20px] ">
            <div className="bg-landscaping h-[200px] w-[200px] bg-slate-200"></div>
            <h2 className="text-center text-[14px]">Landscaping</h2>
          </div>
          <div className="transition ease-in-out hover:border-primary hover:shadow-2xl hover:scale-[110%] flex flex-col items-center border-[2px] rounded border-white p-[20px]">
            <div className="bg-chores h-[200px] w-[200px]"></div>
            <h2 className="text-center text-[14px]">Indoor Chores & Personal Assistance</h2>
          </div>
          <div className="transition ease-in-out hover:border-primary hover:shadow-2xl hover:scale-[110%] flex flex-col border-[2px] rounded border-white p-[20px]">
            <div className="bg-shopping h-[200px] w-[200px]"></div>
            <h2 className="text-center text-[14px]">Shopping & Delivery</h2>
          </div>
          <div className="transition ease-in-out hover:border-primary hover:shadow-2xl hover:scale-[110%] flex flex-col border-[2px] rounded border-white p-[20px]">
            <div className="bg-pet-care h-[200px] w-[200px]"></div>
            <h2 className="text-center text-[14px]">Pet Care</h2>
          </div>
          <div className="transition ease-in-out hover:border-primary hover:shadow-2xl hover:scale-[110%] flex flex-col border-[2px] rounded border-white p-[20px]">
            <div className="bg-tech-help h-[200px] w-[200px]"></div>
            <h2 className="text-center text-[14px]">Tech Help</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
