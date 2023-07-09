import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Who = () => {
  const { locale, locales, push } = useRouter();

  const style = {
    wrapper:
      "w-[90%] md:w-[60%] text-center py-12 md:py-24 flex items-center justify-center mx-auto flex-col",
    para: "font text-xl md:text-3xl lg:text-3xl text-black pb-24",
  };
  const HomeBackground = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
      url("/homebg1.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    width: 100vw;
    height: 8 0vh;
  `;
  return (
    <div className={style.wrapper}>
      <p className={style.para}>
       
        {locale == "en" ? " Founded in 1999 by British entrepreneur Maximillion Cooper, Gumball 3000 is a car rally which has taken thousands of supercars and entrants on an epic journey all across the globe, touching down on every continent to create one of the greatest bucket list experiences possible behind a wheel." : "Основана през 1999 г. от британския предприемач Максимилион Купър, Gumball 3000 е автомобилно рали, което взе хиляди суперколи и участници на епично пътешествие по целия свят, докосвайки се до всеки континент създайте едно от най-добрите възможни изживявания с списък с кофи зад a колело."}

      </p>
      <HomeBackground />
    </div>
  );
};

export default Who;
