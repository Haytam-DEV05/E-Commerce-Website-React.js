import React from "react";

export default function Banner() {
  return (
    <div className="bg-gray-300 py-20 border-b border-gray-600 shadow-lg">
      <div className="header text-center px-1 sm:px-2 md:px-3 lg:px-4">
        <h1 className="text-[30px] sm:text-[40px] md:text-[50px] font-bold">
          Get 10% Off on Your First Order
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
          Plus exclusive access to product drops, style tips, and insider deals.
        </p>
      </div>
      <form
        action=""
        className="my-15 md:flex items-center max-w-275 mx-auto gap-5 px-4 md:px-10"
      >
        <input
          type="email"
          placeholder="Enter Your Email*"
          className="w-full border border-black outline-0 px-10 py-2"
        />
        <button className="w-full my-3 md:max-w-fit bg-red-400 py-2 px-10 cursor-pointer text-white font-medium">
          Subscribe
        </button>
      </form>
    </div>
  );
}
