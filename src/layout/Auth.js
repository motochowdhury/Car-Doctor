import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";

const Auth = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Auth;
