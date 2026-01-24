export default function Shop() {
  return (
    <section
      id="shop"
      className="shop min-h-screen flex justify-center flex-col bg-gray-300"
    >
      <div className="container px-3 md:px-10 max-w-275 mx-auto">
        <span className="text-orange-300 text-[25px] font-semibold">
          New Collection
        </span>
        <h1 className="font-semibold text-[60px] my-3 md:font-bold md:text-[70px] md:max-w-[80%] md:my-5">
          Thoughtfully designed for modern living
        </h1>
        <p className="text-[17px] md:text-[20px] font-light md:max-w-[60%]">
          Discover our curated collection of home essentials. Quality pieces
          that bring warmth and style to every space.
        </p>
        <button className="bg-orange-300 px-8 py-2 block mx-auto my-5 rounded-3xl cursor-pointer text-white hover:-translate-y-1.5 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
}
