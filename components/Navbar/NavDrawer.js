import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";

const NavDrawer = (props) => {
  const { locale, locales, push } = useRouter();
  const handleOptionChange = (e) => {
    push("/", undefined, { locale: e.target.value });
  };
  const { width } = useWindowSize();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const style = {
    list: "list-none cursor-pointer  text-black my-3  mx-auto md:mx-4 hover:opacity-[0.8] text-sm",
    input: "bg-transparent mx-4",
  };
  const list = (anchor) => (
    <Box
      sx={{
        zIndex: "0",
        color: "rgb(255,255,255)",
        backgroundColor: "#fff",

        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : width < 500
            ? 240
            : width > 500 && width < 1000
            ? 380
            : 350,
        height: 1200,
        letterSpacing: "1px",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="h-[40vh] font flex flex-col my-8 bg-white items-center">
          {/* <Image src={""} height={1} width={1}/> */}
          <div className="mx-auto my-16">
            <img src={"/logo.png"} height={150} width={150} />
          </div>{" "}
          {/* adding the navs */}
          <ul className="flex  flex-col">
            <Link href="/" className="text-center">
              <li className={style.list}>
                {locale == "en" ? "HOME" : "НАЧАЛО"}
              </li>
            </Link>
            <li className={style.list} onClick={() => props.onScroll("who")}>
              {" "}
              {locale == "en" ? "Who We Are" : "Кои сме ние"}
            </li>{" "}
            <li
              className={style.list}
              onClick={() => props.onScroll("features")}
            >
              {" "}
              {locale == "en" ? "Features" : "Характеристика"}
            </li>
            <li
              className={style.list}
              onClick={() => props.onScroll("leaderboard")}
            >
              {" "}
              {locale == "en" ? "Leaderboard" : "класация"}
            </li>
          </ul>
          <Link href="/apply">
            <button className="mx-auto bg-red text-white px-12 py-2 mt-48  cursor-pointer hover:opacity-[0.9]">
              {locale == "en" ? "APPLY TO DRIVE!" : "КАНДИДАТСТВАЙТЕ В ДРАЙВ!"}
            </button>
          </Link>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {/* below string will set the location of the drawer */}
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="px-2 my-1 flex items-center justify-between w-[100vw]">
            {" "}
            <div>
            <img src={"/logo.png"} height={80} width={80} />
            </div>
            <section className="flex">
              <select
                name="forward_reason_business"
                required="required"
                onChange={handleOptionChange}
                className={style.input}
              >
                <option value="bg" selected={locale == "bg" ? true : false}>
                  BG
                </option>
                <option value="en" selected={locale == "en" ? true : false}>
                  EN
                </option>
              </select>
              <div className="" onClick={toggleDrawer(anchor, true)}>
                {
                  <svg
                    viewBox="0 0 100 80"
                    width="30"
                    height="20"
                    style={{ fill: "#DC3535" }}
                  >
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                  </svg>
                }
              </div>
            </section>
          </button>
          <div className="">
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              hideBackdrop={false}
              style={{
                zIndex: 20,
              }}
            >
              {list(anchor)}
            </Drawer>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavDrawer;
