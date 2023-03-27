/* eslint-disable @next/next/no-img-element */
import { Loading, Tooltip } from "@nextui-org/react";
import app from "../../../server/firebaseSDK";
import Head from "next/head";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import tanggal from "../../../../public/dibuat.svg";
import penulis from "../../../../public/penulis.svg";
import { db } from "../../../server/firebaseSDK";
import styles from "../../../styles/Home.module.css";
import Layout from "../../../components/layout";
import hapus from "../../../../public/hapus.svg";
import { auth } from "../../../server/firebaseSDK";
export default function DetailPengaduan() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const route = useRouter();
  const user = auth.currentUser;
  const [isLoading, setIsloading] = useState(true);
  const { id } = route.query;
  const snapshot = useRef(null);
  const getDataPengaduan = async () => {
    const docRef = doc(db, "pengaduan", `${id}`);
    const docSnap = await getDoc(docRef);
    snapshot.current = docSnap.data();
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };
  useEffect(() => {
    getDataPengaduan();
  });
  if (isLoading) {
    return (
      <div className={styles.main}>
        <Loading color={"currentColor"} />
      </div>
    );
  } else {
    const post = snapshot.current;

    return (
      <Layout>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Head>
              <title>{post.judul}</title>
              <meta name="description" content={post.isi} />
              <link rel="icon" href="/logo.png" />
            </Head>
            <div className="bg-white overflow-hidden rounded-b-xl mx-0 lg:mx-5 mb-5 mt-[84px]">
              <div className="relative max-w-7xl mx-auto py-5 px-5 sm:px-6 lg:px-8">
                <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                  <div className="flex flex-col rounded-lg shadow-xl p-4 lg:flex-row gap-1 lg:gap-0 lg:justify-evenly">
                    <div className="flex  items-center gap-2">
                      <Image src={penulis} width={20} alt={"#"} />
                      <h2 className="text-xs">{post.penulis}</h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <Image src={tanggal} width={20} alt={"#"} />
                      <h2 className="text-xs">
                        <Tooltip content={post.tanggal_pengaduan}>
                          {`${dayjs(post.tanggal).fromNow()}`}
                        </Tooltip>
                      </h2>
                    </div>
                    {user.email === "benisman1990@gmail.com" ? (
                      <Tooltip content="Hapus">
                        <Image
                          className="hover:cursor-pointer"
                          onClick={async () => {
                            const docRef = doc(db, "pengaduan", `${id}`);
                            const storage = getStorage(app);
                            const desertRef = ref(
                              storage,
                              `image/pengaduan/${post.gambar}`
                            );
                            await deleteObject(desertRef);
                            await deleteDoc(docRef);
                            route.back();
                          }}
                          src={hapus}
                          width={20}
                          alt={"#"}
                        />
                      </Tooltip>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="relative lg:row-start-1 lg:col-start-2">
                    <svg
                      className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-gray-200"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                      />
                    </svg>
                    <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                      <figure>
                        <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                          <img
                            className="rounded-lg shadow-lg object-cover object-center hover:scale-105 duration-1000"
                            src={`https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-8e26d.appspot.com/o/image%2Fpengaduan%2F${post.gambar}?alt=media&token=2ea93f86-bff0-4dd8-b4d3-f00d1740c03b`}
                            alt={post.judul}
                            width={1184}
                            height={1376}
                          />
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-0">
                    <div className="text-base max-w-prose mx-auto lg:max-w-none">
                      <p className="text-xl font-bold text-gray-500">
                        {post.judul}
                      </p>
                    </div>
                    <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                      <h1 className="text-justify">{post.isi}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    );
  }
}
