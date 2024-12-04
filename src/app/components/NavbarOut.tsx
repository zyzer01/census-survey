"use client";
import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBarOut = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mx-auto bg-gray-100">
      <div className="flex flex-col w-full px-8 py-2 mx-auto md:px-12 md:items-center md:justify-between md:flex-row lg:px-32 max-w-7xl">
        <div className="flex flex-row items-center justify-between text-black">
          <Link
            className={`${
              pathname === "/" ? "active" : "text-red"
            } inline-flex items-center gap-3 text-xl font-bold tracking-tight text-black`}
            href="/"
          >
            <span> ❖ </span>
            <span>Survey</span>
          </Link>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdOutlineClose /> : <RiMenu4Line />}
          </button>
        </div>
        <nav
          className={`flex flex-col items-center flex-grow gap-3 p-4 px-5 text-sm font-medium text-gray-500 md:px-0 md:pb-0 md:flex md:justify-start md:flex-row md:ml-4 lg:p-0 md:mt-0 ${
            open ? "flex" : "hidden"
          }`}
        >
          <Link
            className={`${
              pathname === "/dashboard/members" ? "text-black" : ""
            } hover:text-black focus:outline-none md:mr-auto`}
            href="/dashboard/members"
          >
            Members
          </Link>
          <Link
            className="inline-flex items-center justify-center w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
            href="/dashboard"
            role="button"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBarOut;
