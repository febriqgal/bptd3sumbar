import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import LayoutAdmin from "../../components/layout-admin";
import homeroute from "../../../public/homeroute.svg";
import { db } from "../../server/firebaseSDK";
export default function Admin() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const { register, handleSubmit, control, reset } = useForm();
  const addDatafromDBFirestore = async (data) => {
    const push = async () => {
      await addDoc(collection(db, "download"), {
        dokumen: data.dokumen,
        url: data.url,
        didownload: 0,
        tanggal_download: dayjs().format("ddd, MMM D, YYYY HH:mm"),
        tanggal: dayjs().format(),
      });
      reset();
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil menambahkan download</b>,
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
        className={`flex flex-col w-full md:w-[500px] m-auto pt-10 px-10`}
        onSubmit={handleSubmit(addDatafromDBFirestore)}
      >
        <input
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan Nama dokumen"
          control={control}
          {...register("dokumen", { required: true })}
        />

        <input
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan Link Dokumen"
          control={control}
          {...register("url", { required: true })}
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
