import React, { useState } from 'react';

//Logos
import LearnersLogo from "../../Assets/images/LearnersLogo.png"
import CollegesLogo from "../../Assets/images/CollegesLogo.png"
import PlacementLogo from "../../Assets/images/Placement SuccessLogo.png"
import AverageCTCLogo from "../../Assets/images/Average CTC FresherLogo.png"
import MaximumCTCLogo from "../../Assets/images/Maximum CTALogo.png"

import MicrosoftLogo from "../../Assets/images/ForthBoxCompanyLogos/Microsoft.png"
import GoogleLogo from "../../Assets/images/ForthBoxCompanyLogos/Google.png"
import FlipkartLogo from "../../Assets/images/ForthBoxCompanyLogos/Flipkart.png"
import AdobeLogo from "../../Assets/images/ForthBoxCompanyLogos/Adobe.png"
import AmazonLogo from "../../Assets/images/ForthBoxCompanyLogos/Amazon.png"

import { Box, Typography } from "@mui/material";
//components
import PlacementCard from "../../components/PlacementCard"

import "./style.css";

export default function ForthBox() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const placementCompanyLogoCard = (logo, index) => {
    const className = hoveredIndex === index ? "placementCompanyLogosItem" : "placementCompanyLogosItemBlack";
    return (
      <Box
        className={className}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}>
        <img src={logo} />
      </Box>
    )
  }

  return (
    <Box className="container">

      <Box className="placementBox">

        <Box className="placementHeadingBox">
          <Typography className="placementHeading boldFont" sx={{ fontWeight: "bolder", textAlign: "center" }} variant='h4'>Impact Created</Typography>
          <Typography className="placementSubHeading" sx={{ textAlign: "center" }} variant="subtitle2">
            NaukriSaksham is a results-oriented and proactive initiative,
            committed to ensuring students achieve unparalleled career success.
          </Typography>
        </Box>

        <Box className="placementItems">
          <PlacementCard logo={LearnersLogo} FirsText="2.2k" secondText="Learners" />
          <PlacementCard logo={CollegesLogo} FirsText="800+" secondText="Colleges" />
          <PlacementCard logo={PlacementLogo} FirsText="94%" secondText="Placement Success" />
          <PlacementCard logo={AverageCTCLogo} FirsText="8.2 LPA" secondText="Average CTC Fresher" />
          <PlacementCard logo={MaximumCTCLogo} FirsText="29 LPA" secondText="Maximum CTA" />
        </Box>
        <Box className="placementCompanyLogosBox">
          <Box mb={5} className="companiesHeader">
            <Typography className='boldFont' sx={{ fontWeight: "bolder", textAlign: "center" }} variant='h4'>Companies hire from us</Typography>
          </Box>
          <Box className="placementCompanyLogosItems">
            {placementCompanyLogoCard(MicrosoftLogo, 0)}
            {placementCompanyLogoCard(FlipkartLogo, 1)}
            {placementCompanyLogoCard(GoogleLogo, 2)}
            {placementCompanyLogoCard(AmazonLogo, 3)}
            {placementCompanyLogoCard(AdobeLogo, 4)}
          </Box>
        </Box>
      </Box>
      <Box className="reviewBox"></Box>

    </Box>
  )
}
