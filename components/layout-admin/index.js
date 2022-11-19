/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from "@headlessui/react";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useUser } from "../../context/user";
import withProtected from "../../hoc/withProtected";
import EditProfile from "../../components/dropdown-button/edit-profile";
const LayoutAdmin = ({ children }) => {
  const userC = useUser();
  const auth = getAuth();
  const user = auth.currentUser;
  const route = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Beranda", href: "/admin" },
    { name: "Tambah Berita", href: "/admin/tambahberita" },
    { name: "Ganti Header", href: "/admin/uploadheader" },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section>
      <main>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.3287 11.0002V13.0002L7.50042 13.0002L10.7429 16.2428L9.32873 17.657L3.67188 12.0001L9.32873 6.34326L10.7429 7.75747L7.50019 11.0002L20.3287 11.0002Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
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
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {/* Mobile */}
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <div className="flex">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.53151 6.41438C6.20806 6.67313 6.15562 7.1451 6.41438 7.46855L10.0396 12L6.41438 16.5315C6.15562 16.855 6.20806 17.3269 6.53151 17.5857C6.85495 17.8444 7.32692 17.792 7.58568 17.4685L11.5857 12.4685C11.8048 12.1946 11.8048 11.8054 11.5857 11.5315L7.58568 6.53151C7.32692 6.20806 6.85495 6.15562 6.53151 6.41438Z"
                              fill="#ffffff"
                            />
                            <path
                              opacity="0.4"
                              d="M12.5315 6.41438C12.2081 6.67313 12.1556 7.1451 12.4144 7.46855L16.0396 12L12.4144 16.5315C12.1556 16.855 12.2081 17.3269 12.5315 17.5857C12.855 17.8444 13.3269 17.792 13.5857 17.4685L17.5857 12.4685C17.8048 12.1946 17.8048 11.8054 17.5857 11.5315L13.5857 6.53151C13.3269 6.20806 12.855 6.15562 12.5315 6.41438Z"
                              fill="#ffffff"
                            />
                          </svg>
                          {item.name}
                        </div>
                      </Link>
                    ))}
                    <EditProfile />
                  </nav>
                </div>
                <div className="flex-shrink-0 flex bg-gray-700 p-4">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="object-cover h-9 w-9 rounded-full"
                        src={userC.photoURL}
                        alt={"#"}
                      />
                    </div>
                    <div className="ml-3">
                      <h1 className="text-sm font-bold text-slate-50">
                        {user != null ? `${user.displayName}` : `-`}
                      </h1>
                      <h1 className="text-xs text-slate-300 italic">
                        {user != null ? `${user.email}` : `-`}
                      </h1>
                      <button
                        onClick={async () => {
                          await signOut(auth);
                          route.replace("/");
                        }}
                        className="bg-red-500 py-1 px-5 rounded-sm mt-2 text-xs font-medium text-gray-300 group-hover:text-gray-200"
                      >
                        Keluar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex-1 flex flex-col min-h-0 shadow-xl">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <h1 className="py-4 text-center font-bold text-xl">Admin</h1>
              <nav className="flex-1 flex flex-col px-2 space-y-1 ">
                {navigation.map((e) => (
                  <Link
                    key={e.name}
                    className="hover:bg-slate-900 hover:text-white py-2 px-3 rounded-lg"
                    href={e.href}
                  >
                    {e.name}
                  </Link>
                ))}

                <EditProfile />
              </nav>
            </div>
            <div className="flex-shrink-0 flex shadow-xl p-4 m-4 rounded-lg">
              <div className="flex items-center">
                <div>
                  <img
                    className="object-cover h-9 w-9 rounded-full"
                    src={userC.photoURL}
                    alt={userC.uid}
                  />
                </div>
                <div className="ml-3">
                  <h1 className="text-sm font-bold">
                    {user != null ? `${user.displayName}` : `-`}
                  </h1>
                  <h1 className="text-xs  italic">
                    {user != null ? `${user.email}` : `-`}
                  </h1>

                  <button
                    onClick={async () => {
                      await signOut(auth);

                      route.replace("/");
                    }}
                    className="bg-red-500 py-1 px-5 mt-2 text-xs font-medium text-white rounded-lg"
                  >
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <main>{children}</main>
        </div>
      </main>
    </section>
  );
};
export default withProtected(LayoutAdmin);
