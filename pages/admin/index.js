import LayoutAdmin from "../../components/layout-admin";
import Image from "next/image";
import homeroute from "../../public/homeroute.svg";
import { Loading } from "@nextui-org/react";
import berita from "../../public/berita.svg";
import pengaduan from "../../public/pengaduan.svg";
import users from "../../public/users.svg";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../../server/firebaseSDK";

export default function Index() {
  const [isLoading, setIsloading] = useState(true);
  const Beritasnapshot = useRef(null);
  const Pengaduansnapshot = useRef(null);
  const Userssnapshot = useRef(null);
  const getDataBerita = async () => {
    const querySnapshot = query(
      collection(db, "berita"),
      orderBy("tanggal", "desc")
    );
    const gettt = await getDocs(querySnapshot);
    Beritasnapshot.current = gettt.docs;
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };
  const getDataPengaduan = async () => {
    const querySnapshot = query(
      collection(db, "pengaduan"),
      orderBy("tanggal", "desc")
    );
    const gettt = await getDocs(querySnapshot);
    Pengaduansnapshot.current = gettt.docs;
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };
  const getDataUsers = async () => {
    const querySnapshot = query(
      collection(db, "users"),
      orderBy("tanggal", "desc")
    );
    const gettt = await getDocs(querySnapshot);
    Userssnapshot.current = gettt.docs;
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };

  useEffect(() => {
    getDataBerita();
    getDataPengaduan();
    getDataUsers();
  }, []);
  return (
    <LayoutAdmin>
      <div className="flex p-4 place-items-center gap-2">
        <Image width={20} src={homeroute} alt={"#"} />
        <h1 className="text-xs">Admin</h1>
      </div>
      <div className="flex w-full justify-evenly py-5 lg:py-7 rounded-lg shadow-xl">
        <div className="flex items-center gap-2">
          <Image src={berita} width={40} alt="#" />
          <div className="text-center text-sm md:text-base">
            <h1 className="font-semibold">
              {isLoading ? (
                <Loading color={"currentColor"} type="points" size="sm" />
              ) : (
                Object.values(Beritasnapshot.current).length
              )}
            </h1>
            <h1 className="font-medium text-sm">Berita</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src={pengaduan} width={40} alt="#" />
          <div className="text-center text-sm md:text-base">
            <h1 className="font-semibold">
              {isLoading ? (
                <Loading color={"currentColor"} type="points" size="sm" />
              ) : (
                Object.values(Pengaduansnapshot.current).length
              )}
            </h1>
            <h1 className="font-medium text-sm">Pengaduan</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src={users} width={40} alt="#" />
          <div className="text-center text-sm md:text-base">
            <h1 className="font-semibold">
              {isLoading ? (
                <Loading color={"currentColor"} type="points" size="sm" />
              ) : (
                Object.values(Userssnapshot.current).length
              )}
            </h1>
            <h1 className="font-medium text-sm">User</h1>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
