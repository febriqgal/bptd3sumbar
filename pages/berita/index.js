/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Player } from "@lottiefiles/react-lottie-player";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { db } from "../../server/firebaseSDK";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

export default function Kontak() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "berita"));
    snapshot.current = querySnapshot.docs;
    setIsloading(false);
  };
  useEffect(() => {
    getDBFromFirestore();
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
        <Head>
          <title>Berita - BPTD III SUMBAR</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <div className={styles.main}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:py-8 px-10 gap-3 mt-10">
            {data.map((item) => {
              const itemm = item.data();
              return (
                <div
                  key={itemm.id}
                  className="rounded-xl shadow-lg bg-white max-w-sm"
                >
                  <Link href={"/"}>
                    <a>
                      <img
                        className="rounded-t-lg"
                        src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="p-10">
                    <div className="justify-between mb-4">
                      <h5 className="text-gray-900 text-xl font-bold">
                        <div className={styles.truncate}>
                          {itemm.judul_berita}
                        </div>
                      </h5>
                      <div className="flex justify-between">
                        <h5 className="text-gray-900 text-xs font-medium ">
                          {itemm.penulis_berita}
                        </h5>
                        <h5
                          title={itemm.tanggal_berita}
                          className="text-gray-900 text-xs font-medium "
                        >
                          {dayjs(itemm.tanggal).fromNow()}
                        </h5>
                      </div>
                    </div>
                    <p className="text-gray-700  h-20 text-base mb-4">
                      <div className={styles.truncate}>{itemm.isi_berita}</div>
                    </p>

                    <button
                      type="button"
                      className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Button
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}
