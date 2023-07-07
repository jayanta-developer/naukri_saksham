import React, { useState, useEffect } from "react";
import "./style.css"; // You can create a separate CSS file for styling
import upArrow from "../../Assets/images/up-arrow-removebg-preview.png";
import { Typography } from "@mui/material";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const topPosition = window.innerWidth < 600 ? 600 : 0;
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      {/* <img className="goUpArrow" src={upArrow} /> */}
      <Typography className="goUpArrowText">Enroll Now</Typography>
    </div>
  );
};

export default ScrollToTopButton;
