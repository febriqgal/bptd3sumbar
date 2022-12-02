import { Loading, Table } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { getAuth } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import LayoutAdmin from "../../components/layout-admin";
import homeroute from "../../public/homeroute.svg";
import { db } from "../../server/firebaseSDK";
import styles from "../../styles/Home.module.css";

export default function Users() {
  const auth = getAuth();
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = query(
      collection(db, "users"),
      orderBy("tanggal", "desc")
    );
    const gettt = await getDocs(querySnapshot);
    snapshot.current = gettt.docs;
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };

  useEffect(() => {
    getDBFromFirestore();
  }, []);

  return (
    <LayoutAdmin>
      <div className="flex p-4 place-items-center gap-2">
        <Image width={20} src={homeroute} alt={"#"} />
        <h1 className="text-xs">Admin / Daftar Pengguna</h1>
      </div>
      {isLoading ? (
        <div className={styles.main}>
          <Loading color={"currentColor"} />
        </div>
      ) : (
        <div className="p-3 lg:p-10">
          <Table>
            <Table.Header>
              <Table.Column>No.</Table.Column>
              <Table.Column>Nama</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>No. HP</Table.Column>
              <Table.Column>Bergabung</Table.Column>
            </Table.Header>
            <Table.Body>
              {snapshot.current.map((e, i) => {
                const users = e.data();
                const email = users.email;
                const nohp = users.nohp;
                const nama = users.nama;
                const tanggal = users.tanggal;
                return (
                  <Table.Row key={i}>
                    <Table.Cell>{i + 1 + "."}</Table.Cell>
                    <Table.Cell>{nama}</Table.Cell>
                    <Table.Cell>{email}</Table.Cell>
                    <Table.Cell>{nohp}</Table.Cell>
                    <Table.Cell>{dayjs(tanggal).fromNow()}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      )}
    </LayoutAdmin>
  );
}
