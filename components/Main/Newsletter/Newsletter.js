import React, { useState } from "react";
import { useRouter } from "next/router";
const style = {
  wrapper: "bg-[#f9f9f9] flex flex-col items-center justify-center py-20",
  newsletterHeading:
    "text-2xl md:text-3xl w-[90%] md:w-[60%] mx-auto text-center font-semibold",
  newsletterContainer:
    "flex items-center justify-center my-4 md:my-10 ",
  input:
    "px-6 md:px-8 py-2 md:py-3 text-lg bg-white border-[1px] border-gray-300 outline-none ring-none",
  btn: "bg-black text-red px-6 md:px-8 py-2 md:py-3 text-lg border-[1px] border-black hover:bg-opacity-[0.9] transition duration-[250ms]",
};
const Newsletter = () => {
  const { locale } = useRouter();
  const [newsletter, setnewsletter] = useState("");
  const handleNewsletterChange = (event) => {
    setnewsletter(event.target.value);
  };
  return (
    <div className={style.wrapper}>
      <p className={style.newsletterHeading}>
        {locale == "en"
          ? "Subscribe to the Gumball 3000 newsletter for exclusive products, new arrivals and sneaker launches"
          : "Абонирайте се за бюлетина на Gumball 3000 за ексклузивни продукти, нови постъпления и пускане на маратонки"}
      </p>
      <section className={style.newsletterContainer}>
        <input
          className={style.input}
          type="text"
          onChange={handleNewsletterChange}
          placeholder={locale == "en" ? "Enter your email" : "Въведете своя имейл"}
          value={newsletter}
        />
        <button className={style.btn}>{locale == "en" ? "Subscribe" : "Абонирай се"}</button>
      </section>
    </div>
  );
};

export default Newsletter;
