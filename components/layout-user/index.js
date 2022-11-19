/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from "@headlessui/react";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useUser } from "../../context/user";
import withProtected from "../../hoc/withProtected";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LayoutUser = ({ children }) => {
  const userC = useUser();
  const auth = getAuth();
  const user = auth.currentUser;
  const route = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigation = [
    { name: "Update Name", href: "/user/updatenameuser" },
    { name: "Ganti Profile", href: "/user/gantiprofile" },
    { name: "Pengaduan", href: "/user/tambahpengaduan" },
  ];

  return (
    <div>
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
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
                <h1 className="pt-8 pb-6 text-center font-bold text-xl">
                  Dashboard
                </h1>
                <nav className="mt-5 px-2 space-y-1">
                  {/* Mobile */}
                  {navigation.map((item) => (
                    <Link
                      className="flex hover:bg-slate-900 py-2 px-3 rounded-xl hover:text-white duration-1000"
                      key={item.name}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex items-center  shadow-xl m-4 p-5">
                <img
                  className="object-cover h-9 w-9 rounded-full"
                  src={userC.photoURL}
                  alt={userC.uid}
                />

                <div className="ml-3">
                  <h1 className="text-sm font-bold">
                    {user != null ? `${user.displayName}` : `-`}
                  </h1>
                  <h1 className="text-xs italic">
                    {user != null ? `${user.email}` : `-`}
                  </h1>
                  <button
                    onClick={async () => {
                      await signOut(auth);
                      route.replace("/");
                    }}
                    className="bg-red-500 py-1 px-5 rounded-lg mt-2 text-xs font-medium text-white group-hover:text-gray-200"
                  >
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 shadow-xl">
          <div className="flex-1 flex-col pb-4 overflow-y-auto">
            <h1 className="pt-8 pb-6 text-center font-bold text-xl">
              Dashboard
            </h1>
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    "hover:bg-gray-900 duration-1000 hover:text-white group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                  }
                >
                  {item.name}
                </Link>
              ))}
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
        <main className="flex-1">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};
export default withProtected(LayoutUser);
