import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Who = ({ Data }) => {
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
    height: 80vh;
  `;
  return (
    <div className={style.wrapper}>
      <p className={style.para}>{locale == "en" ? Data.who : Data.whoBG}</p>
      <HomeBackground />
    </div>
  );
};

export default Who;
