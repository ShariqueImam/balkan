import "../styles/globals.css";
import React, { useState } from "react";
import HttpsRedirect from "react-https-redirect";
import { appWithTranslation } from "next-i18next";
import CookieComp from "../components/Main/CookieComp/CookieComp";
function MyApp({ Component, pageProps }) {
  const [HandleCookie, setHandleCookie] = useState(true);
  const accept = () => {
    setHandleCookie(false);
  };
  const reject = () => {
    setHandleCookie(false);
  };

  return (
    // <HttpsRedirect>
      <div className="overflow-x-hidden font">
        {HandleCookie && <CookieComp accept={accept} reject={reject} />}
        <Component {...pageProps} />
      </div>
    // </HttpsRedirect>
  );
}

export default appWithTranslation(MyApp);
// export async function getStaticProps(context) {
//   return {
//     // the data in the props will be passed to the above function at the build time
//     props: {}, // will be passed to the page component as props
//   }
// }
