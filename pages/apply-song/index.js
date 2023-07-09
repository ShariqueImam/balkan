import React, { useState } from "react";
import Link from "next/Link";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { useRouter } from "next/router";
import axios from "axios";

const index = () => {
  const { locale, locales, push } = useRouter();
  const [value, setvalue] = useState("");
  const [Error, setError] = useState(false);
  const [Click, setClick] = useState(false);
  const style = {
    wrapper: "applyBg flex flex-col items-center justify-center",
    input:
      "my-2 md:my-3 outline-none w-[90vw] md:w-[40vw] lg:w-[40vw] bg-transparent border-b-[1px] border-gray-500 text-2xl md:text-3xl lg:text-3xl py-4 text-zinc-400 placeholder:text-zinc-400 tracking-wider",
  };
  Cookies.set("applySong", value);
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
    if (!Error && Click) submitHandler();
  };
  const tokenWithWriteAccess =
    "sk6SCEJL3UCOS1pIzILDR2oXzHTRlWExXpKfRR3OJwZ5AOpFpwU7cob9ktqZrxw82kx5C7bhMCrel3D44E7ZcpgCYj6t3hUfjeTuR46D8HYymwzAXvSpMGOwKv8MRfBZuU8gZTZdfmrLwuVDDZACbqPnc5PJtkSjyTZqWVmBzbMWqd5MoWRb";
  const submitHandler = (event) => {
    const sendData = async () => {
      const { data } = await axios.post(
        `https://so6le7q1.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "contact",
                createdAt: new Date().toISOString(),
                applyRally: Cookies.get("applyRally"),
                applyName: Cookies.get("applyName"),
                applyDob: Cookies.get("applyDob"),
                applyAddress: Cookies.get("applyAddress"),
                applyContact: Cookies.get("applyContact"),
                applyEmail: Cookies.get("applyEmail"),
                applyRallyCar: Cookies.get("applyRallyCar"),
                applyWhy: Cookies.get("applyWhy"),
                applyCoDriver: Cookies.get("applyCoDriver"),
                applySong: Cookies.get("applySong"),
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
      // to represent the success message
      const flashTime = setTimeout(() => {}, 2000);
      return () => {
        clearTimeout(flashTime);
      };
    };
    const sendEmail = (e) => {
      let dataToBeSentToEmail = {
        createdAt: new Date().toISOString(),
        name: Name,
        email: Email,
        message: Message,
      };
      emailjs
        .send(
          "service_75tlo9a",
          "template_h6l2e4k",
          dataToBeSentToEmail,
          "6BIY51JblL2XGIZJ8"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    };
    sendData();
    // sendEmail();
  };
  return (
    <Animator>
      <div className={style.wrapper}>
        <section className="">
          <section className="flex items-center justify-start text-xl">
            <p className="text-white">10</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1" />
            <h2 className="text-gold font-semibold text-3xl md:text-3xl lg:text-3xl tracking-wide">
              {locale == "en"
                ? "What is your ultimate driving song?              "
                : "Кой би бил вашият идеален навигатор?"}
            </h2>
          </section>
          {/* adding the input fields */}
          <section className="flex">
            <p className="text-white transparent opacity-0">1</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
            <input
              type="text"
              placeholder="Type your answer here"
              className={style.input}
              value={value}
              onChange={handleValueChange}
            />
          </section>{" "}
          {Error && (
            <section className="flex">
              <p className="text-white transparent opacity-0">1</p>
              <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
              <p className="text-red">*Please fill out the above details</p>
            </section>
          )}
          {/* adding the button */}
          <Link href={!Error && Click ? "/thank-you" : {}} className="flex">
            <section className="flex" onClick={handleClick}>
              <p className="text-white transparent opacity-0">1</p>
              <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
              <button className="flex items-center justify-center my-4 md:my-4 max-w-fit bg-gold px-4 md:px-6 py-2 md:py-3 text-white tracking-wider rounded hover:opacity-[0.9] transition duration-[300ms]">
                <p className="font-semibold">
                  {" "}
                  {locale == "en" ? "Submit" : "Изпращане"}
                </p>
                <BsCheck2 className="text-white text-xl mx-1" />
              </button>
            </section>
          </Link>
        </section>
      </div>
    </Animator>
  );
};

export default index;
