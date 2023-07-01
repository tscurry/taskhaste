import * as React from "react";
import { BiEditAlt } from "react-icons/bi";

const Settings = () => {
  const [view, setView] = React.useState("account");

  return (
    <div className="bg-white h-full mb-[50px]">
      <div className="mx-5">
        <h1 className="font-bold text-lg lg:text-2xl pt-7 mb-3">Settings</h1>
        <hr className="w-full border-primary opacity-50 mb-5" />
        <div className="nav flex gap-2 md:gap-6">
          <button
            onClick={() => setView("account")}
            className={`${
              view === "account" ? "bg-primary text-white scale-100" : "hover:scale-[105%]"
            } transition-transform duration-500 text-sm px-5 py-1 rounded-md`}
          >
            Account
          </button>
          <button
            onClick={() => setView("notifications")}
            className={`${
              view === "notifications" ? "bg-primary text-white scale-100" : "hover:scale-[105%]"
            } transition-transform duration-500 text-sm px-5 py-1 rounded-md`}
          >
            Notifcations
          </button>
          <button
            className={`${
              view === "payment" ? "bg-primary text-white scale-100" : "hover:scale-[105%]"
            } transition-transform duration-500 text-sm cursor-pointer px-5 py-1 rounded-md`}
          >
            Payment
          </button>
        </div>
        {view === "account" && <AccountSettings />}
        {view === "notifications" && <NotificationSettings />}
      </div>
    </div>
  );
};

const AccountSettings = () => {
  return (
    <>
      <h2 className="font-bold text-lg my-[60px]">Account</h2>
      <div className="flex border-b-[2px] pb-5 justify-between items-center">
        <div>
          <p className="mb-2 text-sm md:text-base">Display Name</p>
          <p className="text-xs opacity-60">This is the name other users will see on your profile or tasks</p>
        </div>
        <div className="flex gap-5 md:mr-5 ml-5 items-center">
          <p className="text-xs">Joshua Willams</p>
          <div>
            <button className="transition-transform duration-500 hover:scale-[105%] rounded-md flex items-center px-3 py-1 text-sm bg-primary border-primary text-white">
              Edit
              <BiEditAlt className="ml-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex border-b-[2px] pb-5 pt-7 justify-between items-center">
        <div>
          <p className="mb-2 text-sm md:text-base">Email</p>
          <p className="text-xs opacity-60">This email is used for logging in and receiving important notifications from us</p>
        </div>
        <div className="flex gap-5 md:mr-5 ml-5 items-center">
          <p className="text-xs">jwilliams@gmail.com</p>
          <div>
            <button className="transition-transform duration-500 hover:scale-[105%] rounded-md flex items-center px-3 py-1 text-sm bg-primary border-primary text-white">
              Edit
              <BiEditAlt className="ml-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex border-b-[2px] pb-5 pt-7 justify-between items-center">
        <div>
          <p className="mb-2 text-sm md:text-base">Contact Number</p>
          <p className="text-xs opacity-60">This number is used for account recovery purposes and urgent communication if needed</p>
        </div>
        <div className="flex items-center ml-5 md:mr-5 gap-5">
          <p className="text-xs">4168242671</p>
          <div>
            <button className="transition-transform duration-500 hover:scale-[105%] rounded-md flex items-center px-3 py-1 text-sm bg-primary border-primary text-white">
              Edit
              <BiEditAlt className="ml-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex border-b-[2px] pb-5 pt-7 justify-between items-center">
        <div>
          <p className="mb-2 text-sm md:text-base">Password</p>
          <p className="text-xs opacity-60">Use a strong password to secure your account. Doing this will log you out of all sessions</p>
        </div>
        <div>
          <div className="md:mr-5 ml-5 ">
            <button className="transition-transform duration-500 hover:scale-[105%] rounded-md flex items-center px-3 py-1 text-sm bg-primary border-primary text-white">
              Change Password
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="pb-5 border-b-[2px]">
          <div className="border-2 border-dashed border-primary rounded-lg p-5 mt-7">
            <div className="flex justify-between">
              <div>
                <h2 className="text-sm md:text-base font-medium mb-2">Address</h2>
                <p className="text-xs opacity-60">
                  Your address is used for matching tasks in your vicinity. Only the city/area will be shown to other users
                </p>
              </div>
              <div>
                <button className="ml-5 transition-transform duration-500 hover:scale-[105%] rounded-md flex items-center px-3 py-1  text-sm bg-primary border-primary text-white">
                  Edit
                  <BiEditAlt className="ml-1" />
                </button>
              </div>
            </div>
            <div className="flex gap-[100px] md:gap-[200px]">
              <div className="mt-10 mb-5">
                <p className="text-sm mb-1">Country</p>
                <p className="font-bold text-sm">United Kingdom</p>
              </div>
              <div className="mt-10">
                <p className="text-sm mb-1">Postal/Zip Code</p>
                <p className="text-sm font-bold">M7S 29I</p>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm mb-1">City/State</p>
              <p className="text-sm font-bold">Leeds, East London</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 pt-7 pb-5 border-b-[2px] items-center">
          <div>
            <p className="mb-2 text-sm md:text-base">Delete Account</p>
            <p className="text-xs opacity-60">Deleting your account will permanently erase all your data from our servers and cannot be undone</p>
          </div>
          <div className="ml-5 md:mr-5">
            <button className="text-xs text-[#ff0000] hover:underline cursor-pointer hover:scale-[105%] transition-transform duration-500 ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationSettings = () => {
  return (
    <>
      <h2 className="font-bold text-lg my-[60px]">Notifications</h2>
    </>
  );
};

const PaymentSettings = () => {
  return (
    <>
      <h2 className="font-bold text-lg my-[60px]">Payment</h2>
    </>
  );
};

export default Settings;
