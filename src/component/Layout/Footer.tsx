/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer: NextPage = () => {
  return (
    <div className="flex justify-between py-4 px-4">
      <div className="text-1 md:flex">
        <span className="hidden md:block">Copyright</span><span></span>&nbsp;<span> KienHuynh</span> © <span className="hidden md:block">2022</span>
      </div>
      <div className="inline-flex">
        <span className="mr-3 hidden md:block">Contact me:</span>
        <div className="flex">
          <Link href="/">
            <a>
              <FaGithub className="mr-2" size={25} />
            </a>
          </Link>
          <Link href="/">
            <a>
              <FaFacebook className="mr-2" size={25} />
            </a>
          </Link>
          <Link href="/">
            <a>
              <FaLinkedin className="mr-2" size={25} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
