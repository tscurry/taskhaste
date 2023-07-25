import * as React from "react";
import { BrowserRouter, useNavigate, Outlet, Route, Routes } from "react-router-dom";
import { Task, Dashboard, Settings, Reviews, SignUp, Login, Home, TaskDetails, TaskPosting } from "./pages/index";
import { Logout, SidePanel, AuthenticatedHeader } from "./components/index";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const auth = false;

  const MainWrapper = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
      if (auth) navigate("dashboard");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);

    return (
      <div className="flex w-full">
        <div className="w-1/6">
          <SidePanel />
        </div>
        <Outlet />
      </div>
    );
  };

  const Wrapper = ({ component: Component }) => {
    return (
      <div className="w-5/6">
        <Component />
      </div>
    );
  };

  return (
    <BrowserRouter>
      {auth && <AuthenticatedHeader />}
      <Routes>
        {auth ? (
          <>
            <Route path="/:userId" element={<MainWrapper />}>
              <Route index element={<Dashboard />} />
              <Route path="/:userId/tasks" element={<Wrapper component={Task} />}></Route>
              <Route path={`${auth ? "/:userId/tasks/:taskId" : "/tasks/:taskId"}`} element={<Wrapper component={TaskDetails} />} />
              <Route path="/:userId/tasks/post-a-task" element={<Wrapper component={TaskPosting} />} />
              <Route path="dashboard" element={<Wrapper component={Dashboard} />} />
              <Route path="/:userId/settings" element={<Wrapper component={Settings} />} />
              <Route path="/:userId/settings/account" element={<Wrapper component={Settings} />} />
              {/* <Route path="/:userId/settings/notifications" element={<Wrapper component={Settings} />} /> */}
              <Route path="/:userId/settings/payment" element={<Wrapper component={Settings} />} />
              <Route path="reviews" element={<Wrapper component={Reviews} />} />
              <Route path="logout" element={<Wrapper component={Logout} />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="tasks" element={<Task />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="tasks/:taskId" element={<TaskDetails />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
