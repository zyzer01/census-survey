'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const HouseholdList: React.FC<HouseholdListProps> = ({ members }) => {
  return (
    <ul>
      {members.map((member) => (
        <li key={member.id}>
          {member.firstName} ({member.sexCode})
        </li>
      ))}
    </ul>
  );
};

const Home = () => {
  const { data, error, isLoading } = useSWR('/api/household', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <HouseholdList members={data} />;
};

export default Home;
