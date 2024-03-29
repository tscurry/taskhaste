import * as React from "react";
import { FaRunning, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import validator from "validator";

import signUp from "../assets/sign-up-login-task-illustration.svg";

const Login = () => {
  const [toggle, setFirstToggle] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isFocused, setIsFocused] = React.useState({});

  const navigate = useNavigate();

  const formValidation = validator.isEmail(email) && password !== "";

  const togglePassword = () => {
    setFirstToggle(!toggle);
    let password = document.getElementById("password");

    if (!toggle && password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-[30px] bg-white w-[1200px] h-[750px] rounded-[20px] max-xl:w-[800px] max-md:w-[500px] max-sm:w-[400px] max-xs:w-[360px] max-xs:h-[700px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex">
            <FaRunning className="mr-[5px] h-[30px] w-[40px] max-md:h[20px] max-md:w-[20px]" />
            <h1 className="font-bold text-3xl max-md:text-2xl">taskhaste</h1>
          </div>
          <form action="" method="post" className="flex gap-3">
            <div className="flex justify-center items-center flex-col mt-[45px] w-[575px]">
              <h1 className="font-bold text-3xl max-md:text-2xl">Welcome Back</h1>
              <p className="opacity-60 text-center max-md:text-sm">Please enter your details to sign in</p>
              <div className="mt-[25px] text-center">
                <button className="flex max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] items-center border-primary border rounded-md h-[35px] w-[375px] text-xs mb-[10px]">
                  <FcGoogle className="sm:ml-32 md:ml-24 max-sm:ml-20 mr-[10px] h-[15px] w-[25px]" />
                  Sign in with Google
                </button>
                <button className="flex max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] items-center rounded-md h-[35px] w-[375px] text-xs mb-[10px] bg-black text-white">
                  <BsApple className="sm:ml-32 md:ml-24 max-sm:ml-20 mr-[10px] h-[15px] w-[25px]" />
                  Sign in with Apple
                </button>
                <button className="flex max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] items-center rounded-md h-[35px] w-[375px] text-xs bg-facebook-button text-white">
                  <FaFacebookF className="sm:ml-32 md:ml-24 max-sm:ml-20 mr-[10px] h-[15px] w-[25px]" />
                  Sign in with Facebook
                </button>
              </div>
              <hr className="my-[25px] w-[200px] border-primary" />
              <label htmlFor="email" className="max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] text-xs font-medium mb-[7px] w-[370px] text-left">
                Email
              </label>
              <div className={`relative ${isFocused["email"] && !validator.isEmail(email) ? "" : "mb-[25px]"}`}>
                <MdEmail
                  className={`${
                    isFocused["email"] && !validator.isEmail(email) ? "top-1/3 -translate-y-[85%]" : "top-1/2 -translate-y-1/2"
                  } absolute left-2  transform`}
                />
                <input
                  className={`${
                    isFocused["email"] && !validator.isEmail(email) ? "focus:outline-red-600 border-red-600" : "border-primary"
                  } pl-8 max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] pr-2 w-[375px] h-[35px] rounded-md text-xs border`}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onFocus={() => setIsFocused(prev => ({ ...prev, email: true }))}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                {isFocused["email"] && !validator.isEmail(email) && (
                  <div className="pt-0.5 pl-0.5 text-xs mb-4 text-red-600 text-left">Not a valid email address</div>
                )}
              </div>
              <label
                htmlFor="password"
                className="max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] text-xs font-medium mb-[7px] w-[370px] text-left"
              >
                Password
              </label>
              <div className="relative">
                <RiLockPasswordFill className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
                <input
                  className="pl-8 max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] pr-2 border-primary w-[375px] h-[35px] rounded-md text-xs border"
                  type="password"
                  name="password"
                  value={password}
                  id="password"
                  placeholder="Enter your password"
                  required
                  onChange={e => setPassword(e.target.value)}
                />
                <div onClick={togglePassword}>
                  {toggle ? (
                    <AiFillEye className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                  ) : (
                    <AiFillEyeInvisible className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                  )}
                </div>
              </div>
              <div className="max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] flex justify-between w-[370px] mb-[25px] mt-[5px]">
                <div className="flex">
                  <input className="mr-[5px]" type="checkbox" name="remember-me" id="remember-me" />
                  <span className="text-xs text-center">Remember me</span>
                </div>
                <span className="underline font-bold text-xs cursor-pointer" onClick={() => navigate("/forget-password")}>
                  Forgot Password?
                </span>
              </div>
              <button
                type="submit"
                className="disabled:bg-[#ccc] max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] border rounded-md h-[35px] w-[380px] bg-primary text-white text-xs"
                disabled={!formValidation}
              >
                Sign in
              </button>
              <div className="flex mt-[7px]">
                <span className="opacity-60 text-xs">Don't have an account?</span>
                <p className="ml-[5px] font-semibold underline text-xs cursor-pointer" onClick={() => navigate("/signup")}>
                  Create an account
                </p>
              </div>
            </div>
            <div>
              <img className="h-[600px] w-[550px] max-md:hidden" src={signUp} alt="Sign Up illustration" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
