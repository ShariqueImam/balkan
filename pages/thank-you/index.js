import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AiOutlineRollback } from "react-icons/ai";
import Link from "next/link";
import Footer from "../../components/Main/Footer/Footer";
import { useRouter } from "next/router";
const style = {
  wrapper: "min-h-[100vh] flex flex-col items-between justify-between",
};
const index = () => {
  const { locale } = useRouter();
  const handleScroll = () => {};

  
  return (
    <div className={style.wrapper}>
      <Navbar onScroll={handleScroll} />
      <div className="flex flex-col items-between justify-between min-h-[100vh]">
        <h2 className="pt-24 text-center text-black text-2xl md:text-3xl my-12">
          {" "}
          {locale == "en"
            ? "We have received your application. Our team will contact you soon"
            : "Получихме вашето заявление. Нашият екип ще се свърже с вас скоро"}
        </h2>
        <Link href="/">
          <section className="hover:opacity-[0.9] transition duration-[300ms] flex items-center justify-center bg-red text-white max-w-fit p-4 rounded-full mx-auto">
            <AiOutlineRollback className="mx-4 text-2xl" />
            <button className="tracking-wider px-3">
              {" "}
              {locale == "en" ? "Go Back" : "Върни се"}
            </button>
          </section>
        </Link>
        <Footer onScroll={handleScroll} />
      </div>
    </div>
  );
};
export default index;
