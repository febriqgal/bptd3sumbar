/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Player } from "@lottiefiles/react-lottie-player";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, Fragment, useRef, useState } from "react";
import Layout from "../components/Layout";
import { db } from "../server/firebaseSDK";
import styles from "../styles/Home.module.css";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

export default function LayouUser() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const [open, setOpen] = useState(false);
  const getPengaduan = async () => {
    const querySnapshot = query(collection(db, "pengaduan"));
    const gettt = await getDocs(querySnapshot);
    snapshot.current = gettt.docs;
    setIsloading(false);
  };

  useEffect(() => {
    getPengaduan();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.main}>
        <Player
          className="h-[100px]"
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_b88nh30c.json"
          alt="2d"
        />
      </div>
    );
  } else {
    const post = snapshot.current;
    const data = Object.values(post);
    return (
      <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5 px-5 gap-3 ">
          {data.map((item) => {
            const items = item.data();
            const isi = items.isi_pengaduan;
            const judul = items.judul_pengaduan;
            const penulis = items.penulis_pengaduan;
            return (
              <div
                key={item.id}
                className="mx-auto w-full rounded-xl shadow-lg bg-white max-w-sm"
              >
               
                <div className="px-5 py-8">
                  <div className="justify-between mb-4">
                    <h5 className="text-gray-900 text-xl font-bold">
                      <div className={styles.truncate2}>{judul}</div>
                    </h5>

                    <h5
                      title={items.tanggal_berita}
                      className="text-gray-900 text-xs font-medium "
                    >
                      {dayjs(items.tanggal).fromNow()}
                    </h5>
                  </div>
                  <h1 className="text-gray-700  h-20 text-base mb-4">
                    <div className={styles.truncate3}>{isi}</div>
                  </h1>

                  <button
                    onClick={() => {
                      setOpen(true);
                      console.log(isi)
                    }}
                    className="inline-block px-6 py-2.5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-800 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}
