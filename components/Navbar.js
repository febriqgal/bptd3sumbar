/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Dprofile from "./Dprofile";
import Dpublikasi from "./Dpublikasi";
import Dunitkerja from "./Dunitkerja";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 fixed z-[999] w-full">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link href={"/"}>
                    <div className="hover:cursor-pointer flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://hubdat.dephub.go.id/static/images/logo_white.bae26e1b95c2.png"
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://hubdat.dephub.go.id/static/images/logo_white.bae26e1b95c2.png"
                        alt="Your Company"
                      />
                    </div>
                  </Link>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-3">
                      <Link href={"/"}>
                        <a className="w-[100px] text-center m-auto hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-slate-600">
                          Beranda
                        </a>
                      </Link>
                      <Dprofile tittle={"Profile"} />
                      <Dunitkerja tittle={"Unit Kerja"} />
                      <Dpublikasi tittle={"Publikasi"} />
                      <Link href={"kontak"}>
                        <a className="w-[100px] text-center m-auto hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-slate-600">
                          Kontak
                        </a>
                      </Link>
                      <Link href={"admin"}>
                        <a className="pl-4 w-[100px] px-3 py-2 text-sm font-medium text-white">
                          Admin
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="flex flex-col space-x-3">
                <Link href={"/"}>
                  <a className="pl-5 w-[100px] text-center  px-3 py-2 rounded-md text-sm font-medium text-white ">
                    Beranda
                  </a>
                </Link>
                <Dprofile tittle={"Profile"} />
                <Dunitkerja tittle={"Unit Kerja"} />
                <Dpublikasi tittle={"Publikasi"} />
                <Link href={"kontak"}>
                  <a className="pl-4 w-[100px] px-3 py-2 text-sm font-medium text-white">
                    Kontak
                  </a>
                </Link>
                <Link href={"admin"}>
                  <a className="pl-4 w-[100px] px-3 py-2 text-sm font-medium text-white">
                    Admin
                  </a>
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
