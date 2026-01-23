import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
const socials = [
  { id: 1, icon: <FaInstagram size={25} /> },
  { id: 2, icon: <FaTwitter size={25} /> },
  { id: 3, icon: <FaFacebook size={25} /> },
];
export default function Footer() {
  return (
    <footer className="bg-gray-200 shadow-md px-5">
      <div className="top-footer grid grid-cols-4 gap-4 py-7">
        <div className="col-span-2">
          <div className="logo text-[30px] font-semibold">Ecomm</div>
          <p className="max-w-[70%] text-[18px] font-normal my-5">
            Curated home essentials for modern living. We believe in quality,
            sustainability, and thoughtful design.
          </p>
          <div className="social-icons my-5 flex max-w-fit space-x-10">
            {socials.map((social) => {
              return (
                <div
                  className="icon cursor-pointer hover:-translate-y-1 transition-all duration-150"
                  key={social.id}
                >
                  {social.icon}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-[25px] font-semibold mb-5">Shop</h3>
          <ul className="flex flex-col space-y-3">
            <li>
              <a
                className="cursor-pointer hover:text-orange-500 transition-all duration-150"
                href=""
              >
                All Product
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-orange-500 transition-all duration-150"
                href=""
              >
                Lighting
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-orange-500 transition-all duration-150"
                href=""
              >
                Textiles
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[25px] font-semibold mb-5">Support</h3>
          <ul className="flex flex-col space-y-3">
            <li>
              <a
                className="cursor-pointer hover:text-orange-500 transition-all duration-150"
                href=""
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-orange-500 transition-all duration-150"
                href=""
              >
                Shipping Info
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-orange-500 transition-all duration-150"
                href=""
              >
                Returns
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-orange-500 transition-all duration-150"
                href=""
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer py-7 border-t-2">
        <p className="text-center text-[20px] font-semibold">&copy; {new Date().getFullYear()} Ecomm. All Right Reserverd</p>
      </div>
    </footer>
  );
}
