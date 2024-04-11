'use client'
import React from "react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());


const Page = () => {
  const { data, error, isLoading } = useSWR("/api/household", fetcher);

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-shade">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider"
                    >
                      Year
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider"
                    >
                      Built With
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider"
                    >
                      Links
                    </th>
                  </tr>
                </thead>
                {/* <tbody className="divide-y divide-gray-200">
                  {data.map((member) => (
                    <tr className="py-6" key={member.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {member.firstName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {member.lastName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {member.sexCode}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300 flex space-x-2">
                          <Link href={member.exthicityCode} target="_blank">
                            <p className="hover:scale-125 transition ease-in-out duration-300">
                              <FiGithub />
                            </p>
                          </Link>
                          <Link href={item.liveLink} target="_blank">
                            <p className="hover:scale-125 transition ease-in-out duration-300">
                              <MdOutlineArrowOutward />
                            </p>
                          </Link>
                      </td>
                    </tr>
                  ))}
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
