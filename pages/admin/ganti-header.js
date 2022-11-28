import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import LayoutAdmin from "../../components/layout-admin";
import homeroute from "../../public/homeroute.svg";
import { db } from "../../server/firebaseSDK";
import { motion } from "framer-motion";
export default function UploadHeader() {
  const uid = uuidv4();
  const storage = getStorage();
  const { register, handleSubmit, control } = useForm();
  const [imageUploadHeaader, setImageUploadHeader] = useState();
  const storageRefHeader = ref(storage, `Header/${uid}`);
  const addDataImageHeader = async () => {
    if (imageUploadHeaader == null) return;
    await uploadBytes(storageRefHeader, imageUploadHeaader);
    await addDoc(collection(db, "header"), {
      image: `https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-24e51.appspot.com/o/image%2F${storageRefHeader.name}?alt=media&token=fc601c2a-1e0a-4810-8d2c-1826c3923d36`,
    });
    alert("Data berhasil ditambahkan");
  };
  return (
    <LayoutAdmin>
      <div className="flex p-4 place-items-center gap-2">
        <Image width={20} src={homeroute} alt={"#"} />
        <h1 className="text-xs">Admin / Ganti Header</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <form
          className="flex flex-col w-[500px] m-auto pt-10 px-10"
          onSubmit={handleSubmit(addDataImageHeader)}
        >
          {" "}
          <input
            className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
            type="file"
            {...register("gambarheader")}
            onChange={(event) => {
              setImageUploadHeader(event.target.files[0]);
            }}
          ></input>
          <input
            className="hover:bg-gray-900 w-full mt-2 duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
            type="submit"
          />
        </form>
      </motion.div>
    </LayoutAdmin>
  );
}
