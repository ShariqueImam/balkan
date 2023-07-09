import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import useWindowSize from "../../../hooks/useWindowSize";
import styled from "styled-components";
import Animator from "../../UI/Animator";
const style = {
  wrapper: "w-[100vw] flex flex-col",
};

const Home = (props) => {
  const [Item, setItem] = useState("home");
  const handleScroll = (value) => {
    setItem(value);
  };
  props.onScroll(Item);

  return (
    <Animator className={style.wrapper}>
      <div className="">
        <Navbar onScroll={handleScroll} />
        {/* adding the background image */}
        <div className="homeBg"></div>
      </div>
    </Animator>
  );
};
export default Home;
