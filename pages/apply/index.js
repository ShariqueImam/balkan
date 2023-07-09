import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import Animator from "../../components/UI/Animator";
const index = () => {
  const { locale, locales, push } = useRouter();

  return (
    <Animator>
      <div className="applyBg flex flex-col items-center justify-center">
        <section className="">
          <h2 className="text-gold font-semibold text-4xl md:text-5xl lg:text-5xl tracking-wide">
            {locale == "en"
              ? "          Ready for the adventure of a lifetime?"
              : "Готови ли сте за приключението на живота си?"}
          </h2>
          <Link href="/apply-rally">
            <button className="my-4 md:my-4 max-w-fit bg-gold px-4 md:px-6 py-2 md:py-3 text-white tracking-wider rounded hover:opacity-[0.9] transition duration-[300ms]">
              {locale == "en" ? "  Apply Now" : "Запиши се сега"}
            </button>
          </Link>
        </section>
      </div>
    </Animator>
  );
};

export default index;
