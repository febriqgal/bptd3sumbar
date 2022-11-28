/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import withProtected from "../../hoc/withProtected";
import editprofile from "../../public/editprofile.svg";
import home from "../../public/home.svg";
import tambahberita from "../../public/tambahberita.svg";
import users from "../../public/users.svg";
import CardProfile from "./card-profile";
import keluar from "../../public/keluar.svg";

const LayoutAdmin = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigation = [
    { name: "Beranda", icon: home, href: "/admin" },
    { name: "Tambah Berita", icon: tambahberita, href: "/admin/tambah-berita" },
    { name: "Ganti Header", icon: editprofile, href: "/admin/upload-header" },
    { name: "List user", icon: users, href: "/admin/users" },
    { name: "Keluar", icon: keluar, href: "/" },
  ];
  return (
    <section>
      <Toaster />

      {/* Mobile */}
      <div className="md:hidden w-full py-2 m-auto items-center bottom-1 fixed">
        <div className="shadow-xl mx-5 p-5 flex justify-between rounded-lg">
          {navigation.map((e, i) => (
            <Link className="flex justify-around" key={i} href={e.href}>
              <Image src={e.icon} width={30} alt={"#"} />
            </Link>
          ))}
        </div>
      </div>
      {/* Destop */}
      <div className="hidden outline-1 border-x-2 md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 shadow-xl">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto ">
            <Link
              href={"/"}
              className="pt-4 pb-8 text-center font-bold text-xl"
            >
              Admin
            </Link>
            <hr className="pb-8 mx-4" />
            <nav className="flex-1 text-sm flex flex-col px-2 space-y-1 ">
              {navigation.map((e, i) => (
                <div key={i} div className="flex gap-2 mx-2">
                  <Image src={e.icon} alt={e.name} />
                  <Link
                    className="hover:bg-slate-900 hover:text-white py-1 flex items-center px-2 rounded-lg"
                    href={e.href}
                  >
                    {e.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <CardProfile />
        </div>
      </div>
      <div className="pl-0 md:pl-64 flex flex-col flex-1">{children}</div>
    </section>
  );
};

export default withProtected(LayoutAdmin);
