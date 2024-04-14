import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div>
          <div>
            <span className="text-sm font-semibold text-gray-500 uppercase">
              404
            </span>
            <p className="mt-8 text-4xl font-semibold tracking-tighter text-black text-balance lg:text-6xl">
              Page not found
            </p>
            <p className="mx-auto mt-4 text-sm font-medium text-gray-500 text-balance">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 mx-auto mt-8">
            <Link href="/">
            <button
              className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
              aria-label="Primary action"
            >
              Home
            </button>
            </Link>
            <Link href="/create">
            <button
              className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Secondary action"
            >
              Create Member
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
