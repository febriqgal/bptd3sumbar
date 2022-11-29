/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { Loading } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Layout from "../../../components/Layout";
import { useUser } from "../../../context/user";
import Edit from "../../../public/edit.png";
import Sampah from "../../../public/sampah.png";
import app, { db } from "../../../server/firebaseSDK";
import styles from "../../../styles/Home.module.css";
import dilihat from "../../../public/dilihat.svg";
import dibuat from "../../../public/dibuat.svg";
import penulis from "../../../public/penulis.svg";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
export default function detail() {
  const [isLoading, setIsloading] = useState(true);
  const [open, setOpen] = useState(false);
  const route = useRouter();
  const { id } = route.query;
  const users = useUser();
  const { email } = users;
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const snapshot = useRef(null);
  dayjs.locale("id");
  dayjs.extend(relativeTime);

  const dataBerita = async () => {
    const docRef = doc(db, "berita", `${id}`);
    const docSnap = await getDoc(docRef);
    snapshot.current = docSnap.data();
    setInterval(() => {
      setIsloading(false);
    }, 1000);
  };
  useEffect(() => {
    dataBerita();
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
        <Toaster />
        <Head>
          <title>{post.judul_berita}</title>
          <meta name="description" content={post.isi_berita} />
          <link rel="icon" href="/logo.png" />
        </Head>

        <div className="bg-white overflow-hidden rounded-b-xl mx-0 lg:mx-5 mb-5 mt-[84px]">
          <div className="relative max-w-7xl mx-auto py-5 px-5 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div className="flex flex-col rounded-lg shadow-xl p-4 lg:flex-row gap-1 lg:gap-0 lg:justify-evenly">
                <div className="flex  items-center gap-2">
                  <Image src={penulis} width={20} alt={"#"} />
                  <h2 className="text-xs">{post.penulis_berita}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={dilihat} width={20} alt={"#"} />
                  <h2 className="text-xs">{`Dilihat ${post.dilihat} kali`}</h2>
                </div>

                <div className="flex items-center gap-2">
                  <Image src={dibuat} width={20} alt={"#"} />
                  <h3 title={post.tanggal_berita} className="uppercase text-xs">
                    {`${dayjs(post.tanggal).fromNow()}`}
                  </h3>
                </div>
              </div>
              {email === "febriqgal@gmail.com" ? (
                <div className="bottom-5 right-5 md:bottom-10  md:right-10 z-50  fixed flex flex-col items-start ">
                  {/* modal hapus */}
                  <Modal
                    closeButton
                    blur
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                  >
                    <Modal.Header>
                      <h1>Pemberitahuan</h1>
                    </Modal.Header>
                    <Modal.Body>
                      <h1 className="text-center m-auto">Yakin Menghapus?</h1>
                      <button
                        onClick={async () => {
                          try {
                            const docRef = doc(db, "berita", `${id}`);
                            const storage = getStorage(app);
                            const desertRef = ref(
                              storage,
                              `image/${post.gambar}`
                            );
                            await deleteObject(desertRef);
                            await deleteDoc(docRef);

                            route.replace("/");
                            toast.success("Berhasil Menghapus Berita", {
                              icon: "🎉",
                            });
                          } catch (error) {
                            toast.error("Gagal Menghapus berita");
                          }
                        }}
                      >
                        Hapus
                      </button>
                    </Modal.Body>
                  </Modal>
                  <Link href={`${id}/edit/${post.judul_berita}`}>
                    <button className=" bg-slate-50  px-2 pt-2 rounded-full">
                      <Image
                        color="white"
                        src={Edit}
                        alt={""}
                        width={35}
                        height={35}
                      />
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      handler();
                    }}
                    className="bg-slate-50 px-2 pt-2 rounded-full mt-2"
                  >
                    <Image
                      color="white"
                      src={Sampah}
                      alt={""}
                      width={35}
                      height={35}
                    />
                  </button>
                </div>
              ) : (
                <></>
              )}
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
                        src={`https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-24e51.appspot.com/o/image%2F${post.gambar}?alt=media&token=e6aed1f9-4cad-4985-b739-dcf2fcd3e7de`}
                        alt={post.judul_berita}
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
                    {post.judul_berita}
                  </p>
                </div>
                <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <h1 className="text-justify">{post.isi_berita}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
