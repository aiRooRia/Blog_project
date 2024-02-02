export const BlogPost = () => {
  return (
    <div className="w-[450px] border-2 border-solid rounded-xl h-fit p-3 flex flex-col gap-3">
      <img className="rounded-lg w-full h-[250px]" src="" alt="" />
      <div className="flex flex-col gap-2 items-start">
        <button className="bg-blue-100 rounded-xl py-[5px] px-[10px] text-cyan-600 text-xs">
          Technology
        </button>
        <p className="font-medium text-dm">
          The Impact of Technology on the Workpalce:How Technology is changing
        </p>
        <p className="text-gray-400 text-xs">August 20, 204</p>
      </div>
    </div>
  );
};
