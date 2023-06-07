import React from "react";
//Components
import Home from "./Pages/Home";
import NavBar from "./components/NavBar/index.js";
// import Works from "./Pages/Works";
// import Contact from "./Pages/Contact";
import { Box } from "@mui/material";
import "./style.css";

export default function App() {
  return (
    <Box className="homePage">
      <NavBar />
      <Home />
      {/* <Works />
      <Contact /> */}
    </Box>
  );
}
