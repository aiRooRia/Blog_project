import { useState, useEffect } from "react";

export const Main = ({ data }) => {
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=1");
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex flex-col gap-2">
      {articles.map((data) => {
        return (
          <div key={data.id} className="w-full h-[600px] py-10 px-8 relative">
            <img
              key={data.id}
              className="absolute top-0 left-0 bg-aqua w-full h-full"
              src={data.social_image}
              alt=""
            />
            <div className="flex flex-col bg-white items-start gap-3 absolute bottom-1 left-1  rounded-xl p-5 w-1/2">
              <button className="bg-blue-600 rounded-lg py-1 px-3 text-white">
                {data.type_of}
              </button>
              <h1 className="font-black text-xl">{data.title}</h1>
              <p className="text-gray-400">August 20, 2024</p>
            </div>
            <div className="flex gap-1 justify-end">
              <button className="px-2 py-1 border-2 border-gray-500 rounded-md">
                &#60;
              </button>
              <button className="px-2 py-1 border-2 border-gray-500 rounded-md">
                &#62;
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
