import React from "react";

//Components
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import FeatureCards from "./Pages/FeatureCards"
import SecondBox from "./Pages/SecondBox";
import WorkFlow from "./Pages/WorkFlow";
import ForthBox from "./Pages/ForthBox";
import ForthBoxCard from "./Pages/ForthBox/ForthBoxCards";
import CompanyLogoBox from "./Pages/ForthBox/CompanyLogoBox"
import LearningBox from "./Pages/LearningBox";
import MediaBox from "./Pages/MediaBox";
import Onboarding from "./Pages/Onboarding"
import { CertificateBox } from "./Pages/CertificateBox";
import About from "./Pages/AboutBox/Achievement"
import Footer from "./Pages/Footer"
import { ScrollToTopButton } from "./components/ScrollToTop"
import Call from "./components/MakeCall/Call";
import "./style.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <FeatureCards />
      <WorkFlow />
      <ForthBox />
      <CompanyLogoBox />
      <ForthBoxCard />
      <LearningBox />
      <MediaBox />
      <Onboarding />
      <CertificateBox />
      <About />
      <Footer />
      <ScrollToTopButton />
      <Call />
    </>
  );
}
