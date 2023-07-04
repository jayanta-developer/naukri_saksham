import React from "react";

//Components
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import SecondBox from "./Pages/SecondBox";
import WorkFlow from "./Pages/WorkFlow";
import ForthBox from "./Pages/ForthBox";
import ForthBoxBanar from "./Pages/ForthBox/ForthBoxBanar";
import ForthBoxCard from "./Pages/ForthBox/ForthBoxCards";
import CompanyLogoBox from "./Pages/ForthBox/CompanyLogoBox"
import LearningBox from "./Pages/LearningBox";
import MediaBox from "./Pages/MediaBox";
import CertificateBox from "./Pages/CertificateBox";
import Footer from "./Pages/Footer"

import "./style.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <WorkFlow />
      <ForthBox />
      <CompanyLogoBox />
      {/* <ForthBoxBanar /> */}
      <ForthBoxCard />
      <LearningBox />
      <MediaBox />
      <SecondBox />
      <CertificateBox />
      <Footer />
    </>
  );
}
