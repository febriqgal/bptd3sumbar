import React from "react";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ pageTittle, children }) {
  return (
    <>
    
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
