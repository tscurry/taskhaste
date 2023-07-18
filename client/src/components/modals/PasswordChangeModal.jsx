import * as React from "react";
import { Modal, Fade, Box } from "@mui/material";

import PasswordChecklist from "react-password-checklist";

const PasswordChangeModal = props => {
  const [oldPassword, setOldPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState({});

  return (
    <>
      <Modal open={props.modalOpen["password"]} onClose={() => props.setModalOpen(prev => ({ ...prev, password: false }))}>
        <Fade in={props.modalOpen["password"]}>
          <Box className="absolute p-6 bg-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-lg shadow-lg md:w-[500px]">
            <p className="md:text-xl font-bold mb-5">Change Password</p>
            <form action="/" method="post">
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm">
                  Old Password
                </label>
                <input
                  type="password"
                  name="old-password"
                  id="old-password"
                  className="border border-black rounded mt-2 mb-5 p-2"
                  onChange={e => setOldPassword(e.target.value)}
                  value={oldPassword}
                  onFocus={() => setIsFocused(prev => ({ ...prev, "old-password": true }))}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border border-black rounded mt-2 mb-5 p-2"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  onFocus={() => setIsFocused(prev => ({ ...prev, password: true }))}
                  required
                />
              </div>
              {isFocused["password"] && (
                <PasswordChecklist
                  onChange={isValid => setPasswordValid(isValid)}
                  minLength={8}
                  valueAgain={confirmPassword}
                  value={password}
                  rules={["minLength", "specialChar", "capital", "number", "match"]}
                  className="text-xs md:text-sm"
                  iconSize={15}
                />
              )}
              <div className="flex flex-col">
                <label htmlFor="confirm-password" className={`${isFocused["password"] && "mt-5"} text-sm`}>
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  onFocus={() => setIsFocused(prev => ({ ...prev, "confirm-password": true }))}
                  className=" border border-black rounded mt-2 p-2"
                  required
                />
              </div>
            </form>

            <div className="mt-10 w-full">
              <button type="submit" className="text-sm bg-primary text-white p-2 rounded disabled:bg-[#ccc] w-full" disabled={!passwordValid}>
                Save Changes
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default PasswordChangeModal;
