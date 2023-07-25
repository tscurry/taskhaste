import * as React from "react";
import PasswordChecklist from "react-password-checklist";

const ResetPassword = () => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isFocused, setIsFocused] = React.useState({});
  const [passwordValid, setPasswordValid] = React.useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] rounded-xl h-max p-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <form className="grid col-span-1 text-center mb-10" method="post">
          <div>
            <h1 className="font-bold text-xl lg:text-4xl mt-10 mb-2">Reset Password</h1>
            <span className="font-medium opacity-70">Enter a strong password below to reset your password</span>
          </div>
          <div className="flex flex-col p-2 mt-8">
            <label htmlFor="email" className="text-left p-1 text-sm md:text-base">
              New password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              className=" border border-primary h-[40px] rounded-md p-4 text-sm "
              onFocus={() => setIsFocused(prev => ({ ...prev, password: true }))}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <div className={`${isFocused["password"] ? "flex" : "hidden"} mb-[20px] text-xs text-left mt-5`}>
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
            <label htmlFor="email" className={`${isFocused["password"] ? "mt-0" : "mt-5"} text-left p-1 text-sm md:text-base`}>
              Confirm new password
            </label>
            <input
              type="password"
              name="confirm-pass"
              value={confirmPassword}
              id="confirm-pass"
              className=" border border-primary h-[40px] rounded-md p-4 text-sm "
              placeholder="Password"
              onChange={e => setConfirmPassword(e.target.value)}
            />

            <div className="flex gap-7">
              <button className="hover:opacity-90 bg-primary p-2 rounded-md mt-8 w-1/2 text-white text-xs md:text-sm">
                Cancel
              </button>
              <button type="submit" className="hover:opacity-90 bg-primary text-white p-2 rounded-md mt-8 w-1/2 text-xs disabled:bg-[#ccc] disabled:opacity-100" disabled={!passwordValid}>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
