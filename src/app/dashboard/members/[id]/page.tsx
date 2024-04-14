"use client";

import React from "react";
import useSWR from "swr";
import { CgProfile } from "react-icons/cg";
import { GoPeople } from "react-icons/go";
import { GiDiamondRing } from "react-icons/gi";
import { TbMan } from "react-icons/tb";
import { TbWoman } from "react-icons/tb";
import { GiRelationshipBounds } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { LuCrown } from "react-icons/lu";
import Link from "next/link";
import NavBar from "@/app/components/NavBar";
import Loading from "@/app/components/Loading";
import ItemNotFound from "@/app/components/ItemNotFound";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const formatString = (str: string) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());
};
export default function Page({ params }: { params: { id: number } }) {
  const { data, error, isLoading } = useSWR(
    `/api/household/${params.id}`,
    fetcher
  );

  if (isLoading) {
    return <Loading />
  }
  if (!data) {
    return <ItemNotFound />
  }
  if (error) {
    return <p>An error occured</p>
  }


  return (
    <div className="px-4 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div className="underline cursor-pointer mb-6">
        <Link href="/dashboard/members">Go Back</Link>
      </div>
      <div className="p-2 border bg-gray-50 rounded-3xl">
        <div className="px-4 py-10 overflow-hidden bg-white border shadow-lg rounded-3xl md:p-20">
          <div>
            <span className="text-sm font-semibold text-gray-500 uppercase">
              Household Id:{" "}
              <span className="text-gray-900"> {data?.houseHoldId}</span>
            </span>
            <h1 className="mt-8 text-2xl font-semibold tracking-tighter text-gray-900">
              Member
              <span className="text-gray-600"> Data</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4 flex-row">
                <div>
                  <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                    <CgProfile />
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Member Name</h3>
                  <p className="mt-2 text-sm font-medium text-gray-900">
                    {data?.firstName} {data?.lastName}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 flex-row">
                <div>
                  <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                    <GoPeople />
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Age</h3>
                  <p className="mt-2 text-sm font-medium text-gray-900">
                    {data?.age} year(s) old
                  </p>
                </div>
              </div>
              {data?.age < 16 && (
                <>
                  <div className="flex gap-4 flex-row">
                    <div>
                      <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                        <GiRelationshipBounds />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                        Relationship to head of house
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {formatString(data?.relationshipCode)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row">
                    <div>
                      <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                        <GiDiamondRing />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                        Marital Status
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {formatString(data?.maritalStatus)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row">
                    <div>
                      <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                        <TbMan />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                        Father&apos;s Name
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {data?.fathersName}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row">
                    <div>
                      <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                        <TbWoman />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                        Mother&apos;s Name
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {data?.mothersName}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row">
                    <div>
                      <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                        <IoSchoolOutline />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                        School Attendance
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {data?.schoolAttendance === true ? "Present" : "Absent"}
                      </p>
                    </div>
                  </div>
                </>
              )}
              {data?.age >= 16 && (
                <>
                  <div className="flex gap-4 flex-row">
                    <div>
                      <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                        <GiRelationshipBounds />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                        Position in household
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {formatString(data?.positionInHousehold)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row">
                    <div>
                      <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                        <GiDiamondRing />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                        Marital Status
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {formatString(data?.maritalStatus)}
                      </p>
                    </div>
                  </div>
                  {data?.maritalStatus === "MARRIED" && (
                    <div className="flex gap-4 flex-row">
                      <div>
                        <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                          <TbMan />
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-500">
                          Spouse Name
                        </h3>
                        <p className="mt-2 text-sm font-medium text-gray-900">
                          {formatString(data?.spouseName)}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-4 flex-row">
                    <div>
                      <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                        <TbMan />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                        Highest level of education
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {formatString(data?.educationLevel)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row">
                    <div>
                      <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                        <BsBriefcase />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                        Employment Status
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {formatString(data?.employmentStatus)}
                      </p>
                    </div>
                  </div>
                </>
              )}
              <div className="flex gap-4 flex-row">
                <div>
                  <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                    <BsBriefcase />
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">
                    Head of house hold
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gray-900">
                    {data?.headOfHousehold === true ? "Yes" : "No"}
                  </p>
                </div>
              </div>
              {!data?.headOfHousehold && (
                <div className="flex gap-4 flex-row">
                    <div>
                      <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
                        <LuCrown />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                      Head of house name
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {formatString(data?.hohFirstName)} {formatString(data?.hohLastName)}
                      </p>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
