export const Footer = () => {
  return (
    <div className="bg-gray-200 w-full h-fit py-10 flex flex-col items-center gap-7">
      <div className="flex justify-between w-[1440px]">
        <div className="w-[30%] flex flex-col gap-3">
          <h1 className="font-bold text-xl">About</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            reprehenderit voluptatibus, velit reiciendis quaerat molestias illo
            itaque sed aliquam, cupiditate repellat unde. Non minus odio eius
            officia? Repellendus, iste cumque.
          </p>
          <p>Email: ariguun10@gmail.com</p>
          <p>Phone: 88818657</p>
        </div>
        <div className="flex flex-col gap-3 w-[30%]">
          <button>Home</button>
          <button>Blog</button>
          <button>Contact</button>
        </div>
        <div className="w-[30%] flex gap-5">
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>
      </div>
      <div className="flex justify-between w-[1440px]">
        <h1 className="font-bold text-3xl">aiRo</h1>
        <div className="flex gap-3 items-center">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
