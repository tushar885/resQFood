import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const AppLayout = () => {
  return (
    <div className="bg-[#f7f3f5] min-h-screen  ">
      {/* <div className="w-full min-h-screen absolute top-0 left-0 bottom-0 bg-white bg-opacity-60 "> */}{" "}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
