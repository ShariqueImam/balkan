import React from "react";
const Collab = () => {
  const style = {
    wrapper: "flex flex-col  items-center justify-center",
    container: "flex flex-col md:flex-row items-stretch justify-center",
    img: "w-28 md:w-32 m-4 md:m-16",
  };
  let width = 50;
  let height = 10;
  return (
    <div className={style.wrapper}>
      <section className={style.container}>
        <img src={"/1.webp"} className={style.img} />
        <img src={"/2.webp"} className={style.img} />
        <img src={"/3.webp"} className={style.img} />
        <img src={"/4.webp"} className={style.img} />
        <img src={"/5.webp"} className={style.img} />
      </section>
      <section className={style.container}>
        <img src={"/6.webp"} className={style.img} />
        <img src={"/7.webp"} className={style.img} />
        <img src={"/8.webp"} className={style.img} />
        <img src={"/9.webp"} className={style.img} />
        <img src={"/10.webp"} className={style.img} />
      </section>
    </div>
  );
};

export default Collab;
// height={height} width={width}
// height={height} width={width}
// height={height} width={width}
// height={height} width={width}
// height={height} width={width}
// height={height} width={width}
// height={height} width={width}
// height={height} width={width}
// height={height} width={width}
// height={height} width={width}
