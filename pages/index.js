import Head from "next/head";
import React, { useState } from "react";
import Home from "../components/Main/Home/Home";
import Cards from "../components/Main/Cards/Cards";
import Footer from "../components/Main/Footer/Footer";
import Book from "../components/Main/Book/Book";
import Who from "../components/Main/Who/Who";
import Animator from "../components/UI/Animator";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";
import Newsletter from "../components/Main/Newsletter/Newsletter";
import Leaderboard from "../components/Main/Leaderboard/Leaderboard";
import Collab from "../components/Main/Collab/Collab";

const style = {
  wrapper: "",
};
export default function Main() {
  const onScroll = (value) => {
    console.log(value)
    if (typeof window !== "undefined") {
      // browser code
      scroller.scrollTo(`${value}`, {
        duration: 900,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  const { locale } = useRouter();
  console.log(locale);
  return (
    <Animator>
      <div className={style.wrapper}>
        <Head>
          <title>
            {locale == "en" ? " Balkan Pursuits" : "Balkan Pursuits "}{" "}
          </title>
          <meta
            name="description"
            content=" My Model Ride | Selling Car Products "
          />
          <link rel="icon" href="/logo.png" />
        </Head>
        <div className="">
          <h2 className="text-center font text-gold bg-black p-1 tracking-wider">
            {locale == "en"
              ? "   24% OFF COLLECTIONS"
              : "24% ОТСТЪПКА ЗА КОЛЕКЦИИ"}
          </h2>
          <Home onScroll={onScroll} />
          <div className="who">
            <Who />
          </div>
          <div className="features">
            <Cards />
          </div>
          <Book />
          <div className="leaderboard">
            <Leaderboard />
          </div>
          <Collab />
          <Newsletter />
        </div>
        <Footer onScroll={onScroll} />
        {/* this is the dicount coupon */}
      </div>
    </Animator>
  );
}
