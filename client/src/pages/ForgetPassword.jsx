import * as React from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import forgot from "../assets/forgot_password.svg";

const ForgetPassword = () => {
  const [email, setEmail] = React.useState("");
  const [isFocused, setIsFocused] = React.useState({});
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-[75%] rounded-xl h-[75%] p-8 grid grid-cols-1 md:grid-cols-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="grid col-span-1 max-md:hidden p-5">
          <img src={forgot} alt="forgot-password-illustration" className="h-full" />
        </div>
        <form className="grid col-span-1 text-center" method="post">
          <div>
            <h1 className="font-bold text-xl lg:text-5xl mt-10 mb-2">Forgot Password?</h1>
            <span className="font-medium opacity-70">We will email you a link to reset your password</span>
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="email" className="text-left p-1 text-sm md:text-base">
              Enter your email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              className={`${
                isFocused["email"] && !validator.isEmail(email) ? "focus:outline-red-600 border-red-600" : "border-primary"
              } border border-primary h-[40px] rounded-md p-4 max-xs:w-full text-sm `}
              onFocus={() => setIsFocused(prev => ({ ...prev, email: true }))}
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            {isFocused["email"] && !validator.isEmail(email) && (
              <div className="pt-0.5 pl-0.5 text-xs text-red-600 mb-4 text-left">Not a valid email address</div>
            )}
            <div className="flex gap-7">
              <button
                type="submit"
                className="hover:opacity-90 bg-primary text-white p-2 rounded-md mt-8 w-1/2 text-xs md:text-sm"
                onClick={() => navigate("/login")}
              >
                Back to login
              </button>
              <button
                type="submit"
                className="hover:opacity-90 bg-primary text-white p-2 rounded-md mt-8 w-1/2 text-xs disabled:bg-[#ccc] disabled:opacity-100"
                disabled={!validator.isEmail(email)}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
