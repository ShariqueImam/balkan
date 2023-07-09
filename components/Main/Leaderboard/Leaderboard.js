import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Leaderboard = () => {
  const style = {
    wrapper: "leaderboardBg",
    heading:
      "text-3xl md:text-5xl text-gold text-center p-6 md:p-8 tracking-wider",
  };
  const { locale } = useRouter();

  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>{locale == "en" ? "LEADERBOARDS" : "ТАБЛИЦИ"}</h2>
    </div>
  );
};

export default Leaderboard;
