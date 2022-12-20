/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";
import "animate.css";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menu from "../../public/menu.svg";
import top from "../../public/top.svg";
import Dropdownprofile from "./profile";
import pencarian from "../../public/pencarian.svg";
import { Tooltip } from "@nextui-org/react";
export default function Navbar() {
  const user = getAuth().currentUser;
  const route = useRouter();
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(10);
  const [boxShadow, setBoxShadow] = useState(0);
  let backgroundTransparacyVar = clientWindowHeight / 600;
  const navigation = [
    { title: "Beranda", href: "/" },
    { title: "Berita", href: "/berita" },
    { title: "Pengaduan", href: "/pengaduan" },
    { title: "Sejarah", href: "/sejarah" },
    { title: "Struktur Organisasi", href: "/organisasi" },
    { title: "Tugas dan Fungsi", href: "/tugas-dan-fungsi" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    if (backgroundTransparacyVar < 1) {
      let paddingVar = 10 + backgroundTransparacyVar * 5;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [backgroundTransparacyVar, clientWindowHeight]);

  return (
    <section>
      {backgroundTransparacyVar > 0.5 ? (
        <div className="animate__animated animate__backInDown fixed bottom-5 right-5 z-[99] bg-slate-900 rounded-full shadow-2xl p-2">
          <Link href={"#"}>
            <Image title="kembali keatas" src={top} alt={"#"} />
          </Link>
        </div>
      ) : (
        <> </>
      )}

      <Disclosure
        as="nav"
        className="backdrop-blur-sm fixed shadow-gray-200 dark:shadow shadow-md z-[99] w-full top-0"
        style={{
          padding: `${padding}px 0px`,
          backgroundColor: `rgba(255, 255, 255, ${backgroundTransparacy})`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        {({ open }) => (
          <div className="mx-auto px-5">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600">
                  {open ? (
                    <Image src={Menu} alt={"#"} />
                  ) : (
                    <Image src={Menu} alt={"#"} />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1  items-center justify-self-center justify-center lg:justify-between">
                <div className="flex justify-center items-center">
                  <Link title="Beranda BPTD III Sumbar" href={"/"}>
                    <div className="hover:cursor-pointer flex flex-shrink-0 items-center">
                      <img
                        className="block h-12 lg:hidden"
                        src="https://hubdat.dephub.go.id/static/images/logo_sites.cd63aebaf36b.png"
                        alt="BPTD Wilayah III"
                      />
                      <img
                        className="hidden h-12 lg:block"
                        src="https://hubdat.dephub.go.id/static/images/logo_sites.cd63aebaf36b.png"
                        alt="BPTD Wilayah III"
                      />
                    </div>
                  </Link>
                  <div className="ml-5 m-auto hidden lg:flex space-x-4 justify-center place-items-center">
                    {navigation.map((e, i) => (
                      <Link
                        key={i}
                        href={e.href}
                        className="hover:text-slate-50 hover:duration-500  h-10  text-center m-auto hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-900"
                      >
                        {e.title}
                      </Link>
                    ))}
                    <h1>|</h1>
                    <Tooltip placement="bottom" content="Pencarian">
                      <div className="justify-center flex px-5 rounded-md">
                        <Image
                          className="hover:cursor-pointer"
                          onClick={() => {
                            route.push("pencarian");
                          }}
                          src={pencarian}
                          alt="#"
                        />
                      </div>
                    </Tooltip>
                  </div>
                </div>
                <div className="my-auto right-0 top-4 hidden sm:ml-6 lg:block">
                  {/* Profile dropdown */}
                  <div className="relative ml-3">
                    {user ? (
                      <Dropdownprofile />
                    ) : (
                      <button
                        onClick={async () => {
                          route.replace("/login");
                        }}
                        className="hover:bg-slate-900 py-2 hover:text-white px-5 font-medium text-slate-900 rounded-lg"
                      >
                        Login
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="lg:hidden bg-white rounded-lg shadow-xl">
              <div className="flex flex-col items-center text-center py-2">
                {navigation.map((e, i) => (
                  <Link
                    key={i}
                    href={e.href}
                    className="hover:text-slate-50 w-64 hover:duration-500 text-center m-auto hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-900"
                  >
                    {e.title}
                  </Link>
                ))}
                <div className="border-2 justify-center flex px-5 py-2 rounded-md">
                  <Image
                    className="hover:cursor-pointer"
                    onClick={() => {
                      route.push("pencarian");
                    }}
                    src={pencarian}
                    alt="#"
                  />
                </div>
                <div className="m-auto mt-2">
                  <Dropdownprofile />
                </div>
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </section>
  );
}
