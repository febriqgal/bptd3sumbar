/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { Player } from "@lottiefiles/react-lottie-player";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Layout from "../../../components/Layout";
import Edit from "../../../public/edit.png";
import Sampah from "../../../public/sampah.png";
import app, { db } from "../../../server/firebaseSDK";
import styles from "../../../styles/Home.module.css";
import { toast, Toaster } from "react-hot-toast";
export default function detail() {
  const [isLoading, setIsloading] = useState(true);
  const [open, setOpen] = useState(false);
  const route = useRouter();
  const { id } = route.query;
  const { editid } = route.query;
  const snapshot = useRef(null);
  dayjs.locale("id");
  dayjs.extend(relativeTime);

  const dataBerita = async () => {
    const docRef = doc(db, "berita", `${id}`);
    const docSnap = await getDoc(docRef);

    snapshot.current = docSnap.data();
    setIsloading(false);
  };
  useEffect(() => {
    dataBerita();
  });
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
    return (
      <Layout>
        <Toaster />
        <div className="bg-white overflow-hidden rounded-b-xl">
          <div className="relative max-w-7xl mx-auto py-5 px-5 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  {post.penulis_berita}
                </h2>
                <h3
                  title={post.tanggal_berita}
                  className="tracking-tight text-gray-900 "
                >
                  {dayjs(post.tanggal).fromNow()}
                </h3>
                <div className="bottom-5 right-5 md:bottom-10  md:right-10 z-50  fixed flex flex-col items-start ">
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
                  {/* modal hapus */}
                  <Transition.Root show={open} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed z-[999] inset-0 overflow-y-auto"
                      onClose={() => {}}
                    >
                      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0 bg-slate-800 bg-opacity-50 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                          className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <div className="inline-block align-bottom bg-white w-[300px] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>
                              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <CheckIcon
                                  className="h-6 w-6 text-green-600"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="mt-3 text-center sm:mt-5">
                                <Dialog.Title
                                  as="h3"
                                  className="text-lg leading-6 font-medium text-gray-900"
                                >
                                  Yakin hapus?
                                </Dialog.Title>
                              </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                              <button
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 outline-1 outline outline-indigo-600 font-medium text-indigo-700 hover:text-slate-50 hover:bg-indigo-700 text-sm"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                Batal
                              </button>
                            </div>
                            <div className="mt-1">
                              <button
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 font-medium text-white hover:bg-indigo-700 focus:outline-none  focus:ring-indigo-500 text-sm"
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
                                    toast.error("Gagal Menghapus berita");
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
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition.Root>

                  <button
                    onClick={() => {
                      setOpen(true);
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
