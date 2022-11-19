import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between ">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
