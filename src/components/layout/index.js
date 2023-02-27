/* eslint-disable @next/next/no-img-element */
import { Tooltip } from "@nextui-org/react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
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
    <div>
      <Navbar />
      <motion.div
        className="progress-bar bg-gradient-to-r from-[#2d3082]  to-[#fbd107] bottom-0 h-1 z-[99999] rounded-full fixed left-0 right-0 origin-top"
        style={{ scaleX }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <main className="mt-[85px]">{children}</main>
      </motion.div>
      <Footer />
    </div>
  );
}
