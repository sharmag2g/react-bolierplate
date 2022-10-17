import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/landingpage/Home";
// import Routes from "./routes/index";
// import useAuthContext from "./utils/AuthContext";
import "../src/assets/bootstrap.css";
import "../src/assets/global.scss";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgetPassword from "./components/auth/ForgetPassword";
import Otp from "./components/auth/Otp";
import CreatePassword from "./components/auth/CreatePassword";

const App = () => {
  // const { state } = useAuthContext();
  return (
    <>
      {/* <Router>
        <Routes
          isAuthenticated={state.isAuthenticated}
          userType={state.userType}
        />
      </Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/createpassword" element={<CreatePassword />} />
      </Routes>
    </>
  );
};
export default App;
