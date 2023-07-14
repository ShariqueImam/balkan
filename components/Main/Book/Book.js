import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
const Book = ({Data}) => {
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
        <p className={style.para}>
          {" "}
          {locale == "en" ? Data.booksSmallHeading : Data.booksSmallHeadingBG}
        </p>
        <h2 className={style.heading}>
          {" "}
          {locale == "en" ? Data.booksMainHeading : Data.booksMainHeadingBG}
        </h2>
        <p className={style.para}>
          {locale == "en" ? Data.booksDescription : Data.booksDescriptionBG}
        </p>
        <Link href={"/apply"}>
          <button className={style.btn}>
            {locale == "en" ? "CHECK NOW" : "ПРОВЕРИ СЕГА"}
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Book;
