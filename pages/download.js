import Styles from "../styles/Home.module.css";
import { Table } from "@nextui-org/react";
import Layout from "../components/Layout";
import Marquee from "react-fast-marquee";

export default function test() {
  return (
    <Layout>
      <div className={Styles.main}>
        <Marquee speed={100} pauseOnHover={true}>
          <h1>Febriqgal purnama</h1>
        </Marquee>
        <Table>
          <Table.Header>
            <Table.Column>No.</Table.Column>
            <Table.Column>Nama Berkasss</Table.Column>
            <Table.Column>Didownload</Table.Column>
            <Table.Column>Link</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1.</Table.Cell>
              <Table.Cell>dadfssssssssssssssssss </Table.Cell>
              <Table.Cell>434 Kali</Table.Cell>
              <Table.Cell>da dfsssssssssssssssssssss</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Layout>
  );
}
