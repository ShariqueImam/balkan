import React,{useState} from "react";
import Link from 'next/link';
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { useRouter } from "next/router";

const index = () => {
  const { locale, locales, push } = useRouter();
const [value, setvalue] = useState('');  const [Error, setError] = useState(false);
const [Click, setClick] = useState(false);
  const style = {
    wrapper: "applyBg flex flex-col items-center justify-center",
    input:
      "my-2 md:my-3 outline-none w-[90vw] md:w-[40vw] lg:w-[40vw] bg-transparent border-b-[1px] border-gray-500 text-2xl md:text-3xl lg:text-3xl py-4 text-zinc-400 placeholder:text-zinc-400 tracking-wider",
  };
  Cookies.set("applyRallyCar", value);
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
            <p className="text-white">7</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1" />
            <h2 className="text-gold font-semibold text-3xl md:text-3xl lg:text-3xl tracking-wide">
              {locale == "en" ? "Your Rally Car" : "Вашият рали автомобил"}
            </h2>
          </section>
          <section className="flex items-center justify-start text-xl">
            <p className="text-white transparent opacity-0">7</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
            <h2 className="text-gold font-semibold text-xl md:text-xl lg:text-xl tracking-wide my-2 md:my-3">
              {locale == "en"
                ? "This is the car you wish to drive should you be selected for participation"
                : "Това е колата, която желаете да управлявате, ако бъдете избрани за участие"}
            </h2>
          </section>

          {/* adding the input fields */}
          <section className="flex">
            <p className="text-white transparent opacity-0">1</p>
            <AiOutlineArrowRight className="text-white text-lg mx-1 transparent opacity-0" />
            <input
              type="text"
              placeholder="Type your answser here"
              className={style.input}  value={value}
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
          <Link href={!Error && Click ? "/apply-why" : {}} className="flex">
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
