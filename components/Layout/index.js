import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="flex flex-col justify-between ">
      <Navbar />
      <motion.div
        className="progress-bar bg-gradient-to-r from-[#2D3082]  to-[#FBD107] bottom-0 h-1 z-[99999] rounded-full fixed left-0 right-0 origin-top"
        style={{ scaleX }}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
