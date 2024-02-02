import { BlogPost } from "../ui/BlogPost";
export const Post = () => {
  return (
    <div className="w-full py-20 flex flex-col  gap-5 ">
      <h1 className="text-xl font-bold">All Blog Post</h1>
      <div className="flex justify-between">
        <ul className="flex gap-3">
          <li>All</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Fashion</li>
          <li>Technology</li>
          <li>Branding</li>
        </ul>
        <button>View all</button>
      </div>
      <div className="flex flex-wrap gap-10 justify-between">
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
      <div className="flex justify-center">
 
        <button className="px-5 py-1 border-[1px] border-gray-400 rounded-lg text-gray-500">
          Load More
        </button>
      </div>
    </div>
  );
};
