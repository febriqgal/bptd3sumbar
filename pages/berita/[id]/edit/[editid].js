/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Player } from "@lottiefiles/react-lottie-player";
import { Loading } from "@nextui-org/react";
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
  const { register, handleSubmit, control } = useForm();
  const [isLoading, setIsloading] = useState(true);
  const route = useRouter();
  const { id } = route.query;
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
        <Loading color={"currentColor"} />
      </div>
    );
  } else {
    const post = snapshot.current;

    return (
      <div className={styles.main}>
        <Toaster />
        <form
          className="flex flex-col text-slate-900 w-full px-5 sm:w-[500px]"
          onSubmit={handleSubmit(updateDataa)}
        >
          <label className="text-center mb-2">
            Judul
            <textarea
              className="mb-2  py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
              placeholder="Masukan judul*"
              control={control}
              defaultValue={post ? post.judul_berita : ""}
              {...register("judul", { required: true })}
            />
          </label>
          <label className="text-center mb-2">
            Isi Berita
            <textarea
              rows={"10"}
              className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
              placeholder="Masukan isi*"
              control={control}
              defaultValue={post ? post.isi_berita : ""}
              {...register("isi")}
            />
          </label>
          <input
            className="hover:bg-gray-900 w-full duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    );
  }
}
