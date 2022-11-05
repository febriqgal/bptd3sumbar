/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import FirebaseApp from "../server/firebaseSDK";
import { db } from "../server/firebaseSDK";
import { addDoc, collection } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const route = useRouter();
  const auth = getAuth(FirebaseApp);
  const daftar = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await addDoc(collection(db, "users"), {
        password: data.password,
        email: data.email,
      });
      alert("Akun berhasil dibuat, silahkan login");

      await signOut(auth);
      route.replace("/login");
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        alert("email sudah dipakai");
      } else if (errorCode === "auth/weak-password") {
        alert("Password terlalu lemah");
      }
    }
  };

  return (
    <div className={styles.main}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto hidden dark:flex"
          src="https://hubdat.dephub.go.id/static/images/logo_white.bae26e1b95c2.png"
          alt="Workflow"
        />
        <img
          className="mx-auto h-12 flex dark:hidden w-auto"
          src="  https://hubdat.dephub.go.id/static/images/logo_sites.cd63aebaf36b.png"
          alt="Workflow"
        />
      </div>
      <div className="mt-5 mx-auto w-full lg:w-96">
        <div className="bg-white mx-5 p-5 shadow-xl rounded-lg">
          <h2 className="text-center mb-8 text-3xl font-extrabold text-slate-900">
            Daftar
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(daftar)}>
            <div>
              <input
                className="mb-2 py-2 px-4 rounded-md bg-white w-full outline outline-1 text-slate-900"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />

              <input
                className="py-2 px-4 rounded-md bg-white w-full outline outline-1 text-slate-900"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="text-center"></div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Daftar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
