import CensusForm from "./components/CensusForm";
import NavBarOut from "./components/NavbarOut";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  return (
    <div>
       <NavBarOut />
      <CensusForm />
    </div>
  );
};

export default Home;
