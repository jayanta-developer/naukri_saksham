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
          <a className="navLink" href="#">
            {" "}
            <Box className="navItem">Home</Box>
          </a>
          <a className="navLink" href="#">
            {" "}
            <Box className="navItem">Course </Box>
          </a>
          <a className="navLink" href="#">
            {" "}
            <Box className="navItem">Companies</Box>
          </a>
          <a className="navLink" href="#">
            {" "}
            <Box className="navItem">Resources</Box>
          </a>
          <a style={{ cursor: "pointer" }} onClick={handleAboutBoxScroll} className="navLink" >
            {" "}
            <Box className="navItem">About Us</Box>
          </a>
          <a className="navLink" href="#">
            {" "}
            <Box className="navItem">Contact</Box>
          </a>
        </Box>
        <Box className="buttonBox">
          <RedButton onClick={() => setEnrollBox(true)} BtnText="Get Started" />
        </Box>
      </Box>
    </Box>
  );
}
