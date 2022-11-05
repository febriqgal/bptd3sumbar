import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
