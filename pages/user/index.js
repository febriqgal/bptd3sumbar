import React from "react";
import LayoutUser from "../../components/layout-user";
import styles from "../../styles/Home.module.css";
import { useUser } from "../../context/user";

export default function Index() {
  const userC = useUser();
  return (
    <LayoutUser>
      <h1 className={styles.main}>Selamat datang {userC.displayName}</h1>
    </LayoutUser>
  );
}
