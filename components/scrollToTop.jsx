import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1500) {
      setVisible(true);
    } else if (scrolled <= 1500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  // window.addEventListener("scroll", toggleVisible);
  // addEventListener("scroll", toggleVisible);

  return (
    <FaArrowCircleUp
      className="fixed w-full left-[45vw] bottom-[15vw] text-[#5AFBD9]"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    />
  );
};
export default ScrollButton;
