import React, { useEffect } from "react";
import Loader from "../img/logo_icon_header_litle.svg";
import NProgress from "nprogress";

import "./loading.css";
export const Loading = () => {
  useEffect(() => {
    NProgress.start();
    NProgress.configure({ showSpinner: false });
    NProgress.set(0.6);
    return () => {
      NProgress.done();
    };
  }, []);

  // 

  return <img src={Loader} alt="load" className="main-loading" />;
};
