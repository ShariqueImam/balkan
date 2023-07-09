import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Book = () => {
  const { locale, locales, push } = useRouter();

  const style = {
    wrapper:
      "flex items-center justify-between w-[90%] md:w-[60%] flex-col md:flex-row font mx-auto my-12 md:my-16",
    bookInfoContainer: "mx-12 w-[95%] md:w-[50%]",
    para: "text-xl leading-[40px]",
    heading: "font-bold text-4xl md:text-5xl mb-8 mt-3",
    btn: "bg-red text-white px-4 md:px-8 py-3 md:py-3 my-4",
  };
  return (
    <div className={style.wrapper}>
      <Image height={450} width={450} src={"/book.webp"} />
      <section className={style.bookInfoContainer}>
        <p className={style.para}>            {locale == "en" ? "BOOK" : "КНИГА"}
</p>
        <h2 className={style.heading}> {locale == "en" ? '"20 Years On The Road"' : '"20 години по пътя"'}</h2>
        <p className={style.para}>
        {locale == "en" ? "Just as " : "Точно като"}
           <strong>Gumball 3000 </strong> {locale == "en" ? "  is much more than a car rally, 20 Years on the Road is much more than a car book. A best-of compilation of the glitzy and famed international event from the past two decades, this volume is as effervescent and exciting as the road trip itself." : "е много повече от автомобилно рали, 20 години на пътя е много повече от книга за кола. Най-доброто от компилация от бляскавото и известно международно събитие от миналото две десетилетия, този том е кипящ и вълнуващ като пътя самото пътуване."}
         
        </p>
        <button className={style.btn}> {locale == "en" ? "CHECK NOW" : "ПРОВЕРИ СЕГА"}</button>
      </section>
    </div>
  );
};

export default Book;
