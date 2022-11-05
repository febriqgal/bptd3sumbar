import React from "react";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../server/firebaseSDK";
import LayoutAdmin from "../../components/LayoutAdmin";
import Head from "next/head";
export default function UploadHeader() {
  const uid = uuidv4();
  const storage = getStorage();
  const { register, handleSubmit, control } = useForm();
  const [imageUploadHeaader, setImageUploadHeader] = useState();
  const storageRefHeader = ref(storage, `Header/${uid}`);
  const addDataImageHeader = async () => {
    if (imageUploadHeaader == null) return;
    await uploadBytes(storageRefHeader, imageUploadHeaader).then((snapshot) => {
     
    });
    await addDoc(collection(db, "header"), {
      image: `https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-24e51.appspot.com/o/image%2F${storageRefHeader.name}?alt=media&token=fc601c2a-1e0a-4810-8d2c-1826c3923d36`,
    });
    alert("Data berhasil ditambahkan");
  };
  return (
    <LayoutAdmin>
      <Head>
        <title>Ganti Header - Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.main}>
        <form onSubmit={handleSubmit(addDataImageHeader)}>
          <input
            type="file"
            {...register("gambarheader")}
            onChange={(event) => {
              setImageUploadHeader(event.target.files[0]);
            }}
          ></input>
          <input
            className="bg-gray-800 mb-2 py-1 px-3 rounded-sm hover:cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </LayoutAdmin>
  );
}
