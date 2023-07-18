import React from "react";
import { Box, Typography, Button } from "@mui/material";
import logo from "../../Assets/images/Naukrisaksham 2.png";
import { RedButton } from "../AppButton";

import "./style.css";
import "../../Assets/fonts.css";
import { handleAboutBoxScroll } from "../../Pages/AboutBox/Achievement"

export default function NavBar({ setEnrollBox }) {
  return (
    <Box className="navContainer">
      <Box className="navBar">
        <Box className="logoBox">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </Box>
        <Box className="navItems">
          <a style={{ cursor: "pointer" }} onClick={handleAboutBoxScroll} className="navLink" >
            {" "}
            <Box className="navItem">About Us</Box>
          </a>
          <a className="navLink" href="#">
            {" "}
            <Box className="navItem">Placements</Box>
          </a>
          <a className="navLink" href="#">
            {" "}
            <Box className="navItem">Programs</Box>
          </a>
          <a className="navLink" href="#">
            {" "}
            <Box className="navItem">Capabl Club</Box>
          </a>
          {/* <a className="navLink" href="#">
            {" "}
            <Box className="navItem">Contact</Box>
          </a> */}
        </Box>
        <Box className="buttonBox">
          <RedButton textSize="" onClick={() => setEnrollBox(true)} BtnText="Get Started" textClass="poppins" />
        </Box>
      </Box>
    </Box>
  );
}
