import { useState, useEffect } from "react";

export const MiniTrendingBox = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=4");
    const data = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="w-full h-full">
      {articles.map((data) => {
        return (
          <div className="w-full h-full py-5 px-4 relative">
            <img
              className="absolute top-0 left-0 bg-aqua w-full h-full"
              src={data.social_image}
              alt=""
            />
            <div className="flex flex-col items-start gap-2 absolute bottom-1 left-1  rounded-xl p-5 w-1/2">
              <button className="bg-blue-600 rounded-xl py-[5px] px-[10px] text-white text-xs">
                Technlogy
              </button>
              <h1 className="font-black text-xs">
                Grid system for better Design User Interface
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};
