import { useEffect, useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import Search from "./components/Search";

const App = () => {
  const [profile, setProfile] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${search}`);
      const data = await res.json();
      //console.log(data);
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [search]);
  return (
    <div className=" flex flex-col bg-[#141d2e] font-mono min-h-screen items-center  gap-4 mx-auto justify-center">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <Result profile={profile} />
    </div>
  );
};

export default App;
