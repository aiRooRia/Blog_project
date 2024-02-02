import { MiniTrendingBox } from "../ui/MiniTrendingBox";
export const Trending = () => {
  return (
    <div className="flex flex-col gap-3 w-full h-[300px]">
      <h1 className="font-bold text-xl">Trending</h1>
      <div className="flex justify-between h-[90%] gap-5">
        <MiniTrendingBox />
        <MiniTrendingBox />
        <MiniTrendingBox />
        <MiniTrendingBox />
      </div>
    </div>
  );
};
