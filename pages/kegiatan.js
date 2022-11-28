import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
export default function Kegiatan() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className={styles.main}>Kegiatan</div>
      </motion.div>
    </Layout>
  );
}
