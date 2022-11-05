import { Menu, Transition } from "@headlessui/react";

import Link from "next/link";
import { Fragment } from "react";

export default function Dunitkerja({ title }) {
  return (
    <div className="">
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button className="hover:bg-slate-600 text-slate-900 dark:text-slate-50  inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {title}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.41438 6.53151C6.67313 6.20806 7.1451 6.15562 7.46855 6.41438L12 10.0396L16.5315 6.41438C16.855 6.15562 17.3269 6.20806 17.5857 6.53151C17.8444 6.85495 17.792 7.32692 17.4685 7.58568L12.4685 11.5857C12.1946 11.8048 11.8054 11.8048 11.5315 11.5857L6.53151 7.58568C6.20806 7.32692 6.15562 6.85495 6.41438 6.53151Z"
                fill="#ffffff"
              />
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.41438 12.5315C6.67313 12.2081 7.1451 12.1556 7.46855 12.4144L12 16.0396L16.5315 12.4144C16.855 12.1556 17.3269 12.2081 17.5857 12.5315C17.8444 12.855 17.792 13.3269 17.4685 13.5857L12.4685 17.5857C12.1946 17.8048 11.8054 17.8048 11.5315 17.5857L6.53151 13.5857C6.20806 13.3269 6.15562 12.855 6.41438 12.5315Z"
                fill="#ffffff"
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
          <Menu.Items className="fixed mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col px-2 py-2 ">
              <Menu.Item>
                <Link href={"/kontak"}>
                  <a className="text-black flex hover:bg-slate-800 hover:text-white rounded-md px-2 py-2 text-base hover:cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.53151 6.41438C6.20806 6.67313 6.15562 7.1451 6.41438 7.46855L10.0396 12L6.41438 16.5315C6.15562 16.855 6.20806 17.3269 6.53151 17.5857C6.85495 17.8444 7.32692 17.792 7.58568 17.4685L11.5857 12.4685C11.8048 12.1946 11.8048 11.8054 11.5857 11.5315L7.58568 6.53151C7.32692 6.20806 6.85495 6.15562 6.53151 6.41438Z"
                        fill="#28303F"
                      />
                      <path
                        opacity="0.4"
                        d="M12.5315 6.41438C12.2081 6.67313 12.1556 7.1451 12.4144 7.46855L16.0396 12L12.4144 16.5315C12.1556 16.855 12.2081 17.3269 12.5315 17.5857C12.855 17.8444 13.3269 17.792 13.5857 17.4685L17.5857 12.4685C17.8048 12.1946 17.8048 11.8054 17.5857 11.5315L13.5857 6.53151C13.3269 6.20806 12.855 6.15562 12.5315 6.41438Z"
                        fill="#28303F"
                      />
                    </svg>{" "}
                    1
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={"/kontak"}>
                  <a className="text-black flex hover:bg-slate-800 hover:text-white rounded-md px-2 py-2 text-base hover:cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.53151 6.41438C6.20806 6.67313 6.15562 7.1451 6.41438 7.46855L10.0396 12L6.41438 16.5315C6.15562 16.855 6.20806 17.3269 6.53151 17.5857C6.85495 17.8444 7.32692 17.792 7.58568 17.4685L11.5857 12.4685C11.8048 12.1946 11.8048 11.8054 11.5857 11.5315L7.58568 6.53151C7.32692 6.20806 6.85495 6.15562 6.53151 6.41438Z"
                        fill="#28303F"
                      />
                      <path
                        opacity="0.4"
                        d="M12.5315 6.41438C12.2081 6.67313 12.1556 7.1451 12.4144 7.46855L16.0396 12L12.4144 16.5315C12.1556 16.855 12.2081 17.3269 12.5315 17.5857C12.855 17.8444 13.3269 17.792 13.5857 17.4685L17.5857 12.4685C17.8048 12.1946 17.8048 11.8054 17.5857 11.5315L13.5857 6.53151C13.3269 6.20806 12.855 6.15562 12.5315 6.41438Z"
                        fill="#28303F"
                      />
                    </svg>{" "}
                    2
                  </a>
                </Link>
              </Menu.Item>{" "}
              <Menu.Item>
                <Link href={"/kontak"}>
                  <a className="text-black flex hover:bg-slate-800 hover:text-white rounded-md px-2 py-2 text-base hover:cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.53151 6.41438C6.20806 6.67313 6.15562 7.1451 6.41438 7.46855L10.0396 12L6.41438 16.5315C6.15562 16.855 6.20806 17.3269 6.53151 17.5857C6.85495 17.8444 7.32692 17.792 7.58568 17.4685L11.5857 12.4685C11.8048 12.1946 11.8048 11.8054 11.5857 11.5315L7.58568 6.53151C7.32692 6.20806 6.85495 6.15562 6.53151 6.41438Z"
                        fill="#28303F"
                      />
                      <path
                        opacity="0.4"
                        d="M12.5315 6.41438C12.2081 6.67313 12.1556 7.1451 12.4144 7.46855L16.0396 12L12.4144 16.5315C12.1556 16.855 12.2081 17.3269 12.5315 17.5857C12.855 17.8444 13.3269 17.792 13.5857 17.4685L17.5857 12.4685C17.8048 12.1946 17.8048 11.8054 17.5857 11.5315L13.5857 6.53151C13.3269 6.20806 12.855 6.15562 12.5315 6.41438Z"
                        fill="#28303F"
                      />
                    </svg>{" "}
                    BPLJSKB
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={"/kontak"}>
                  <a className="text-black flex hover:bg-slate-800 hover:text-white rounded-md px-2 py-2 text-base hover:cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.53151 6.41438C6.20806 6.67313 6.15562 7.1451 6.41438 7.46855L10.0396 12L6.41438 16.5315C6.15562 16.855 6.20806 17.3269 6.53151 17.5857C6.85495 17.8444 7.32692 17.792 7.58568 17.4685L11.5857 12.4685C11.8048 12.1946 11.8048 11.8054 11.5857 11.5315L7.58568 6.53151C7.32692 6.20806 6.85495 6.15562 6.53151 6.41438Z"
                        fill="#28303F"
                      />
                      <path
                        opacity="0.4"
                        d="M12.5315 6.41438C12.2081 6.67313 12.1556 7.1451 12.4144 7.46855L16.0396 12L12.4144 16.5315C12.1556 16.855 12.2081 17.3269 12.5315 17.5857C12.855 17.8444 13.3269 17.792 13.5857 17.4685L17.5857 12.4685C17.8048 12.1946 17.8048 11.8054 17.5857 11.5315L13.5857 6.53151C13.3269 6.20806 12.855 6.15562 12.5315 6.41438Z"
                        fill="#28303F"
                      />
                    </svg>{" "}
                    BPTD
                  </a>
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#EDE9FE" stroke="#A78BFA" />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#8B5CF6" stroke="#C4B5FD" />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4H12V12H4V4Z" fill="#EDE9FE" stroke="#A78BFA" />
      <path d="M8 8H16V16H8V8Z" fill="#EDE9FE" stroke="#A78BFA" />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4H12V12H4V4Z" fill="#8B5CF6" stroke="#C4B5FD" />
      <path d="M8 8H16V16H8V8Z" fill="#8B5CF6" stroke="#C4B5FD" />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="8" width="10" height="8" fill="#EDE9FE" stroke="#A78BFA" />
      <rect x="4" y="4" width="12" height="4" fill="#EDE9FE" stroke="#A78BFA" />
      <path d="M8 12H12" stroke="#A78BFA" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="8" width="10" height="8" fill="#8B5CF6" stroke="#C4B5FD" />
      <rect x="4" y="4" width="12" height="4" fill="#8B5CF6" stroke="#C4B5FD" />
      <path d="M8 12H12" stroke="#A78BFA" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" />
      <path d="M16 4L8 12" stroke="#A78BFA" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" />
      <path d="M16 4L8 12" stroke="#C4B5FD" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
      />
      <path d="M3 6H17" stroke="#A78BFA" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
      />
      <path d="M3 6H17" stroke="#C4B5FD" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" />
    </svg>
  );
}
