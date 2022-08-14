import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from "next";
import {getHomeData}  from '../utils/api'

const Home: NextPage = () => {
  return (
    <div>

    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await getHomeData()
    return {
      props: {
        data,
      },
    };
  }catch (error) {
    console.log(error)
    return {
      notFound: true,
      revalidate: true,
    }
  }
}
export default Home