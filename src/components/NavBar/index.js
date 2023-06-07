import React from "react";
import { Box, Typography, Button } from "@mui/material";
import logo from "../../Assets/images/Naukrisaksham 1 1 (1).png";
import { RedButton } from "../AppButtom";

import "./style.css";
import "../../Assets/fonts.css";

export default function NavBar() {
  return (
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
        <a className="navLink" href="#">
          {" "}
          <Box className="navItem">About Us</Box>
        </a>
        <a className="navLink" href="#">
          {" "}
          <Box className="navItem">Contact</Box>
        </a>
      </Box>
      <Box className="buttonBox">
        <RedButton BtnText="Get Started" />
      </Box>
    </Box>
  );
}
