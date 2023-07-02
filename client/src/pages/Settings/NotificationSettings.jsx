import * as React from "react";
import { Switch, FormControlLabel, FormGroup, styled, Typography } from "@mui/material";

const NotificationSettings = () => {
  const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 26,
    padding: 0,
    marginRight: 15,
    marginTop: 3,
    marginBottom: 3,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(25px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#27374d",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#27374d",
        border: "6px solid #fff",
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "gray",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      <h2 className="font-bold text-lg my-[60px]">Notifications</h2>
      <div className="flex justify-between pb-5 border-b-[2px]">
        <div>
          <p className="font-medium mb-2">Notification Preference</p>
          <p className="text-xs opacity-60">To enable or disable all notifications</p>
        </div>
        <div className="lg:mr-[265px]">
          <CustomSwitch />
        </div>
      </div>
      <div className="flex justify-between pb-5 pt-7 border-b-[2px]">
        <div>
          <p className="font-medium mb-2">Email Notifications</p>
          <p className="text-xs opacity-60">Choose the types of email notifications you want to receive</p>
        </div>
        <FormGroup className="ml-5 lg:mr-[120px]">
          <FormControlLabel control={<CustomSwitch />} label={<Typography sx={{ fontSize: "14px" }}>New task notifcation</Typography>} />
          <FormControlLabel control={<CustomSwitch />} label={<Typography sx={{ fontSize: "14px" }}>Task updates</Typography>} />
          <FormControlLabel control={<CustomSwitch />} label={<Typography sx={{ fontSize: "14px" }}>Account updates</Typography>} />
        </FormGroup>
      </div>
      <div className="flex justify-between pb-5 pt-7 border-b-[2px]">
        <div>
          <p className="font-medium mb-2">SMS Notifications</p>
          <p className="text-xs opacity-60">Choose the types of SMS notifications you want to receive</p>
        </div>
        <FormGroup className="ml-5 lg:mr-[120px]">
          <FormControlLabel control={<CustomSwitch />} label={<Typography sx={{ fontSize: "14px" }}>New task notifcation</Typography>} />
          <FormControlLabel control={<CustomSwitch />} label={<Typography sx={{ fontSize: "14px" }}>Task updates</Typography>} />
          <FormControlLabel control={<CustomSwitch />} label={<Typography sx={{ fontSize: "14px" }}>Account updates</Typography>} />
        </FormGroup>
      </div>
      <div className="flex justify-between pb-5 pt-7 border-b-[2px]">
        <div>
          <p className="font-medium mb-2">Push Notifications</p>
          <p className="text-xs opacity-60">Choose the types of push notifications you want to receive</p>
        </div>
        <FormGroup className="ml-5 lg:mr-[120px]">
          <FormControlLabel control={<CustomSwitch />} label={<Typography sx={{ fontSize: "14px" }}>New task notifcation</Typography>} />
          <FormControlLabel control={<CustomSwitch />} label={<Typography sx={{ fontSize: "14px" }}>Task updates</Typography>} />
          <FormControlLabel control={<CustomSwitch />} label={<Typography sx={{ fontSize: "14px" }}>Account updates</Typography>} />
        </FormGroup>
      </div>
      <button type="submit" className="transition-transform duration-500 hover:scale-[105%] my-10 py-2 px-4 bg-primary text-white rounded text-sm">
        Save Changes
      </button>
    </>
  );
};

export default NotificationSettings;
