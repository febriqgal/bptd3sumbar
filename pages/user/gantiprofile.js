import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import app from "../../server/firebaseSDK";
import styles from "../../styles/Home.module.css";
import LayoutUser from "../../components/layout-user";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Admin() {
  const { register, handleSubmit, control } = useForm();

  const auth = getAuth();
  const user = auth.currentUser;
  const [showAlert, setShowAlert] = useState(false);
  const [imageUpload, setImageUpload] = useState();
  const route = useRouter();
  const storage = getStorage(app);
  const storageRef = ref(storage, `profile/${user.uid}`);
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const addDatafromDBFirestore = async (data) => {
    if (imageUpload == null) return;
    setShowAlert(true);
    await uploadBytes(storageRef, imageUpload);

    try {
      await updateProfile(auth.currentUser, {
        photoURL: `https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-24e51.appspot.com/o/profile%2F${user.uid}?alt=media&token=2ed1037c-2a23-462f-ada1-262a451fcdd0`,
      });
      setShowAlert(false);
      alert("Berhasil");
    } catch (error) {
      alert(error);
    }
  };
  /* This example requires Tailwind CSS v2.0+ */

  return (
    <LayoutUser>
      <Head>
        <title>Ganti Profile - User</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.main}>
        {showAlert ? (
          <div className="absolute top-8 rounded-md bg-green-50">
            <div className="flex">
              <div className="flex-shrink-0"></div>
              <div className="ml-3">
                {!showAlert ? (
                  <h1>Berhasil</h1>
                ) : (
                  <Player
                    className="h-[100px]"
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_b88nh30c.json"
                    alt="2d"
                  />
                )}
              </div>
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5"></div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(addDatafromDBFirestore)}
        >
          <div>
            <label className="mr-2">Pilih Foto* :</label>
            <input
              className="mb-2 shadow-lg p-2"
              type="file"
              {...register("photoURL")}
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
          </div>

          <input
            className="hover:bg-gray-900 duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </LayoutUser>
  );
}
