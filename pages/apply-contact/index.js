import React, { useState } from "react";
import Link from 'next/link';
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { useRouter } from "next/router";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";

const index = () => {
  const { locale, locales, push } = useRouter();
  const style = {
    wrapper: "applyBg flex flex-col items-center justify-center",
    input:
      "my-2 md:my-3 outline-none w-[90vw] md:w-[40vw] lg:w-[40vw] bg-transparent border-b-[1px] border-gray-500 text-2xl md:text-3xl lg:text-3xl py-4 text-zinc-400 placeholder:text-zinc-400 tracking-wider",
  };
  const [value, setvalue] = useState("");  const [Error, setError] = useState(false);
  const [Click, setClick] = useState(false);
  Cookies.set("applyContact", value);
  const handleValueChange = (event) => {
    if (event.target.value !== "") {
      setError(false);
      setvalue(event.target.value);
      setClick(true);
      return;
    }
    setvalue(event.target.value);
    setError(true);
  };
  const handleClick = () => {
    setClick(true);
    if (!value) setError(true);
  };

  return (
    <Animator>
      <div className={style.wrapper}>
        <section className="">
          <section className="flex items-center justify-start text-xl">
            <p className="text-white">5</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1" />
            <h2 className="text-gold font-semibold text-3xl md:text-3xl lg:text-3xl tracking-wide">
              {locale == "en"
                ? "Your Contact Number"
                : "Вашият номер за връзка"}
            </h2>
          </section>

          {/* adding the input fields */}
          {/* <section className="flex">
          <p className="text-white transparent opacity-0">1</p>
          <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
          <PhoneInput
          defaultCountry="bg"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          className={style.input}
          />
        </section> */}
          <section className="flex">
            <p className="text-white transparent opacity-0">1</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
            <input
              type="text"
              placeholder="(+359) 2 123 1234"
              className={style.input}
              value={value}
              onChange={handleValueChange}
            />
          </section>   {Error && (
            <section className="flex">
              <p className="text-white transparent opacity-0">1</p>
              <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
              <p className="text-red">*Please fill out the above details</p>
            </section>
          )}
          {/* adding the button */}
          <Link href={!Error && Click ? "/apply-email" : {}} className="flex">
            <p className="text-white transparent opacity-0">1</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
            <button     onClick={handleClick}className="flex items-center justify-center my-4 md:my-4 max-w-fit bg-gold px-4 md:px-6 py-2 md:py-3 text-white tracking-wider rounded hover:opacity-[0.9] transition duration-[300ms]">
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
