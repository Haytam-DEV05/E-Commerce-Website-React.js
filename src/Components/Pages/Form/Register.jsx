import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export default function Register({ closeForm }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    if (!name || !email || !password) return alert("pleas Enter The Field");
    console.log(form.name);
    console.log(form.email);
    console.log(form.password);
    closeForm();
  };
  return (
    <div className="min-h-screen min-w-screen fixed z-99 p-10 backdrop-blur-lg">
      <div className="box bg-gray-400 flex items-center justify-center flex-col max-w-fit mx-auto px-10 py-5 rounded-lg">
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
        <form onSubmit={handleForm}>
          <div className="my-5">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="border border-black w-full outline-0 px-10 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="my-5">
            <input
              type="email"
              name="email"
              placeholder="Your@gmail.com"
              className="border border-black w-full outline-0 px-10 py-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="my-5">
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border border-black w-full outline-0 px-10 py-2"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button
            className="bg-blue-300 px-8 py-1 cursor-pointer rounded-md w-full"
            // onClick={closeForm}
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
