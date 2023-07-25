import * as React from "react";
import { FaRunning, FaFacebookF, FaMobileAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import PasswordChecklist from "react-password-checklist";

import signUp from "../assets/sign-up-login-task-illustration.svg";
import PlacesAutocomplete from "../components/PlacesAutocomplete";

const SignUp = () => {
  const [displayName, setDisplayName] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [streetAddress, setStreetAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [address, setAddress] = React.useState("");

  const [mobileValid, setMobileValid] = React.useState(false);
  const [nameValid, setNameValid] = React.useState(false);
  const [inputType, setInputType] = React.useState({ pass: "password", confirm: "password" });
  const [step, setStep] = React.useState(1);
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState({});

  const navigate = useNavigate();

  const nextStep = () => setStep(prevStep => prevStep + 1);
  const prevStep = () => setStep(prevStep => prevStep - 1);

  React.useEffect(() => {
    displayName !== "" ? setNameValid(true) : setNameValid(false);
  }, [displayName]);

  React.useEffect(() => {
    validator.isMobilePhone(mobile, "en-CA") ? setMobileValid(true) : setMobileValid(false);
  }, [mobile]);

  const firstValidation = validator.isEmail(email) && passwordValid;

  const togglePassword = input => {
    setInputType(prev => ({ ...prev, [input]: prev[input] === "password" ? "text" : "password" }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    return mobileValid && nameValid && passwordValid && validator.isEmail(email) && address;
  };

  const personalDetaills = () => {
    return (
      <>
        <form className="flex justify-center items-center flex-col mt-[45px] w-[575px] h-max" onSubmit={handleSubmit}>
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Almost There</h1>
          <p className="opacity-60 text-center text-sm mb-[30px] mt-[5px]">Enter details to finish sign up</p>
          <label htmlFor="name" className="text-xs font-medium mb-[7px] text-left w-[295px] sm:w-[355px] xl:w-[445px]">
            Display Name
          </label>
          <div className="relative mb-[15px]">
            <BsFillPersonFill className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
            <input
              className="border-primary h-[35px] text-xs rounded-md border w-[300px] sm:w-[360px] xl:w-[450px] pl-8 pr-2"
              type="text"
              name="name"
              value={displayName}
              id="name"
              placeholder="Enter your display name"
              onChange={e => setDisplayName(e.target.value)}
              required
            />
          </div>
          <PlacesAutocomplete
            page="signup"
            setCity={setCity}
            setCountry={setCountry}
            setPostalCode={setPostalCode}
            setRegion={setRegion}
            setStreetAddress={setStreetAddress}
            streetAddress={streetAddress}
            setAddress={setAddress}
          />
          <div className="w-[300px] sm:w-[360px] xl:w-[450px] grid grid-cols-1 md:grid-cols-2 gap-5 md:mt-[15px]">
            <div className="grid col-span-1 w-full mt-[15px] md:mt-0">
              <label htmlFor="city" className="font-medium text-xs text-left mb-[7px]">
                City
              </label>
              <input type="text" name="city" value={city} disabled className="border-primary h-[35px] text-xs rounded-md border px-2" />
            </div>
            <div className="w-full grid col-span-1">
              <label htmlFor="region" className="font-medium text-xs text-left mb-[7px]">
                Province/State
              </label>
              <input type="text" name="region" value={region} disabled className="border-primary h-[35px] text-xs rounded-md border px-2" />
            </div>
          </div>
          <div className="w-[300px] sm:w-[360px] xl:w-[450px] grid grid-cols-1 md:grid-cols-2 md:mt-[15px] gap-5 ">
            <div className="grid col-span-1 w-full mt-[15px] md:mt-0">
              <label htmlFor="city" className="font-medium text-xs text-left mb-[7px]">
                Postal/Zip Code
              </label>
              <input type="text" name="postal-code" value={postalCode} disabled className="border-primary h-[35px] text-xs rounded-md border px-2" />
            </div>
            <div className="w-full grid col-span-1">
              <label htmlFor="country" className="font-medium text-xs text-left mb-[7px]">
                Country
              </label>
              <input type="text" name="country" value={country} disabled className="border-primary h-[35px] text-xs rounded-md border px-2" />
            </div>
          </div>
          <div className="mt-[15px]">
            <label htmlFor="address" className="w-[295px] sm:w-[355px] xl:w-[445px] text-xs font-medium mb-[7px] text-left">
              Mobile Number
            </label>
            <div className="relative mb-[20px]">
              <FaMobileAlt className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
              <input
                className="border-primary h-[35px] text-xs rounded-md border w-[300px] sm:w-[360px] xl:w-[450px] pl-8 pr-2"
                type="tel"
                name="mobile-num"
                id="mobile-num"
                value={mobile}
                placeholder="Enter your mobile number"
                onChange={e => setMobile(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex gap-2 w-[300px] sm:w-[360px] xl:w-[450px]">
            <button onClick={prevStep} className="w-1/2 border rounded-md h-[35px] bg-primary text-white text-xs">
              Previous
            </button>
            <button className="disabled:bg-[#ccc] w-1/2 border rounded-md h-[35px] bg-primary text-white text-xs" type="submit">
              Sign up
            </button>
          </div>
          <div className="flex items-center mb-4 mt-[20px]">
            <div className={`w-[50px] h-1 ${step === 1 ? "bg-primary" : "bg-background"} rounded-lg mr-2`}></div>
            <div className={`w-[50px] h-1 ${step === 2 ? "bg-primary" : "bg-background"} rounded-lg ml-2`}></div>
          </div>
        </form>
      </>
    );
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-[30px] bg-white w-[1200px] rounded-[20px] max-xl:w-[800px] max-md:w-[500px] max-sm:w-[400px] max-xs:w-[360px] h-max my-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex">
            <FaRunning className="mr-[5px] h-[30px] w-[40px] max-md:h[20px] max-md:w-[20px]" />
            <h1 className="font-bold text-xl md:text-2xl">taskhaste</h1>
          </div>
          <div className="flex gap-3">
            {step === 1 && (
              <div className="flex justify-center items-center flex-col mt-[30px] sm:mt-[45px] w-[575px]">
                <h1 className="font-bold text-xl md:text-2xl">Let's Get Started</h1>
                <p className="opacity-60 text-xs md:text-sm">Create your account now</p>
                <div className="mt-[25px] text-center">
                  <button className="flex max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] items-center border-primary border rounded-md h-[35px] w-[375px] text-xs mb-[10px]">
                    <FcGoogle className="ml-16 sm:ml-28 md:ml-24 mr-[10px] h-[15px] w-[25px]" />
                    Continue with Google
                  </button>
                  <button className="flex max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] items-center rounded-md h-[35px] w-[375px] text-xs mb-[10px] bg-black text-white">
                    <BsApple className="ml-16 sm:ml-28 md:ml-24 mr-[10px] h-[15px] w-[25px]" />
                    Continue with Apple
                  </button>
                  <button className="flex max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] items-center rounded-md h-[35px] w-[375px] text-xs bg-facebook-button text-white">
                    <FaFacebookF className="ml-16 sm:ml-28 md:ml-24 mr-[10px] h-[15px] w-[25px]" />
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
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    placeholder="Enter your email address"
                    onFocus={() => setIsFocused(prev => ({ ...prev, email: true }))}
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                  {isFocused["email"] && !validator.isEmail(email) && (
                    <div className="pt-0.5 pl-0.5 text-xs text-red-600 mb-4 text-left">Not a valid email address</div>
                  )}
                </div>
                <label
                  htmlFor="password"
                  className=" max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] text-xs font-medium mb-[7px] w-[370px] text-left"
                >
                  Password
                </label>
                <div className="relative mb-[25px]">
                  <RiLockPasswordFill className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
                  <input
                    className="pl-8 max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] pr-2 border-primary w-[375px] h-[35px] rounded-md text-xs border"
                    type={inputType.pass}
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Enter your password"
                    onFocus={() => setIsFocused(prev => ({ ...prev, password: true }))}
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                  <div onClick={() => togglePassword("pass")}>
                    {inputType.pass !== "password" ? (
                      <AiFillEye className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                    ) : (
                      <AiFillEyeInvisible className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                    )}
                  </div>
                </div>
                <div className={`${isFocused["password"] ? "flex" : "hidden"} mb-[20px] text-xs -ml-[70px] xs:-ml-[90px] sm:-ml-[185px] md:-ml-36`}>
                  {isFocused["password"] && (
                    <PasswordChecklist
                      onChange={isValid => setPasswordValid(isValid)}
                      minLength={8}
                      valueAgain={confirmPassword}
                      value={password}
                      rules={["minLength", "specialChar", "capital", "number", "match"]}
                      iconSize={15}
                    />
                  )}
                </div>
                <label
                  htmlFor="confirm-password"
                  className="max-xs:w-[295px] max-sm:w-[315px] max-md:w-[415px] text-xs font-medium mb-[7px] w-[370px] text-left"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <RiLockPasswordFill className="top-1/2 -translate-y-1/2 absolute left-2 transform" />
                  <input
                    className="pl-8 max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] pr-2 w-[375px] h-[35px] rounded-md border-primary text-xs border-[1px]"
                    type={inputType.confirm}
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    required
                    onFocus={() => setIsFocused(prev => ({ ...prev, "confirm-password": true }))}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                  <div onClick={() => togglePassword("confirm")}>
                    {inputType.confirm !== "password" ? (
                      <AiFillEye className="top-1/2 absolute right-2 transform -translate-y-1/2" />
                    ) : (
                      <AiFillEyeInvisible className="top-1/2 absolute right-2 transform -translate-y-1/2" />
                    )}
                  </div>
                </div>

                <button
                  onClick={nextStep}
                  type="submit"
                  className="mt-[20px] disabled:bg-[#ccc] max-xs:w-[300px] max-sm:w-[320px] max-md:w-[420px] border rounded-md h-[35px] w-[380px] bg-primary text-white text-xs"
                  disabled={!firstValidation}
                >
                  Next
                </button>
                <div className="flex mt-[7px]">
                  <span className="opacity-60 text-xs">Already have an account?</span>
                  <p className="ml-[5px] font-semibold underline text-xs cursor-pointer" onClick={() => navigate("/login")}>
                    Sign in
                  </p>
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
