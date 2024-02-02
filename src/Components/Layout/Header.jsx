export const Header = () => {
  return (
    <div className="flex justify-between items-center w-full py-5 ">
      <h1 className="font-bold text-3xl">aiRo!</h1>
      <div className="flex gap-2 text-gray-600">
        <button>Home</button>
        <button>Blog</button>
        <button>Content</button>
      </div>
      <input
        className="bg-gray-200 rounded-md px-3 py-1"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};
