import CensusForm from "./components/CensusForm";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <CensusForm />
    </div>
  );
};

export default Home;
