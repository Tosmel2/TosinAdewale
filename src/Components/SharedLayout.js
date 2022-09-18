import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const SharedLayout = ({ show, setShow }) => {
  return (
    <div >
      <Navbar show={show} setShow={setShow} />
      <Outlet  />
    </div>
  );
};

export default SharedLayout;
