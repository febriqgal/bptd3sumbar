/* eslint-disable @next/next/no-img-element */
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import protectLogin from "../../protect/protect-login";
import app from "../../server/firebaseSDK";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useUser } from "../../context/user";

const GantiProfile = () => {
  const route = useRouter();
  const [isDisable, setDisable] = useState(false);
  const { register, handleSubmit, control } = useForm();
  const auth = getAuth();
  const user = auth.currentUser;
  const [imageUpload, setImageUpload] = useState();
  const storage = getStorage(app);
  const storageRef = ref(storage, `profile/${user.uid}`);
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const addDatafromDBFirestore = async () => {
    const push = async () => {
      if (imageUpload == null) return;
      await uploadBytes(storageRef, imageUpload);
      updateProfile(auth.currentUser, {
        photoURL: `https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-5025f.appspot.com/o/profile%2F${user.uid}?alt=media&token=0f5e0b60-c7d6-4bc3-a202-d8bc2916e04e`,
      });
      setDisable(true);
      setTimeout(() => {
        route.replace("/");
      }, 2000);
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil diganti</b>,
      error: <b>Terjadi kesalahan, silahkan coba lagi.</b>,
    });
  };
  return (
    <>
      <Head>
        <title>Ganti Foto Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Toaster />
      <div className={styles.main}>
        <div className="h-[100px] w-[100px] overflow-clip rounded-full mb-6">
          <img
            className="h-full w-full object-cover"
            alt="#"
            src={user.photoURL}
          />
        </div>
        <form
          className="flex flex-col px-3"
          onSubmit={handleSubmit(addDatafromDBFirestore)}
        >
          <div>
            <label className="mr-2">Pilih Foto:</label>
            <input
              className="mb-2 shadow-lg p-2"
              type="file"
              {...register("photoURL", { disabled: isDisable, required: true })}
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
          </div>
          <button
            className="hover:bg-gray-900 duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
            type="submit"
            disabled={isDisable}
          >Kirim</button>
        </form>
      </div>
    </>
  );
};
export default protectLogin(GantiProfile);
