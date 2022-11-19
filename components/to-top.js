import React from "react";
import Link from "next/link";
export default function To_top() {
  return (
    <div className="fixed bottom-5 right-5 z-[9999] bg-slate-50 rounded-full shadow-xl p-2">
      <Link href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          color="#000103"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </Link>
    </div>
  );
}
