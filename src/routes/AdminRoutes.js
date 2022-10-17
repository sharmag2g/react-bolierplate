import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/landingpage/Home";
import AuthLayout from "../components/layout/AuthLayout";
import RouteWithLayout from "./RouteWithLayout";

const AdminRoutes = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="*" element={<Home />} />
    // </Routes>
    <Routes>
      <RouteWithLayout
        path="/"
        component={<Home />}
        layout={AuthLayout}
      />
    </Routes>
  );
};

export default AdminRoutes;
