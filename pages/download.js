import Marquee from "react-fast-marquee";
import Layout from "../components/Layout";
import Styles from "../styles/Home.module.css";
export default function test() {
  return (
    <Layout>
      <div className={Styles.main}>
        <Marquee speed={100} pauseOnHover={true}>
          <h1>Febriqgal purnama</h1>
        </Marquee>
      </div>
    </Layout>
  );
}
