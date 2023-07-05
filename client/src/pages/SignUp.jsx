import * as React from "react";
import { FaRunning, FaFacebookF, FaAddressCard, FaMobileAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import validator from "validator";

import signUp from "../assets/sign-up-login-task-illustration.svg";

const SignUp = () => {
  const [firstToggle, setFirstToggle] = React.useState(false);
  const [secondToggle, setSecondToggle] = React.useState(false);
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState(null);
  const [mobile, setMobile] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [step, setStep] = React.useState(1);

  const nextStep = () => setStep(prevStep => prevStep + 1);
  const prevStep = () => setStep(prevStep => prevStep - 1);

  const validatePassword = (pass, confirmPass) => {
    const validPassword = pass.length >= 8;
    const validMatch = pass === confirmPass;

    return validMatch && validPassword;
  };

  const firstValidation = validator.isEmail(email) && validatePassword(password, confirmPassword);

  const secondValidation = () => {
    const validName = name !== "";
    const validAddress = address !== null;
    console.log(validator.isMobilePhone(mobile, "any"));

    return validName && validAddress && validator.isMobilePhone(mobile, "any");
  };

  const togglePassword = () => {
    console.log(firstToggle, secondToggle);
    setFirstToggle(!firstToggle);
    let password = document.getElementById("password");

    if (!firstToggle && password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const toggleConfirm = () => {
    setSecondToggle(!secondToggle);
    let confirmPassword = document.getElementById("confirm-password");

    if (!secondToggle && confirmPassword.type === "password") {
      confirmPassword.type = "text";
    } else {
      confirmPassword.type = "password";
    }
  };

  const personalDetaills = () => {
    return (
      <>
        <div className="flex justify-center items-center flex-col mt-[45px] w-[575px]">
          <h1 className="font-bold text-3xl max-md:text-2xl">Almost There</h1>
          <p className="opacity-60 text-center max-md:text-sm mb-[75px] mt-[5px]">Enter details to finish sign up</p>
          <label
            htmlFor="display-name"
            className="max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] text-xs font-medium mb-[7px] w-[370px] text-left"
          >
            Display Name
          </label>
          <div className="relative mb-[25px]">
            <BsFillPersonFill className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
            <input
              className="pl-8 max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] pr-2 border-primary w-[375px] h-[35px] rounded-md text-xs border"
              type="text"
              name="display-name"
              id="display-name"
              placeholder="Enter your display name"
              onChange={e => setName(e.target.name)}
            />
          </div>
          <label htmlFor="address" className="max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] text-xs font-medium mb-[7px] w-[370px] text-left">
            Address
          </label>
          <div className="relative mb-[20px]">
            <FaAddressCard className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
            <input
              className="pl-8 max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] pr-2 border-primary w-[375px] h-[35px] rounded-md text-xs border"
              type="text"
              name="address"
              id="address"
              placeholder="Please enter your address"
              onChange={e => setAddress(e.target.value)}
            />
          </div>
          <label htmlFor="address" className="max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] text-xs font-medium mb-[7px] w-[370px] text-left">
            Mobile Number
          </label>
          <div className="relative mb-[20px]">
            <FaMobileAlt className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
            <input
              className="pl-8 max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] pr-2 border-primary w-[375px] h-[35px] rounded-md text-xs border"
              type="tel"
              name="mobile-num"
              id="mobile-num"
              placeholder="Enter your mobile number"
              onChange={e => setMobile(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-[300px] xs:w-[320px] sm:w-[420px] md:w-[380px]">
            <button onClick={prevStep} className="w-1/2 border rounded-md h-[35px] bg-primary text-white text-xs">
              Previous
            </button>
            <button
              disabled={!secondValidation()}
              className="disabled:bg-[#ccc] w-1/2 border rounded-md h-[35px] bg-primary text-white text-xs"
              type="submit"
            >
              Sign up
            </button>
          </div>
          <div className="flex items-center mb-4 mt-[20px]">
            <div className={`w-[50px] h-1 ${step === 1 ? "bg-primary" : "bg-background"} rounded-lg mr-2`}></div>
            <div className={`w-[50px] h-1 ${step === 2 ? "bg-primary" : "bg-background"} rounded-lg ml-2`}></div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-[30px] bg-white w-[1200px] h-[750px] rounded-[20px] max-xl:w-[800px] max-md:w-[500px] max-sm:w-[400px] max-xs:w-[360px] max-xs:h-[700px]">
          <div className="flex">
            <FaRunning className="mr-[5px] h-[30px] w-[40px] max-md:h[20px] max-md:w-[20px]" />
            <h1 className="font-bold text-3xl max-md:text-2xl">taskhaste</h1>
          </div>
          <div className="flex gap-3">
            {step === 1 && (
              <div className="flex justify-center items-center flex-col mt-[45px] w-[575px]">
                <h1 className="font-bold text-3xl max-md:text-2xl">Let's Get Started</h1>
                <p className="opacity-60 text-center max-md:text-sm">Create your account now</p>
                <div className="mt-[25px] text-center">
                  <button className="flex max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] items-center border-primary border rounded-md h-[35px] w-[375px] text-xs mb-[10px]">
                    <FcGoogle className="sm:ml-32 md:ml-24 max-sm:ml-20 mr-[10px] h-[15px] w-[25px]" />
                    Continue with Google
                  </button>
                  <button className="flex max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] items-center rounded-md h-[35px] w-[375px] text-xs mb-[10px] bg-black text-white">
                    <BsApple className="sm:ml-32 md:ml-24 max-sm:ml-20 mr-[10px] h-[15px] w-[25px]" />
                    Continue with Apple
                  </button>
                  <button className="flex max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] items-center rounded-md h-[35px] w-[375px] text-xs bg-facebook-button text-white">
                    <FaFacebookF className="sm:ml-32 md:ml-24 max-sm:ml-20 mr-[10px] h-[15px] w-[25px]" />
                    Continue with Facebook
                  </button>
                </div>
                <hr className="my-[25px] w-[200px] border-primary" />
                <label
                  htmlFor="email"
                  className="max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] text-xs font-medium mb-[7px] w-[370px] text-left"
                >
                  Email
                </label>
                <div className="relative mb-[25px]">
                  <MdEmail className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
                  <input
                    className="pl-8 max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] pr-2 border-primary w-[375px] h-[35px] rounded-md text-xs border"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <label
                  htmlFor="password"
                  className="max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] text-xs font-medium mb-[7px] w-[370px] text-left"
                >
                  Password
                </label>
                <div className="relative mb-[25px]">
                  <RiLockPasswordFill className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
                  <input
                    className="pl-8 max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] pr-2 border-primary w-[375px] h-[35px] rounded-md text-xs border"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                  <div onClick={togglePassword}>
                    {firstToggle ? (
                      <AiFillEye className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                    ) : (
                      <AiFillEyeInvisible className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                    )}
                  </div>
                </div>
                <label
                  htmlFor="confirm-password"
                  className="max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] text-xs font-medium mb-[7px] w-[370px] text-left"
                >
                  Confirm Password
                </label>
                <div className="relative mb-[20px]">
                  <RiLockPasswordFill className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
                  <input
                    className="pl-8 max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] pr-2 border-primary w-[375px] h-[35px] rounded-md text-xs border"
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="Confirm your password"
                    required
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                  <div onClick={toggleConfirm}>
                    {secondToggle ? (
                      <AiFillEye className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                    ) : (
                      <AiFillEyeInvisible className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                    )}
                  </div>
                </div>
                <button
                  onClick={nextStep}
                  type="submit"
                  className="disabled:bg-[#ccc] max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] border rounded-md h-[35px] w-[380px] bg-primary text-white text-xs"
                  disabled={!firstValidation}
                >
                  Next
                </button>
                <div className="flex mt-[7px]">
                  <span className="opacity-60 text-xs">Already have an account?</span>
                  <p className="ml-[5px] font-semibold underline text-xs cursor-pointer">Sign in</p>
                </div>
                <div className="flex items-center mb-4 mt-[20px]">
                  <div className={`w-[50px] h-1 ${step === 1 ? "bg-primary" : "bg-background"} rounded-lg mr-2`}></div>
                  <div className={`w-[50px] h-1 ${step === 2 ? "bg-primary" : "bg-background"} rounded-lg ml-2`}></div>
                </div>
              </div>
            )}
            {step === 2 && personalDetaills()}
            <div>
              <img className="h-[600px] w-[550px] max-md:hidden" src={signUp} alt="Sign Up illustration" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
