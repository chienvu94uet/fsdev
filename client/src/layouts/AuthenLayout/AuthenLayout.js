import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/layouts/NavBar/NavBar";
import "./AuthenLayout.scss";

const AuthenLayout = () => {
  return (
    <>
      <NavBar isAuthPage />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthenLayout;
