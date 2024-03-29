import * as React from "react";
import { MdSearch } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HomeHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky w-full top-0 z-50 bg-background">
      <nav className="mx-auto flex justify-between py-5 px-11 text-center max-sm:px-5">
        <div className="flex items-center">
          <FaRunning className="mr-[5px] h-[40px] w-[40px] max-sm:h-[30px] max-sm:w-[30px]" />
          <h1 className="font-bold text-3xl max-sm:text-lg">taskhaste</h1>
        </div>
        <div>
          <button
            className="font-semibold border border-primary hover:scale-[105%] transition-transform duration-500 rounded mr-3 w-24 p-1 text-sm max-sm:text-xs max-sm:mx-0 max-sm:w-20"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            className="font-semibold border border-primary hover:scale-[105%] transition-transform duration-500 rounded ml-3 w-24 p-1 text-sm bg-primary text-white max-sm:text-xs max-sm:w-20"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export const AuthenticatedHeader = () => {
  return (
    <header className="sticky w-full top-0 z-50 bg-background">
      <nav className="mx-auto flex py-5 px-11 text-center max-md:px-5">
        <div className="flex items-center">
          <FaRunning className="mr-[5px] h-[40px] w-[40px] max-sm:h-[30px] max-sm:w-[30px]" />
          <h1 className="font-bold text-3xl max-sm:text-lg">taskhaste</h1>
        </div>
        <div className="relative mx-auto">
          <input
            className="bg-white h-9 rounded-lg max-md:w-[300px] max-sm:w-[200px] max-sm:text-xs max-sm:h-8 w-[500px] pl-9 focus:ring-1 focus:outline-none focus:ring-primary"
            type="text"
            name="search"
            id="search"
            placeholder="Search Taskhaste"
          />
          <MdSearch className="absolute left-2 top-2.5 max-sm:top-1.5 max-sm:w-4 w-5" size={20} />
        </div>
      </nav>
      <hr className="w-full border-primary opacity-30" />
    </header>
  );
};
