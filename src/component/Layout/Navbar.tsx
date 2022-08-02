/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <div
      // style={{ minHeight: "60px" }}
      className="fixed bg-transparent top-0 left-0 w-screen py-3 md:px-7 px-3 h-[5vw] max-h-16 flex justify-between items-center transition duration-500 navbar min-h-[3.75rem]"
    >
      <Link href="/">
        <a className="h-full w-auto">
          <img className="h-full w-auto" src="/logo.png" alt="" />
        </a>
      </Link>
      <Link href="/search">
        <a>
          <FaSearch className="mr-7" size={25} />
        </a>
      </Link>
    </div>
  );
};
export default Navbar;
