/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Loading, Tooltip } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { db } from "../../server/firebaseSDK";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import dibuat from "../../public/dibuat.svg";
import penulis from "../../public/penulis.svg";
export default function LayouUser() {
  dayjs.locale("id");
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
    setInterval(() => {
      setIsloading(false);
    }, 1000);
  };

  useEffect(() => {
    getDBFromFirestore();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.main}>
        <Loading color={"currentColor"} />
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-5 px-5 gap-3 mt-[84px]">
            {data.map((e, i) => {
              const Data = e.data();
              return (
                <div
                  key={i}
                  className="mx-auto w-full rounded-xl shadow-lg bg-white max-w-sm"
                >
                  <div className="overflow-clip rounded-t-lg rounded-br-3xl shadow-xl">
                    <img
                      className="object-cover h-48 w-full hover:scale-110 duration-1000"
                      src={`https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-24e51.appspot.com/o/image%2F${Data.gambar}?alt=media&token=e6aed1f9-4cad-4985-b739-dcf2fcd3e7de`}
                      alt={"#"}
                    />
                  </div>

                  <div className="px-5 py-8">
                    <div className="justify-between mb-4">
                      <h5 className="text-gray-900 text-xl font-bold">
                        <div className={styles.truncate2}>
                          {Data.judul_berita}
                        </div>
                      </h5>
                      <div className="flex justify-between mt-1">
                        <div className="flex items-center gap-2">
                          <Image src={penulis} width={20} alt={"#"} />
                          <h5 className="text-gray-900 text-xs font-medium ">
                            {Data.penulis_berita}
                          </h5>
                        </div>
                        <div className="flex items-center gap-2">
                          <Image src={dibuat} width={20} alt={"#"} />
                          <Tooltip shadow={true} content={Data.tanggal_berita}>
                            <h5 className="text-gray-900 text-xs font-medium ">
                              {dayjs(Data.tanggal).fromNow()}
                            </h5>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                    <h1 className="text-gray-700  h-20 text-base mb-4">
                      <div className={styles.truncate3}>{Data.isi_berita}</div>
                    </h1>

                    <Link
                      onClick={async () => {
                        const frankDocRef = doc(db, "berita", `${e.id}`);
                        await updateDoc(frankDocRef, {
                          dilihat: Data.dilihat + 1,
                        });
                      }}
                      href={`/berita/${e.id}`}
                      className="shadow-xl hover:bg-slate-900 hover:text-slate-50 hover:duration-1000  text-xs py-2 px-4 rounded-lg"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Layout>
    );
  }
}
