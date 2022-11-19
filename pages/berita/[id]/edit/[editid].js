/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Player } from "@lottiefiles/react-lottie-player";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { db } from "../../../../server/firebaseSDK";
import styles from "../../../../styles/Home.module.css";
export default function detail() {
  const { register, handleSubmit, control, reset } = useForm();
  const [isLoading, setIsloading] = useState(true);
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
  const updateDataa = async (data) => {
    const push = async () => {
      const docRef = doc(db, "berita", `${id}`);
      await updateDoc(docRef, {
        judul_berita: data.judul,
        isi_berita: data.isi,
      });
    };
    toast.promise(push(), {
      loading: "Menyimpan...",
      success: <b>Berhasil edit berita</b>,
      error: <b>Terjadi kesalahan, silahkan coba lagi!</b>,
    });
    setTimeout(() => {
      route.replace("/");
    }, 2000);
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
      <div className={styles.main}>
        <Toaster />
        <div className=" w-[700px]">
          <form
            className="flex flex-col text-slate-900"
            onSubmit={handleSubmit(updateDataa)}
          >
            <textarea
              className="resize-none mb-2 py-1 px-3 rounded-sm"
              placeholder="Masukan judul*"
              control={control}
              defaultValue={post ? post.judul_berita : ""}
              {...register("judul", { required: true })}
            />
            <textarea
              rows={"10"}
              className="mb-2 py-1 px-3 rounded-sm line-h"
              placeholder="Masukan isi*"
              control={control}
              defaultValue={post ? post.isi_berita : ""}
              {...register("isi")}
            />{" "}
            <input
              className="bg-gray-800 mb-2 py-1 px-3 rounded-sm hover:cursor-pointer text-slate-50"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
