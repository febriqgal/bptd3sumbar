import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import LayoutAdmin from "../../components/layout-admin";
import homeroute from "../../../public/homeroute.svg";
import app, { db } from "../../server/firebaseSDK";
export default function Admin() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const { register, handleSubmit, control, reset } = useForm();

  const auth = getAuth();
  const user = auth.currentUser;

  const addDatafromDBFirestore = async (data) => {
    const push = async () => {
      await addDoc(collection(db, "download"), {
        judul: data.judul,
        link: data.link,
        penulis: user.displayName,
        tanggal_Download: dayjs().format("ddd, MMM D, YYYY HH:mm"),
        tanggal: dayjs().format(),
        dilihat: 0,
      });
      reset();
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil menambahkan Download</b>,
      error: <b>Terjadi kesalahan, silahkan coba lagi.</b>,
    });
  };
  return (
    <LayoutAdmin>
      <div className="flex p-4 place-items-center gap-2">
        <Image width={20} src={homeroute} alt={"#"} />
        <h1 className="text-xs">Admin / Tambah Download</h1>
      </div>
      <Toaster />
      <form
        className="flex flex-col w-full md:w-[500px] m-auto pt-10 px-10"
        onSubmit={handleSubmit(addDatafromDBFirestore)}
      >
        <textarea
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan judul Download"
          control={control}
          {...register("judul", { required: true })}
        />

        <textarea
          rows={"6"}
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan link download"
          control={control}
          {...register("link", { required: true })}
        />
        <button
          className="hover:bg-gray-900 w-full duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
          type="submit"
        >
          Kirim
        </button>
      </form>
    </LayoutAdmin>
  );
}
