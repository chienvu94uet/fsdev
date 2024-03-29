import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/layouts";
import { Loader } from "../../components/uikits";
import "./DefaultLayout.scss";

const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Loader />
    </>
  );
};

export default DefaultLayout;
