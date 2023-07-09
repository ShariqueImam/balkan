import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const style = {
  wrapper:
    "bg-white fixed bottom-[0] w-[100%] flex items-center md:items-start justify-center flex-col py-7 md:py-8 ",
  btnContainer:
    "w-[95%] md:w-[50%] mx-auto my-3 md:my-4 flex flex-col md:flex-row items-center md:items-start ",
};
const CookieComp = (props) => {
  const handleAccept = () => {
    Cookies.set("1", "cookie1");
    Cookies.set("2", "cookie2");
    Cookies.set("3", "cookie3");
    Cookies.set("4", "cookie4");
    Cookies.set("5", "cookie5");
    Cookies.set("6", "cookie6");
    Cookies.set("7", "cookie7");
    Cookies.set("8", "cookie8");
    Cookies.set("9", "cookie9");
    Cookies.set("10", "cookie10");
    props.accept();
  };
  const handleReject = () => {
    props.reject();
  };
  const { locale } = useRouter();
  return (
    <div className={style.wrapper} style={{ zIndex: 30 }}>
      <p className="w-[95%] md:w-[50%] mx-auto text-center md:text-start">
        {locale == "en"
          ? "We use cookies to enhance your browser experience,serve personalized adsor content, and analyze our traffic. By Clicking, 'Accept All', youconsent to use our cookies"
          : "Ние използваме бисквитки, за да подобрим изживяването на вашия браузър,да предоставяме персонализирани реклами или съдържание и да анализираме нашия трафик. Като щракнете върху 'Приемам всички', вие се съгласяватеда използвате нашите бисквитки"}
      </p>
      <div className={style.btnContainer}>
        <button
          onClick={handleAccept}
          className="mr-4 md:mr-8 px-5 py-2 md:px-7 md:py-2 text-lg md:text-lg bg-red   text-white my-4 md:my-0"
        >
          {" "}
          {locale == "en" ? "         Reject All" : " Отхвърляне на всички"}
        </button>
        <button
          onClick={handleReject}
          className="mr-4 md:mr-8 px-5 py-2 md:px-7 md:py-2 text-lg md:text-lg bg-black text-white my-4 md:my-0"
        >
          {" "}
          {locale == "en" ? " Accept All" : " Приемам всичко"}
        </button>
      </div>
    </div>
  );
};

export default CookieComp;
