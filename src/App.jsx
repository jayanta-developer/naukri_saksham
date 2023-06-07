import React from "react";
//Components
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import SecondBox from "./Pages/SecondBox";
// import Contact from "./Pages/Contact";
import { Box } from "@mui/material";
import "./style.css";

export default function App() {
  return (
    <Box className="homePage">
      <NavBar />
      <Home />
      <SecondBox />
      {/* <Contact /> */}
    </Box>
  );
}
