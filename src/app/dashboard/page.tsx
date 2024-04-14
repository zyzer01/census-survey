"use client";

import React from "react";
import Loading from "../components/Loading";
import useSWR from "swr";
import DashboardCard from "../components/DashboardCard";
import ItemNotFound from "../components/ItemNotFound";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page = () => {
  const { data: members, error, isLoading } = useSWR("/api/household", fetcher);

  if (error) return <ItemNotFound />;
  if (isLoading) return <Loading />;
  return (
    <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-gray-900">
        Household
        <span className="text-gray-600"> Data</span>
      </h1>
      <div className="grid grid-cols-1 text-sm font-medium text-gray-500 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16 text-balance">
        {members.map((member: HouseholdMember) => (
          <DashboardCard
            key={member.id}
            id={member.id}
            firstName={member.firstName}
            lastName={member.lastName}
            sex={member.sexCode}
            age={member.age}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
