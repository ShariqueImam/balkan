import React from "react";
import SingleCard from "./SingleCard";
import { useRouter } from "next/router";

const style = {
  wrapper:
    "flex flex-col w-[95%] md:w-[80%] lg:w-[70%] mx-auto items-center justify-center",
};
const Cards = ({ Data }) => {
  const { locale, locales, push } = useRouter();

  return (
    <div className={style.wrapper}>
      <section className="flex items-center justify-between my-8 md:mb-36 flex-wrap ">
        <SingleCard
          image={"/service1.webp"}
          heading={locale == "en" ? Data.card1Heading : Data.card1HeadingBG}
          btn={false}
          line={
            locale == "en" ? Data.card1Description : Data.card1DescriptionBG
          }
        />
        <SingleCard
          image={"/service2.webp"}
          heading={locale == "en" ? Data.card2Heading: Data.card2HeadingBG}
          line={
            locale == "en"
              ? Data.card2Description
              : Data.card2DescriptionBG
          }
          btn={false}
        />
        <SingleCard
          image={"/service3.webp"}
          heading={locale == "en" ? Data.card3Heading : Data.card3HeadingBG}
          line={
            locale == "en"
              ? Data.card3Description
              : Data.card3DescriptionBG
          }
          btn={true}
        />{" "}
      </section>
    </div>
  );
};

export default Cards;
