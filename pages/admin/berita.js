import { Loading, Table, Tooltip } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { getAuth } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import LayoutAdmin from "../../components/layout-admin";
import homeroute from "../../public/homeroute.svg";
import { db } from "../../server/firebaseSDK";
import styles from "../../styles/Home.module.css";

export default function Users() {
  const [visible, setVisible] = useState(false);
  const auth = getAuth();
  dayjs.locale("id");
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = query(
      collection(db, "berita"),
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
        <h1 className="text-xs">Admin / Kelola Berita</h1>
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
              <Table.Column>Judul</Table.Column>
              <Table.Column>Isi</Table.Column>
              <Table.Column>Tanggal</Table.Column>
              <Table.Column>Tanggal</Table.Column>
            </Table.Header>
            <Table.Body>
              {snapshot.current.map((e, i) => {
                const berita = e.data();
                const isi = berita.isi;
                const judul = berita.judul;
                const tanggal = berita.tanggal;
                const tanggal1 = berita.tanggal_berita;
                return (
                  <Table.Row key={i}>
                    <Table.Cell>{i + 1 + "."}</Table.Cell>
                    <Table.Cell>
                      {`${judul}`.substring(0, 40)}{" "}
                      {`${judul}`.length >= 20 ? "..." : ""}
                    </Table.Cell>
                    <Table.Cell>
                      {`${isi}`.slice(0, 20)}
                      {`${isi}`.length >= 20 ? "..." : ""}
                    </Table.Cell>
                    <Table.Cell>
                      <Tooltip content={tanggal1}>
                        {dayjs(tanggal).fromNow()}{" "}
                      </Tooltip>
                    </Table.Cell>
                    <Table.Cell>
                      <Link
                        href={`/berita/${e.id}`}
                        className="bg-slate-900 text-slate-50 py-1 px-3 rounded-lg text-xs"
                      >
                        Lihat
                      </Link>{" "}
                      |{" "}
                      <Link
                        href={`/berita/${e.id}/edit/${judul}`}
                        className="bg-slate-900 text-slate-50 py-1 px-3 rounded-lg  text-xs"
                      >
                        Edit
                      </Link>
                    </Table.Cell>
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
