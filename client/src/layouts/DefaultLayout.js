import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/layouts";

const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
