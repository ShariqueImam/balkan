import React, { useState, useEffect } from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import Link from 'next/link';
import NavDrawer from "./NavDrawer";
import { useRouter } from "next/router";
import Image from "next/image";
import "animate.css";
const Navbar = (props) => {
  const style = {
    navDrawer: "flex sm:hidden items-center ",
    wrapper:
      "text-gray-900 pt-1 md:py-2 z-10 w-[100%] md:w-[70%] bg-white bg-opacity-[0.9] mx-auto self-center",
    mainNav:
      "flex items-center justify-between py-1 md:py-1 hidden sm:flex w-[100%] md:w-[90%] mx-auto",
    list: "border-move-animation list-none cursor-pointer text-black font-thin md:mx-4  text-md   font-normal tracking-wide",
    navContainer: "flex items-center justify-center",
    cartButton:
      "tracking-wider flex items-center justify-center mx-5 bg-red text-white px-3 py-2 text-md   hover:opacity-[0.93] transition duration-[250ms]",
    img: "cursor-pointer",
    input: "bg-transparent text-black cursor-pointer",
  };
  const [Enter, setEnter] = useState(false);
  const [Item, setItem] = useState("home");
  const { locale, locales, push } = useRouter();

  props.onScroll(Item);
  const handleScroll = (val) => {
    setItem(val);
  };
  const handleOptionChange = (e) => {
    push("/", undefined, { locale: e.target.value });
  };

  return (
    // install the mui first for the Navdrawer
    <div className={style.wrapper}>
      <nav className={style.mainNav}>
        <div className={style.img}>
          <Link href="/">
            {/* <h2 className="text-3xl font-bold text-black">Logo Here</h2> */}
            <Image
              src={"/logo.png"}
              height={150}
              width={150}
              alt="logo for website"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center font1 ">
          <ul className={style.navContainer}>
            <Link href="/" locale={locale}>
              <li className={style.list}>
                {locale == "en" ? "HOME" : "У ДОМА"}
              </li>
            </Link>{" "}
            <li className={style.list} onClick={() => setItem("who")}>
              {locale == "en" ? "WHO WE ARE" : " КОИ СМЕ НИЕ"}
            </li>
            <li className={style.list} onClick={() => setItem("features")}>
              {locale == "en" ? "FEATURES" : " ХАРАКТЕРИСТИКА"}
            </li>{" "}
            <li className={style.list} onClick={() => setItem("leaderboard")}>
              {locale == "en" ? "LEADERBOARD" : " ТАБЛА"}
            </li>{" "}
          </ul>
          <Link href="/apply" locale={locale}>
            <button
              className={style.cartButton}
              // onMouseEnter={() => setEnter(true)}
              // onMouseLeave={() => setEnter(false)}
            >
              {" "}
              {locale == "en" ? "APPLY TO DRIVE" : " КАНДИДАТСТВАЙТЕ В ДРАЙВ"}
              <BsSpeedometer2
                className={`text-2xl md:text-xl text-white   mx-2 ${
                  Enter && "animate__animated animate__tada"
                }`}
              />
            </button>
          </Link>
          <select
            name="forward_reason_business"
            requiblack="requiblack"
            onChange={handleOptionChange}
            className={style.input}
          >
            <option value="bg" selected={locale == "bg" ? true : false}>
              BG
            </option>
            <option value="en" selected={locale == "en" ? true : false}>
              EN
            </option>
          </select>
        </div>
      </nav>
      <div className={style.navDrawer}>
        <NavDrawer onScroll={handleScroll} />
      </div>
    </div>
  );
};

export default Navbar;
