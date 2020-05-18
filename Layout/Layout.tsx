import React from "react";
import { ToastContainer } from "react-toastify";
import Nav from "../components/Nav/Nav";

const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <Nav></Nav>
      <main>{children}</main>
      <ToastContainer />
    </>
  );
};

export default Layout;
