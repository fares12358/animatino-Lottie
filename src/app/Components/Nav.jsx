import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="h-full bg-transparent col-span-1 flex flex-col justify-start items-center rounded-xl   font-bold text-xl p-5">
      <Link href="/Home" className="text-black bg-white border flex justify-center items-center w-full h-[50px] rounded-lg ">
        Account
      </Link>
      <Link href="/Home" className="text-white border flex justify-center items-center w-full h-[50px] rounded-lg mt-5 ">
        Home
      </Link>
      <Link href="/Home" className="text-white border flex justify-center items-center w-full h-[50px] rounded-lg mt-5 ">
        Dashboard
      </Link>
      <button className="text-white border flex justify-center items-center w-full h-[50px] rounded-lg mt-auto mb-0 uppercase"> logout</button>
    </nav>
  );
};

export default Nav;
