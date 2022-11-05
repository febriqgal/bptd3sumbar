/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";

import { getAuth } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "../context/user";
import Dprofile from "./Dprofile";
import DprofileM from "./DprofileM";
import Dpublikasi from "./Dpublikasi";
import DpublikasiM from "./DpublikasiM";
import Dunitkerja from "./Dunitkerja";
import DunitkerjaM from "./DunitkerjaM";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  const userC = useUser();
  const auth = getAuth();
  const route = useRouter();
  const { uid } = userC;
  const { email } = userC;
  return (
    <>
      <Disclosure
        as="nav"
        className="dark:bg-slate-800  bg-slate-50 transition-all duration-1000  shadow-gray-200 dark:shadow shadow-md z-[99999] w-full top-0"
      >
        {({ open }) => (
          <div className="mx-auto px-5">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <>
                      <svg
                        className="hidden dark:flex"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 9L9 14M12 17L20 9"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        className="dark:hidden"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 9L9 14M12 17L20 9"
                          stroke="#001A72"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        className="hidden dark:flex"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 9L9 14M12 17L20 9"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        className="dark:hidden"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 9L9 14M12 17L20 9"
                          stroke="#001A72"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1  items-center justify-center lg:justify-between">
                <div className="flex justify-center">
                  <Link href={"/"}>
                    <div className="hidden dark:flex hover:cursor-pointer flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://hubdat.dephub.go.id/static/images/logo_white.bae26e1b95c2.png"
                        alt="BPTD Wilayah III"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://hubdat.dephub.go.id/static/images/logo_white.bae26e1b95c2.png"
                        alt="BPTD Wilayah III"
                      />
                    </div>
                  </Link>
                  <Link href={"/"}>
                    <div className="dark:hidden visible hover:cursor-pointer flex   flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://hubdat.dephub.go.id/static/images/logo_sites.cd63aebaf36b.png"
                        alt="BPTD Wilayah III"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://hubdat.dephub.go.id/static/images/logo_sites.cd63aebaf36b.png"
                        alt="BPTD Wilayah III"
                      />
                    </div>
                  </Link>
                  <div className=" pl-5   m-auto hidden lg:flex space-x-3">
                    <Link href={"/"}>
                      <a className="w-[100px] h-10  text-center m-auto hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-slate-600">
                        Beranda
                      </a>
                    </Link>
                    <Link href={"/berita"}>
                      <a className="w-[100px] h-10 text-center m-auto hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-slate-600">
                        Berita
                      </a>
                    </Link>
                    <Link href={"/kegiatan"}>
                      <a className="w-[100px] h-10 text-center m-auto hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-slate-600">
                        Kegiatan
                      </a>
                    </Link>
                    <Link href={"/pengaduan"}>
                      <a className="w-[100px] h-10 text-center m-auto hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-slate-600">
                        Pengaduan
                      </a>
                    </Link>
                    <Dprofile title={"Profile"} />
                    <Dunitkerja title={"Unit Kerja"} />
                    <Dpublikasi title={"Publikasi"} />
                    <Link href={"/kontak"}>
                      <a className="w-[100px] h-10 text-center m-auto hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-slate-600">
                        Kontak
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="my-auto right-0 top-4 hidden sm:ml-6 lg:block">
                  {/* Profile dropdown */}
                  <div className="relative ml-3">
                    {uid ? (
                      <Link
                        href={
                          uid && email != "febriqgal@gmail.com"
                            ? "/user"
                            : "/admin"
                        }
                      >
                        <img
                          title={
                            uid && email != "febriqgal@gmail.com"
                              ? "User"
                              : "Admin"
                          }
                          loading={"eager"}
                          className="object-cover h-9 w-9 rounded-full hover:cursor-pointer"
                          src={
                            uid
                              ? userC.photoURL
                              : "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png"
                          }
                          alt="profile"
                        />
                      </Link>
                    ) : (
                      <Link href={"/login"}>
                        <img
                          title="Login"
                          loading={"eager"}
                          className="object-cover h-9 w-9 rounded-full hover:cursor-pointer"
                          src={
                            "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png"
                          }
                          alt="profile"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden bg-white dark:bg-slate-900">
              <div className="flex flex-col items-center text-center">
                <Link href={"/"}>
                  <a className="w-[100px] hover:bg-slate-500 py-2 text-center rounded-md text-sm font-medium ">
                    Beranda
                  </a>
                </Link>
                <Link href={"/berita"}>
                  <a className="w-[100px] hover:bg-slate-500 py-2 text-center rounded-md text-sm font-medium ">
                    Berita
                  </a>
                </Link>
                <DprofileM title={"Profile"} />
                <DunitkerjaM title={"Unit Kerja"} />
                <DpublikasiM title={"Publikasi"} />
                <Link href={"/kontak"}>
                  <a className="w-[100px] hover:bg-slate-500 py-2 text-center rounded-md text-sm font-medium ">
                    Kontak
                  </a>
                </Link>
                <div className="m-auto pt-2 pb-4">
                  {uid ? (
                    <Link
                      href={
                        uid && email != "febriqgal@gmail.com"
                          ? "/user"
                          : "/admin"
                      }
                    >
                      <img
                        title={
                          uid && email != "febriqgal@gmail.com"
                            ? "User"
                            : "Admin"
                        }
                        loading={"eager"}
                        className="object-cover h-9 w-9 rounded-full hover:cursor-pointer"
                        src={
                          uid
                            ? userC.photoURL
                            : "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png"
                        }
                        alt="profile"
                      />
                    </Link>
                  ) : (
                    <Link href={"/login"}>
                      <img
                        title="Login"
                        loading={"eager"}
                        className="object-cover h-9 w-9 rounded-full hover:cursor-pointer"
                        src={
                          "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png"
                        }
                        alt="profile"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </>
  );
}
