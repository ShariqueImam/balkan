import React, { useState } from "react";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const index = () => {
  const { locale, locales, push } = useRouter();
  const [SelectedItem, setSelectedItem] = useState("item1");
  Cookies.set("applyRally", SelectedItem);
  return (
    <Animator>
      <div className="applyBg flex flex-col items-center justify-center">
        <section className="">
          {/* adding the number and small heading */}
          <section className="flex items-center justify-start text-xl">
            <p className="text-white">1</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1" />
            <h2 className="text-gold font-semibold text-3xl md:text-3xl lg:text-3xl tracking-wide">
              {locale == "en"
                ? "Thanks for your interest in joining."
                : "Благодарим ви за интереса към присъединяването."}
            </h2>
          </section>
          <section className="flex items-center justify-start text-xl my-4 md:my-5">
            <p className="text-white transparent opacity-0">1</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
            <h2 className="text-gold font-semibold text-3xl md:text-3xl lg:text-3xl tracking-wide">
              {locale == "en"
                ? "            Which Rally are you interested in Applying for?"
                : "За кое рали искате да кандидатствате?"}
            </h2>
          </section>
          <section
            className="flex items-center cursor-pointer"
            onClick={() => setSelectedItem("item1")}
          >
            <p className="text-white transparent opacity-0">1</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
            <section
              className={`transition duration-[300ms] flex items-center border-2 border-white rounded px-3 md:px-4 py-3 md:py-3  hover:bg-gray-100 hover:bg-opacity-[0.3] ${
                SelectedItem == "item1" && "bg-opacity-[0.3] bg-gray-100"
              }`}
            >
              <p className="text-white text-xl md:text-xl">
                {" "}
                {locale == "en" ? "25th Anniversary" : "25-та годишнина"}
              </p>{" "}
              <BsCheck2 className="text-white text-3xl mx-2" />
            </section>
          </section>
          <Link href="/apply-name" className="flex">
            <p className="text-white transparent opacity-0">1</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
            <button className="flex items-center justify-center my-4 md:my-4 max-w-fit bg-gold px-4 md:px-6 py-2 md:py-3 text-white tracking-wider rounded hover:opacity-[0.9] transition duration-[300ms]">
              <p className="font-semibold">
                {" "}
                {locale == "en" ? "OK" : "Добре"}
              </p>
              <BsCheck2 className="text-white text-xl mx-1" />
            </button>
          </Link>
        </section>
      </div>
    </Animator>
  );
};

export default index;
