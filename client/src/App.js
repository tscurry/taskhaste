import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Task, Dashboard, Settings, Reviews, SignUp, Login } from "./pages/index";
import { Logout, SidePanel, AuthenticatedHeader } from "./components/index";
import TaskPostingForm from "./pages/task/TaskPosting";
import PlacesAutocomplete from "./components/PlacesAutocomplete";

const App = () => {
  return (
    <SignUp />
    // <TaskPostingForm />
    // <PlacesAutocomplete/>
    // <BrowserRouter>
    //   <AuthenticatedHeader />
    //   <div className="flex w-full">
    //     <div className="w-1/6">
    //       <SidePanel />
    //     </div>
    //     <div className="w-5/6">
    //       <Routes>
    //         <Route path="tasks" element={<Task />} />
    //         <Route path="dashboard" element={<Dashboard />} />
    //         <Route path="settings" element={<Settings />} />
    //         <Route path="reviews" element={<Reviews />} />
    //         <Route path="logout" element={<Logout />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </BrowserRouter>
  );
};

export default App;
