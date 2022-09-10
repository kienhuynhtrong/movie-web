import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { getHomeData } from "../utils/api";
import { Item } from "../utils/type";
import Image from "../component/Common/image";
import { imageOriginal } from "../utils/constant";
import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";
import { useEffect } from "react";
import useSound from 'use-sound'
import mySound from '/intro.mp3'
interface HomeProps {
  data: {
    [id: string]: Item[];
  };
  main: Item;
}

const Home: NextPage<HomeProps> = ({ data, main }) => {
  const { poster_path, backdrop_path, title, overview } = main;
  // const [playSound] = useSound(mySound, { interrupt: true })
  const playAudioTest = async () => {
    var x = document.createElement("AUDIO");
    x.setAttribute("src", "/intro.mp3");
    x.setAttribute("autoplay", '');
    x.setAttribute("controls", "");
    x.setAttribute("class", "audio");
    x.setAttribute("type", "audio/mpeg");
    x.setAttribute("muted", "true");
    await document.body.appendChild(x);
  }
  return (
    <div className="w-screen h-screen relative">
      <Image
        src={imageOriginal(main.backdrop_path)}
        alt="imgBackDrop"
        opacity={0.5}
        className="w-screen h-[375px] md:h-auto"
      ></Image>
      <div className="absolute flex flex-col-reverse md:flex-row-reverse top-[25%] items-center md:top-[20%] md:w-screen md:justify-around">
        <div className="flex flex-col items-center md:max-w-lg max-w-sm md:block">
          <p className="text-[17px] md:text-4xl">{title}</p>
          <p className="text-[14px] text-center md:text-left md:text-2xl mt-5">{overview}</p>
          <div className="flex gap-3 mt-5">
            <button className=" flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <FaPlayCircle />
              <span className="ml-[3px]">Watch Now</span>
            </button>
            <button className=" flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <FaInfoCircle></FaInfoCircle>
              <span className="ml-[3px]">View Info</span>
            </button>
          </div>
        </div>
        <Image
          className="lg:w-[300px] w-[200px]"
          src={imageOriginal(main.poster_path)}
          alt="imgPoster"
        ></Image>
      </div>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await getHomeData();
    const trending = data["Trending Movies"];
    console.log(trending);
    const main = trending[new Date().getDate() % trending.length];
    return {
      props: {
        data,
        main,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
      revalidate: true,
    };
  }
};
export default Home;
