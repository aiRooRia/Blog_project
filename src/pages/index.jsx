import {
  Header,
  Main,
  Trending,
  Post,
  Footer,
} from "@/Components/Layout/index";
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center sm:w-[1440px]">
        <Header />
        <Main />
        <Trending />
        <Post />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
