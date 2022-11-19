/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from "../../context/user";
import Dprofile from "../dropdown-button/Profile";

export default function Navbar() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(10);
  const [boxShadow, setBoxShadow] = useState(0);
  const userC = useUser();
  const { uid } = userC;
  const { email } = userC;
  const nav = [
    { title: "Beranda", href: "/" },
    { title: "Berita", href: "/berita" },
    { title: "Kegiatan", href: "/kegiatan" },
    { title: "Pengaduan", href: "/pengaduan" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;
    if (backgroundTransparacyVar < 1) {
      let paddingVar = 10 + backgroundTransparacyVar * 5;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <>
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
                <div className="flex justify-center items-center">
                  <Link href={"/"}>
                    <div className="hover:cursor-pointer flex   flex-shrink-0 items-center">
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
                  <div className="ml-5 m-auto hidden lg:flex space-x-4">
                    {nav.map((e) => (
                      <Link
                        key={e.title}
                        href={e.href}
                        className="hover:text-slate-50 hover:duration-500  h-10  text-center m-auto hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-900"
                      >
                        {e.title}
                      </Link>
                    ))}

                    <Dprofile title={"Profile"} />
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
                        <div className="overflow-hidden rounded-full">
                          <img
                            title="Login"
                            loading={"eager"}
                            className="object-cover h-9 w-9 rounded-full hover:cursor-pointer scale-[1.13]"
                            src={
                              "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png"
                            }
                            alt="profile"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden bg-white dark:bg-slate-900">
              <div className="flex flex-col items-center text-center">
                <Link
                  href={"/"}
                  className="w-[100px] hover:bg-slate-500 py-2 text-center rounded-md text-sm font-medium "
                >
                  Beranda
                </Link>
                <Link
                  href={"/berita"}
                  className="w-[100px] hover:bg-slate-500 py-2 text-center rounded-md text-sm font-medium "
                >
                  Berita
                </Link>

                <Link
                  href={"/kontak"}
                  className="w-[100px] hover:bg-slate-500 py-2 text-center rounded-md text-sm font-medium "
                >
                  Kontak
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
