import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

export default function EditProfile() {
  return (
    <div>
      <Menu as="div">
        <div>
          <Menu.Button className="block w-full text-left justify-center rounded-lg px-3 hover:bg-slate-900 hover:text-white py-2">
            <h1>Edit Profile</h1>
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
          <Menu.Items className="mt-2 w-full mx-2 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-3 flex flex-col py-2 text-sm">
              <Menu.Item>
                <Link href={"/admin/gantiprofile"}>Ganti Profile</Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={"/admin/updatename"}>Ganti Nama</Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
