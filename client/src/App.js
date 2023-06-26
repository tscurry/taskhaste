import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Task, Dashboard, Settings, Reviews } from "./pages/index";
import { Logout, SidePanel, AuthenticatedHeader } from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <AuthenticatedHeader />
      <div className="flex w-full">
        <div className="w-1/6">
          <SidePanel />
        </div>
        <div className="w-5/6">
          <Routes>
            <Route path="tasks" element={<Task />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
