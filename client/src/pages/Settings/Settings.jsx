import * as React from "react";
import { AccountSettings, PaymentSettings, NotificationSettings } from "./index";

const Settings = () => {
  const [view, setView] = React.useState("account");

  return (
    <div className="bg-white h-full mb-[50px]">
      <div className="mx-5">
        <h1 className="font-bold text-lg lg:text-2xl pt-7 mb-3">Settings</h1>
        <hr className="w-full border-primary opacity-50 mb-5" />
        <div className="nav flex md:gap-6">
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
            Notifications
          </button>
          <button
            onClick={() => setView("payment")}
            className={`${
              view === "payment" ? "bg-primary text-white scale-100" : "hover:scale-[105%]"
            } transition-transform duration-500 text-sm cursor-pointer px-5 py-1 rounded-md`}
          >
            Payment
          </button>
        </div>
        {view === "account" && <AccountSettings />}
        {view === "notifications" && <NotificationSettings />}
        {view === "payment" && <PaymentSettings />}
      </div>
    </div>
  );
};

export default Settings;
