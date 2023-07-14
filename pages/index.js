import Head from "next/head";
import React, { useState, useEffect } from "react";
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
import client from "./api/client";

export default function Main() {
  const onScroll = (value) => {
    if (typeof window !== "undefined") {
      scroller.scrollTo(`${value}`, {
        duration: 900,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  const { locale } = useRouter();
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const whoData = await client.fetch(`*[_type=='whoData']`);
      const cardsData = await client.fetch(`*[_type=='cardsData']`);
      const newsletterData = await client.fetch(`*[_type=='newsletterData']`);
      const booksData = await client.fetch(`*[_type=='booksData']`);
      let data = [whoData[0], cardsData[0], booksData[0], newsletterData[0]];
      if (data && data.length > 0) {
        setData(data);
      }
    };
    getProduct();
  }, []);
  return (
    <Animator>
      <main>
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
          {Data && Data.length > 0 && (
            <div>
              {" "}
              <div className="who">
                <Who Data={Data[0]} />
              </div>
              <div className="features">
                <Cards Data={Data[1]} />
              </div>
              <Book Data={Data[2]} />
              <div className="leaderboard">
                <Leaderboard />
              </div>
              <Collab />
              <Newsletter Data={Data[3]} />
            </div>
          )}
        </div>
        <Footer onScroll={onScroll} />
        {/* this is the dicount coupon */}
      </main>
    </Animator>
  );
}
