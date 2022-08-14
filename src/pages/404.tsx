/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";

const PageNotFound: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        alt="404" 
        src="/not-found.png"/>
    </div>
  );
};
export default PageNotFound;