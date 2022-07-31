/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <div className="fixed bg-transparent">
      <Link href="/">
        <a>
        <img className="h-full w-auto" src="/logo.png" alt="" />
        </a>
      </Link>
    </div>
  );
};
export default Navbar;
