import React from "react";
import { useRouter } from "next/router";

const style = {
  wrapper:
    " flex flex-col md:flex-row items-center md:items-center md:mt-8 py-5 p-3 md:p-8",
  para: "text-sm text-white text-center mx-auto",
};
const Signature = () => {
  const { locale } = useRouter();

  return (
    <div className={style.wrapper}>
      <p className={style.para}>
        {locale == "en"
          ? "© 2023 Gumball 3000 | The Gumball 3000 name and logo are registered trademarks ® of Gumball 3000 Group Limited | All rights reserved 2023."
          : "© 2023 Gumball 3000 | The Името и логото на Gumball 3000 са регистрирани търговски марки ® на Gumball 3000 Group Limited | Всички права запазени 2023 г."}
      </p>
    </div>
  );
};

export default Signature;
