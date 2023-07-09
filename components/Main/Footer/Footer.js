import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Signature from "./Signature";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
const style = {
  wrapper: "ml-0 bg-black font1",
  footerMenu: "flex flex-col ",
  footerContentContainer:
    "flex flex-col md:flex-row w-[100%] md:w-[70%] p-12 mx-auto",
  social: "flex md:w-[30%] my-7 md:my-3 mx-auto",
  menuHeading: "text-2xl md:text-2xl text-white tracking-wider",
  para: "text-white m-1 tracking-wider cursor-pointer",
  infoContainer: "text-white",
  infoHeading: "text-3xl md:text-4xl",
  infoPara: "",
  left: "flex flex-col items-center md:items-start justify-between md:w-[50%] mx-3 md:mx-12",
  right:
    "flex flex-col md:flex-row md:w-[50%] md:items-start md:justify-center",
};
const Footer = (props) => {
  const { locale } = useRouter();

  return (
    <div className={style.wrapper}>
      <section className={style.footerContentContainer}>
        <div className={style.footerMenu}>
          <h2 className={style.menuHeading}>FOOTER MENU</h2>
          <p className={style.para}>{locale == "en" ? "Home" : "У дома"}</p>
          <p className={style.para} onClick={() => props.onScroll("who")}>
            {locale == "en" ? "Who We Are" : "Кои сме ние"}
          </p>
          <p className={style.para} onClick={() => props.onScroll("features")}>
            {locale == "en" ? "Features" : " Характеристика"}
          </p>{" "}
          <p
            className={style.para}
            onClick={() => props.onScroll("leaderboard")}
          >
            {locale == "en" ? "Leaderboard" : " класация"}
          </p>{" "}
          <Link href={"/privacy-policy"}>
            <p className={style.para}>
              {locale == "en" ? "Privacy Policy" : " Политика за поверителност"}
            </p>
          </Link>
          <Link href={"/terms-and-conditions"}>
            <p className={style.para}>
              {" "}
              {locale == "en" ? "Terms and Conditions" : " Правила и условия"}
            </p>
          </Link>
          <Link href={"/terms-of-service"}>
            <p className={style.para}>
              {" "}
              {locale == "en" ? "Terms of Service" : " Условия за ползване"}
            </p>
          </Link>
        </div>
        <div className={style.social}>
          <Link href="">
            <AiFillFacebook className="text-3xl md:text-3xl mr-6 cursor-pointer text-white" />
          </Link>
          <Link href="">
            <AiFillTwitterCircle className="text-3xl md:text-3xl mr-6 cursor-pointer text-white" />
          </Link>
          <Link href="">
            <AiOutlineInstagram className="text-3xl md:text-3xl mr-6 cursor-pointer text-white" />
          </Link>
        </div>
        <section className={style.infoContainer}>
          <h2 className={style.infoHeading}>GUMBALL 3000</h2>
          <p className={style.infoPara}>
            {" "}
            {locale == "en"
              ? "Its a rally, not a race"
              : "Това е рали, а не състезание"}
          </p>
        </section>
      </section>
      <Signature />
    </div>
  );
};

export default Footer;

{
  /* <li className={style.para} onClick={() => props.onScroll("about")}>
ABOUT US
</li> */
}
