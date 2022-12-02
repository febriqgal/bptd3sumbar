/* eslint-disable @next/next/no-img-element */
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-phone-number-input/style.css";
import FirebaseApp, { db } from "../../server/firebaseSDK";
import styles from "../../styles/Home.module.css";
import dayjs from "dayjs";
import "dayjs/locale/id";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const titlePage = "Daftar";
  const [nohp, setnohp] = useState();
  const route = useRouter();
  const auth = getAuth(FirebaseApp);
  auth.currentUser;
  const daftar = async (data) => {
    const push = async () => {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, "users", `${data.email}`), {
        uid: auth.currentUser.uid,
        nama: data.nama,
        email: data.email,
        nohp: nohp,
        tanggal: dayjs().format(),
      });
      await updateProfile(auth.currentUser, { displayName: data.nama });
      await signOut(auth);
      setTimeout(async () => {
        route.replace("/login");
      }, 2000);
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil, silahkan login.</b>,
      error: (error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          toast.error("email sudah dipakai");
        } else if (errorCode === "auth/weak-password") {
          toast.error("Password terlalu lemah");
        } else {
          toast.error("Terjadi kesalahan, silahkan diulang kembali.");
        }
      },
    });
  };

  return (
    <section>
      <Head>
        <title>{titlePage} | BPTD III Sumbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.main}>
        <Toaster />

        <div className="mx-auto w-full lg:w-96">
          <div className="bg-white mx-5 p-5 shadow-xl rounded-lg">
            <h2 className="text-center mb-8 text-3xl font-extrabold text-slate-900">
              Daftar
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit(daftar)}>
              <div>
                <input
                  className="mb-2 py-2 px-4 rounded-lg w-full shadow-xl text-slate-900"
                  type={"text"}
                  maxLength={16}
                  placeholder="Nama"
                  {...register("nama", { required: true })}
                />

                <input
                  className="mb-2 py-2 px-4 rounded-lg w-full shadow-xl text-slate-900"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />

                <input
                  className="py-2 px-4 rounded-lg w-full shadow-xl text-slate-900"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />

                <PhoneInput
                  country={"id"}
                  value={nohp}
                  onlyCountries={["id"]}
                  containerStyle={{ marginTop: 18, borderRadius: 8 }}
                  inputStyle={{ width: "100%" }}
                  countryCodeEditable={false}
                  onChange={(phone) => setnohp(phone)}
                />
              </div>
              <div className="text-center"></div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2D3082] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
