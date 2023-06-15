import React from "react";

import { Box } from "@mui/material";
//Components
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import SecondBox from "./Pages/SecondBox";
import WorkFlow from "./Pages/WorkFlow";
import ForthBox from "./Pages/ForthBox";

import "./style.css";

export default function App() {
  return (
    <Box className="homePage">
      <NavBar />
      <Home />
      <SecondBox />
      <WorkFlow />
      <ForthBox />
    </Box>
  );
}
