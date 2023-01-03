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
import { useRouter } from "next/router";
export default function Users() {
  const auth = getAuth();
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const route = useRouter();
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = query(
      collection(db, "pengaduan"),
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
        <h1 className="text-xs">Admin / Kelola Pengaduan</h1>
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
              <Table.Column>Penulis</Table.Column>
              <Table.Column>Judul</Table.Column>
              <Table.Column>Isi</Table.Column>
              <Table.Column>Tanggal</Table.Column>
              <Table.Column>Kelola</Table.Column>
            </Table.Header>
            <Table.Body>
              {snapshot.current.map((e, i) => {
                const pengaduan = e.data();
                const isi = pengaduan.isi;
                const judul = pengaduan.judul;
                const tanggal = pengaduan.tanggal;
                return (
                  <Table.Row key={i}>
                    <Table.Cell>{i + 1 + "."}</Table.Cell>
                    <Table.Cell>{`${pengaduan.penulis}`}</Table.Cell>
                    <Table.Cell>{`${judul}`.substring(0, 20)}</Table.Cell>
                    <Table.Cell>{`${isi}`.slice(0, 20)}</Table.Cell>
                    <Table.Cell>{dayjs(tanggal).fromNow()}</Table.Cell>
                    <Table.Cell>
                      <button
                        onClick={() => {
                          route.push(`/pengaduan/${e.id}`);
                        }}
                        className="bg-slate-900 text-slate-50 py-1 px-3 rounded-lg text-xs"
                      >
                        Lihat
                      </button>{" "}
                      |{" "}
                      <button className="bg-slate-900 text-slate-50 py-1 px-3 rounded-lg  text-xs">
                        Hapus
                      </button>
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
