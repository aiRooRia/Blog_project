export const MiniTrendingBox = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full py-5 px-4 relative">
        <img
          className="absolute top-0 left-0 bg-aqua w-full h-full"
          src=""
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
    </div>
  );
};
