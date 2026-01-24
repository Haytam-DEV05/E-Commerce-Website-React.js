import { IoMdCloseCircle } from "react-icons/io";

export default function Register({ closeForm }) {
  return (
    <div className="min-h-screen min-w-screen absolute z-99 p-10 backdrop-blur-lg">
      <div className="box flex justify-center items-center flex-col bg-gray-400 max-w-fit mx-auto px-10 py-5 rounded-lg">
        <div className="icons-close relative w-full mb-10">
          <IoMdCloseCircle
            size={30}
            className="absolute right-0 cursor-pointer"
            onClick={closeForm}
          />
        </div>
        <h3 className="pb-1 border-black border-b-3 text-[20px] font-semibold">
          Register
        </h3>
        <form action="" className="">
          <div className="my-5">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="border border-black w-full outline-0 px-10 py-2"
            />
          </div>
          <div className="my-5">
            <input
              type="email"
              name="email"
              placeholder="Your@gmail.com"
              className="border border-black w-full outline-0 px-10 py-2"
            />
          </div>
          <div className="my-5">
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border border-black w-full outline-0 px-10 py-2"
            />
          </div>
          <button
            className="bg-blue-300 px-8 py-1 cursor-pointer rounded-md w-full"
            onClick={closeForm}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
