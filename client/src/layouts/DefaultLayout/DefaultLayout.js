import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/layouts";
import "./DefaultLayout.scss";

const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
