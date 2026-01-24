import { LuQuote } from "react-icons/lu";

export default function Testimonials() {
  return (
    <div className="my-15">
      <div className="header my-20 text-center">
        <h2 className="text-[50px] font-semibold tracking-wider">
          What Our Shoppers Say
        </h2>
        <p className="text-[20px] font-medium">
          Store that nails fashion and comfort.
        </p>
      </div>
      <div className="container-testimonials grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[80%] mx-auto">
        <div className="box bg-pink-300 py-5 px-10 rounded-4xl">
          <div className="quote mb-5">
            <LuQuote size={60}/>
          </div>
          <p className="description tracking-wider leading-loose my-5 max-w-[80%] mx-auto">
            “Velora has completely transformed how I shop for clothes. Every
            piece feels thoughtfully designed and incredibly comfortable — from
            their polos to their jackets. It’s rare to find a brand that gets
            the fit, style, and quality right every single time.”
          </p>
          <div className="profile flex items-center">
            <div className="image max-w-15 rounded-full bg-green-500">
              <img src="/public/images/love-icon.avif" className="rounded-full" alt="" />
            </div>
            <h3 className="text-[25px] font-semibold ms-4">Jessica M., San Diego</h3>
          </div>
        </div>
        <div className="box bg-pink-300 py-5 px-10 rounded-4xl lg:translate-y-7">
          <div className="quote mb-5">
            <LuQuote size={60}/>
          </div>
          <p className="description tracking-wider leading-loose my-5 max-w-[80%] mx-auto">
            “Velora has completely transformed how I shop for clothes. Every
            piece feels thoughtfully designed and incredibly comfortable — from
            their polos to their jackets. It’s rare to find a brand that gets
            the fit, style, and quality right every single time.”
          </p>
          <div className="profile flex items-center">
            <div className="image max-w-15 rounded-full bg-green-500">
              <img src="/public/images/love-icon.avif" className="rounded-full" alt="" />
            </div>
            <h3 className="text-[25px] font-semibold ms-4">Jessica M., San Diego</h3>
          </div>
        </div>
        <div className="box bg-pink-300 py-5 px-10 rounded-4xl">
          <div className="quote mb-5">
            <LuQuote size={60}/>
          </div>
          <p className="description tracking-wider leading-loose my-5 max-w-[80%] mx-auto">
            “Velora has completely transformed how I shop for clothes. Every
            piece feels thoughtfully designed and incredibly comfortable — from
            their polos to their jackets. It’s rare to find a brand that gets
            the fit, style, and quality right every single time.”
          </p>
          <div className="profile flex items-center">
            <div className="image max-w-15 rounded-full bg-green-500">
              <img src="/public/images/love-icon.avif" className="rounded-full" alt="" />
            </div>
            <h3 className="text-[25px] font-semibold ms-4">Jessica M., San Diego</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
