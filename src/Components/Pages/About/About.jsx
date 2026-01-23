import React from "react";

export default function About() {
  const infos = [
    {
      id: 1,
      image: "/public/images/sustainability-icon.jpg",
      title: "Sustainable",
      description:
        "We partner with makers who share our commitment to environmental responsibility.",
    },
    {
      id: 2,
      image: "/public/images/quality.png",
      title: "Quality First",
      description:
        "Every product is carefully selected for its craftsmanship and durability.",
    },
    {
      id: 3,
      image: "/public/images/love-icon.avif",
      title: "With Love",
      description:
        "Each piece is chosen with care to bring joy and warmth to your home.",
    },
  ];
  return (
    <section id="about" className="about min-h-screen">
      <div className="content bg-neutral-200 text-center py-10">
        <h1 className="text-[70px] font-bold mb-5">About Ecomm</h1>
        <p className="text-[18px] font-semibold max-w-[60%] mx-auto">
          We believe in the power of thoughtful design to transform everyday
          living. Our curated collection brings together quality,
          sustainability, and timeless aesthetics.
        </p>
      </div>
      <div className="infos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10 my-10 gap-5">
        {infos.map((info) => {
          return (
            <div className="info text-center" key={info.id}>
              <div className="overflow-hidden max-w-fit block mx-auto">
                <img
                  src={info.image}
                  alt={info.title}
                  className="image w-20 h-20 rounded-full object-containe"
                />
              </div>
              <h3 className="py-5 text-[20px] font-semibold">{info.title}</h3>
              <p className="text-[18px] font-normal">{info.description}</p>
            </div>
          );
        })}
      </div>
      <div className="promise bg-gray-400 py-10 my-10 text-center max-w-[90%] mx-auto rounded-2xl">
        <h2 className="text-[40px] font-semibold">Our Promise</h2>
        <p className="md:max-w-[60%] mx-auto mt-5 px-2">
          We stand behind every product we sell. If you're not completely
          satisfied, we offer hassle-free returns within 30 days. Your happiness
          is our priority.
        </p>
      </div>
    </section>
  );
}
