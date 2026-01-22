import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 shadow-md ">
      <h3 className="text-[25px] font-semibold text-center">
        All Right Reserverd By Haitam Nefal | &copy; {new Date().getFullYear()}
      </h3>
    </footer>
  );
}
