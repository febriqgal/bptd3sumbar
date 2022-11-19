import React from "react";
import LayoutAdmin from "../../components/layout-admin";
import styles from "../../styles/Home.module.css";
export default function index() {
  return (
    <LayoutAdmin>
      <div className={styles.main}>
        <h1>Admin</h1>
      </div>
    </LayoutAdmin>
  );
}
