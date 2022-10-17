import React from "react";
import Styles from "../../styles/Home.module.css";
import Layout from '../../components/Layout'

export default function Berita() {
  return (
    <Layout pageTittle={'Berita - '}>
      <div className={Styles.main}>Berita</div>
    </Layout>
  );
}
