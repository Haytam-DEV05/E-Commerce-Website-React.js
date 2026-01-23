import { MdEmail } from "react-icons/md";
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      icon: <MdEmail size={28} />,
      title: "Email",
      description: "haitam.nefal@gmail.com",
    },
    {
      id: 2,
      icon: <FaSquarePhone size={28} />,
      title: "Phone",
      description: "0623887142",
    },
    {
      id: 3,
      icon: <FaLocationDot size={28} />,
      title: "Address",
      description: "Morooco/Beni-Mella",
    },
  ];

  return (
    <section id="contact" className="my-15">
      <div className="header text-center my-10">
        <h2 className="text-[60px] font-bold mb-10">Get in Touch</h2>
        <p className="text-[18px] font-semibold">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="infos-contacts flex justify-center  flex-col">
          {contacts.map((c) => (
            <div
              className="info-contact flex items-center space-x-3 space-y-7 ml-10"
              key={c.id}
            >
              <div className="icon bg-orange-300 w-15 h-15 rounded-full flex items-center justify-center me-5">
                {c.icon}
              </div>
              <div className="info">
                <h3 className="text-[24px] font-semibold">{c.title}</h3>
                <p className="text-[18px] text-gray-400 font-medium">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="contact">
          <div className="info"></div>
          <form>
            <div className="my-5">
              <label htmlFor="name" className="text-[18px] font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="block w-full border border-black rounded-md py-3 px-10 outline-0"
              />
            </div>
            <div className="my-5">
              <label htmlFor="email" className="text-[18px] font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your@gmail.com"
                className="block w-full border border-black rounded-md py-3 px-10 outline-0"
              />
            </div>
            <div className="my-5">
              <label htmlFor="message" className="text-[18px] font-semibold">
                Message
              </label>
              <textarea
                name=""
                id=""
                placeholder="How can We Help You ?"
                className="block w-full border border-black rounded-md py-3 px-10 outline-0"
              ></textarea>
            </div>
            <button className="bg-orange-300 text-[25px] hover:bg-orange-500 text-white px-10 py-3 cursor-pointer w-full rounded-4xl mt-5 hover:-translate-y-1.5 transition-all duration-200 flex justify-center items-center">
              <span className="me-5"><IoSend size={28}/></span>Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
