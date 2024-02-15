import {
  Header,
  Main,
  Trending,
  Post,
  Footer,
} from "@/Components/Layout/index";
import { useState, useEffect } from "react";
const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=1");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center sm:w-[1440px]">
        <Header />
        <Main />
        <Trending />
        {/* <Post /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
