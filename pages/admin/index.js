import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { getDatabase, ref, set } from "firebase/database";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { uid } from "uid";
import Layout from "../../components/Layout";
import FirebaseApp from "../../server/firebaseSDK";
import styles from "../../styles/Home.module.css";

export default function Admin() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const route = useRouter();
  const docID = uid(32);
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    const db = getDatabase(FirebaseApp);
    set(ref(db, "berita/" + docID), {
      id: docID,
      judul: data.judul,
      isi: data.isi,
      penulis: data.penulis,
      tanggal: dayjs().format(),
    });
    alert("Data berhasil ditambahkan");
    route.push("kontak");
  };
  
  return (
    <Layout pageTittle={"Admin - "}>
      <div className={styles.main}>
     
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-2 py-1 px-3 rounded-sm"
            placeholder="Masukan judul"
            control={control}
            {...register("judul", { required: true })}
          />
          <input
            className="mb-2 py-1 px-3 rounded-sm"
            placeholder="Masukan isi"
            control={control}
            {...register("isi")}
          />{" "}
          <input
            className="mb-2 py-1 px-3 rounded-sm"
            placeholder="Masukan penulis"
            control={control}
            {...register("penulis")}
          />
          <input
            className="bg-gray-800 mb-2 py-1 px-3 rounded-sm hover:cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </Layout>
  );
}
