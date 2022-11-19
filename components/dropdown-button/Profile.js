import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

const dropdown = [
  { subtitle: "Sejarah", href: "/sejarah" },
  { subtitle: "Organisasi", href: "/organisasi" },
  { subtitle: "Kontak", href: "/kontak" },
];
export default function Dprofile({ title }) {
  return (
    <Menu as="div" className="inline-block text-left">
      <div>
        <Menu.Button className="hover:duration-1000 hover:text-slate-50 hover:bg-slate-900 h-10 inline-flex w-full m-auto justify-center rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="fixed mt-2 w-56 shadow-xl origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col px-2 py-2 ">
            {dropdown.map((e) => (
              <div key={e.subtitle}>
                <Menu.Item>
                  <Link
                    href={e.href}
                    className="text-black flex hover:bg-slate-800 hover:text-white text-sm rounded-md px-2 py-2 hover:cursor-pointer"
                  >
                    {e.subtitle}
                  </Link>
                </Menu.Item>
              </div>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
