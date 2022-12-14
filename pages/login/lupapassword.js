/* eslint-disable @next/next/no-img-element */
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

export default function Lupapassword() {
  const auth = getAuth();
  const titlePage = "Lupa Password"
  const { register, handleSubmit } = useForm();
  const lupapassword = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      alert("berhasil");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Email yang dimasukkan tidak terdaftar");
      }
    }
  };
  return (
    <div className={styles.main}>
      <Head>
        <title>{titlePage} | BPTD III Sumbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
     
      <div className="mx-auto w-full lg:w-96">
        <div className="bg-white mx-5 p-5 shadow-xl rounded-lg">
          <h2 className="text-center mb-8 text-3xl font-extrabold text-slate-900">
            Reset Password
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(lupapassword)}>
            <input
              className="py-2 px-4 rounded-md bg-white w-full shadow-xl text-slate-900"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2D3082]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
