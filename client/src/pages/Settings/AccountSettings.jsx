import * as React from "react";
import { BiEditAlt } from "react-icons/bi";
import { PasswordChangeModal, AccountDeleteModal, AddressChangeModal } from "../../components/modals/index";
import validator from "validator";

const AccountSettings = () => {
  const initialSettings = {
    email: "jwilliams@gmail.com",
    displayName: "Joshua Williams",
    phone: "4165678891",
    address: "10 Bay Ave, Toronto ON, Canada",
  };

  const [modalOpen, setModalOpen] = React.useState({});
  const [accountSettings, setAccountSettings] = React.useState(initialSettings);
  const [tempInput, setTempInput] = React.useState({ "display-name": "", email: "", phone: "" });
  const [isFocused, setIsFocused] = React.useState({});
  const [isMobileValid, setIsMobileValid] = React.useState(false);

  React.useEffect(() => {
    validator.isMobilePhone(accountSettings.phone, "en-CA") ? setIsMobileValid(true) : setIsMobileValid(false);
  }, [accountSettings.phone]);

  React.useEffect(() => {
    for (let field in isFocused) {
      if (isFocused[field]) {
        document.getElementById(field).focus();
      }
    }
  }, [isFocused]);

  const handleClick = input => {
    setIsFocused(prev => ({ ...prev, [input]: true }));
  };

  const saveChanges = () => {
    console.log(isMobileValid);
  };

  const revertChanges = () => {
    setAccountSettings({ ...initialSettings });
    setIsFocused({});
  };

  const hasChanges = JSON.stringify(initialSettings) === JSON.stringify(accountSettings);

  return (
    <>
      <h2 className="font-bold text-lg my-[60px]">Account</h2>
      <div className="flex border-b-[2px] pb-5 justify-between items-center">
        <div>
          <p className="mb-2 text-sm md:text-base">Display Name</p>
          <p className="text-xs opacity-60">This is the name other users will see on your profile or tasks</p>
        </div>
        <div className="flex gap-5 md:mr-5 ml-5 items-center flex-wrap md:flex-nowrap">
          <input
            type="text"
            name="display-name"
            id="display-name"
            value={isFocused["display-name"] ? tempInput["display-name"] : accountSettings.displayName}
            onChange={e => setTempInput(prev => ({ ...prev, "display-name": e.target.value }))}
            className={`${isFocused["display-name"] ? "border border-primary rounded p-2 text-xs" : "text-xs p-2 disabled:bg-white"}`}
            disabled={!isFocused["display-name"]}
          />
          <div>
            {!isFocused["display-name"] && (
              <button
                className="transition-transform duration-500 hover:scale-[105%] rounded-md flex items-center px-3 py-1 text-sm bg-primary border-primary text-white"
                onClick={() => handleClick("display-name")}
              >
                Edit <BiEditAlt className="ml-1" />
              </button>
            )}
            {isFocused["display-name"] && (
              <div className="flex gap-3">
                <button
                  className="transition-transform duration-500 hover:scale-[105%] rounded-md px-4 py-1 text-sm bg-primary text-white"
                  onClick={() => setIsFocused(prev => ({ ...prev, "display-name": false }))}
                >
                  Cancel
                </button>
                <button
                  className="transition-transform duration-500 hover:scale-[105%] rounded-md px-4 py-1 text-sm bg-primary text-white disabled:bg-[#ccc] disabled:scale-100"
                  onClick={() => {
                    setIsFocused(prev => ({ ...prev, "display-name": false }));
                    setAccountSettings(prev => ({ ...prev, displayName: tempInput["display-name"] }));
                    setTempInput(prev => ({ ...prev, "display-name": "" }));
                  }}
                  disabled={!tempInput["display-name"].length > 0}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex border-b-[2px] pb-5 pt-7 justify-between items-center" id="hi">
        <div>
          <p className="mb-2 text-sm md:text-base">Email</p>
          <p className="text-xs opacity-60">This email is used for logging in and receiving important notifications from us</p>
        </div>
        <div className="flex gap-5 md:mr-5 ml-5 items-center flex-wrap md:flex-nowrap">
          <input
            type="text"
            name="email"
            id="email"
            value={isFocused["email"] ? tempInput["email"] : accountSettings.email}
            onChange={e => setTempInput(prev => ({ ...prev, email: e.target.value }))}
            className={`${isFocused["email"] ? "border border-primary p-2 text-xs rounded" : "text-xs p-2 disabled:bg-white"}`}
            disabled={!isFocused["email"]}
          />
          <div>
            {!isFocused["email"] && (
              <button
                className="transition-transform duration-500 hover:scale-[105%] rounded-md flex items-center px-3 py-1 text-sm bg-primary border-primary text-white"
                onClick={() => handleClick("email")}
              >
                Edit <BiEditAlt className="ml-1" />
              </button>
            )}
            {isFocused["email"] && (
              <div className="flex gap-3">
                <button
                  className="transition-transform duration-500 hover:scale-[105%] rounded-md px-4 py-1 text-sm bg-primary text-white"
                  onClick={() => setIsFocused(prev => ({ ...prev, email: false }))}
                >
                  Cancel
                </button>
                <button
                  className="transition-transform duration-500 hover:scale-[105%] rounded-md px-4 py-1 text-sm bg-primary text-white disabled:bg-[#ccc] disabled:scale-100"
                  onClick={() => {
                    setIsFocused(prev => ({ ...prev, email: false }));
                    setAccountSettings(prev => ({ ...prev, email: tempInput["email"] }));
                    setTempInput(prev => ({ ...prev, email: "" }));
                  }}
                  disabled={!validator.isEmail(tempInput["email"])}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex border-b-[2px] pb-5 pt-7 justify-between items-center">
        <div>
          <p className="mb-2 text-sm md:text-base">Contact Number</p>
          <p className="text-xs opacity-60">This number is used for account recovery purposes and urgent communication if needed</p>
        </div>
        <div className="flex items-center ml-5 md:mr-5 gap-5 flex-wrap md:flex-nowrap">
          <input
            type="tel"
            name="phone"
            id="phone"
            value={isFocused["phone"] ? tempInput["phone"] : accountSettings.phone}
            onChange={e => setTempInput(prev => ({ ...prev, phone: e.target.value }))}
            className={`${isFocused["phone"] ? "border border-primary rounded p-2 text-xs" : "p-2 text-xs disabled:bg-white"}`}
            disabled={!isFocused["phone"]}
          />
          <div>
            {!isFocused["phone"] && (
              <button
                className="transition-transform duration-500 hover:scale-[105%] rounded-md flex items-center px-3 py-1 text-sm bg-primary border-primary text-white"
                onClick={() => handleClick("phone")}
              >
                Edit <BiEditAlt className="ml-1" />
              </button>
            )}
            {isFocused["phone"] && (
              <div className="flex gap-3">
                <button
                  className="transition-transform duration-500 hover:scale-[105%] rounded-md px-4 py-1 text-sm bg-primary text-white"
                  onClick={() => setIsFocused(prev => ({ ...prev, phone: false }))}
                >
                  Cancel
                </button>
                <button
                  className="transition-transform duration-500 hover:scale-[105%] rounded-md px-4 py-1 text-sm bg-primary text-white disabled:bg-[#ccc] disabled:scale-100"
                  onClick={e => {
                    setIsFocused(prev => ({ ...prev, phone: false }));
                    setAccountSettings(prev => ({ ...prev, phone: tempInput["phone"] }));
                    setTempInput(prev => ({ ...prev, phone: "" }));
                  }}
                  disabled={!validator.isMobilePhone(tempInput["phone"], "en-CA")}
                >
                  Save
                </button>
              </div>
            )}
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
            <button
              className="transition-transform duration-500 hover:scale-[105%] rounded-md flex items-center px-3 py-1 text-sm bg-primary border-primary text-white"
              onClick={() => setModalOpen(prev => ({ ...prev, password: true }))}
            >
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
                <button
                  className="ml-5 transition-transform duration-500 hover:scale-[105%] rounded-md flex items-center px-3 py-1  text-sm bg-primary border-primary text-white"
                  onClick={() => setModalOpen(prev => ({ ...prev, address: true }))}
                >
                  Edit
                  <BiEditAlt className="ml-1" />
                </button>
              </div>
            </div>
            <div className="mt-7">
              <p className="text-sm">{accountSettings.address}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 pt-7 pb-5 border-b-[2px] items-center">
          <div>
            <p className="mb-2 text-sm md:text-base text-[#ff0000]">Delete Account</p>
            <p className="text-xs opacity-60">Deleting your account will permanently erase all your data from our servers and cannot be undone</p>
          </div>
          <div className="ml-5 md:mr-5">
            <button
              className="text-xs text-[#ff0000] hover:underline cursor-pointer hover:scale-[105%] transition-transform duration-500"
              onClick={() => setModalOpen(prev => ({ ...prev, delete: true }))}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="flex mt-10 mb-20">
          <button
            className="bg-primary text-white transition-transform duration-500 hover:scale-[105%] text-sm py-2 px-3 rounded-md mr-5 disabled:bg-[#ccc] disabled:scale-100"
            onClick={revertChanges}
            disabled={hasChanges}
          >
            Revert Changes
          </button>
          <button
            type="submit"
            className="bg-primary py-2 px-3 rounded-md transition-transform duration-500 hover:scale-[105%] text-white disabled:bg-[#ccc] disabled:scale-100 text-sm"
            onClick={saveChanges}
            disabled={hasChanges}
          >
            Save Changes
          </button>
        </div>
        {modalOpen["delete"] && <AccountDeleteModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
        {modalOpen["password"] && <PasswordChangeModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
        {modalOpen["address"] && <AddressChangeModal modalOpen={modalOpen} setModalOpen={setModalOpen} settingsSetAddress={setAccountSettings} />}
      </div>
    </>
  );
};

export default AccountSettings;
