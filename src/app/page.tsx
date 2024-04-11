"use client";

import useSWR from "swr";
import DashboardCard from "./components/DashboardCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const HouseholdList: React.FC<HouseholdListProps> = ({ members }) => {

  return (
    <div>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="grid grid-cols-2 text-sm font-medium text-gray-500 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16 text-balance">
          {members.map((member) => (
            <DashboardCard
              key={member.id}
              houseHoldId={member.houseHoldId}
              firstName={member.firstName}
              lastName={member.lastName}
              sex={member.sexCode}
              dob={member.dateOfBirth}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const { data, error, isLoading } = useSWR("/api/household", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <HouseholdList members={data} />;
};

export default Home;
