import React from "react";
import SingleCard from "./SingleCard";
import { useRouter } from "next/router";

const style = {
  wrapper:
    "flex flex-col w-[95%] md:w-[80%] lg:w-[70%] mx-auto items-center justify-center",
};
const Cards = () => {
  const { locale, locales, push } = useRouter();

  return (
    <div className={style.wrapper}>
      <section className="flex items-center justify-between my-8 md:mb-36 flex-wrap ">
        <SingleCard
          image={"/service1.webp"}
          heading={locale == "en" ? "MR GUMBALL 3000" : "MR GUMBALL 3000"}
          btn={false}
          line={
            locale == "en"
              ? "The idea for Gumball 3000 was always that it should be an adventure for the participants, an experience they are never going to forget. "
              : "Идеята за Gumball 3000 винаги е била това да бъде приключение за участниците, преживяване, което никога няма да забравят."
          }
        />
        <SingleCard
          image={"/service2.webp"}
          heading={locale == "en" ? "SPIRIT OF GUMBALL" : "ДУХЪТ НА ГЪМБОЛ"}
          line={
            locale == "en"
              ? "The annual Spirit of Gumball award is given to the rally team who truly embodies the character, personality, passion and determination of the brand from flag drop to the finish line."
              : "Годишната награда Spirit of Gumball се дава на рали отбора, който наистина въплъщава характера, личността, страстта и решителността на марката от падането на флага до финалната линия."
          }
          link="https://open.spotify.com/episode/0fXyCOLfbEPG2XuUmUAeLl?si=b8f699af75624e4a"
          btn={false}
        />
        <SingleCard
          image={"/service3.webp"}
          heading={locale == "en" ? "2023 RALLY" : "2023 РАЛИ"}
          line={
            locale == "en"
              ? "Apply to drive the 2023 Gumball 3000 Rally"
              : "Кандидатствайте за шофиране на Gumball 3000 Rally 2023"
          }
          link="https://open.spotify.com/episode/4BeOTgBiqtcXMaPvyv8VHf?si=abf184e10d0f4e79"
          btn={true}
        />{" "}
      </section>
    </div>
  );
};

export default Cards;
