import React from "react";
//Components
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import SecondBox from "./Pages/SecondBox";
import WorkFlow from "./Pages/WorkFlow";
import { Box } from "@mui/material";
import "./style.css";

export default function App() {
  return (
    <Box className="homePage">
      <NavBar />
      <Home />
      <SecondBox />
      {/* <WorkFlow /> */}
    </Box>
  );
}
