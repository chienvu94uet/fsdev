import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/layouts/NavBar/NavBar";

const AuthenLayout = () => {
  return (
    <>
      <NavBar isAuthPage />
      <Outlet />
    </>
  );
};

export default AuthenLayout;
