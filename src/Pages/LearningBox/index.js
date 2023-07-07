import React, { useState } from "react";
import LearningBoxCoverPhoto from "../../Assets/images/student-online-cute-young-guy-studying-computer-glasses-green-shirt-smiling-pointing 1.png";
import { Box, Typography } from "@mui/material";
import Polygon from "../../Assets/images/Polygon 1.svg";
import WhatsAppImage from "../../Assets/images/WhatsApp Image 2023-06-29 at 5.13 1.png";

import "./style.css";

export default function LearningBox() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const tab = (text, index) => {
    const className =
      hoveredIndex === index ? "contentTabItemOnHover" : "contentTabItem";
    const polygonClass = hoveredIndex === index ? "polygon" : "polygonBlock";
    const contentText =
      hoveredIndex === index ? "contentTabText" : "contentText";
    return (
      <Box
        className={className}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        sx={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
      >
        <Typography className={contentText} sx={{ fontWeight: "700" }}>
          {text}
        </Typography>
        <img className={polygonClass} src={Polygon} />
      </Box>
    );
  };

  return (
    <Box className="learningBox">
      <Typography
        sx={{
          fontWeight: "700",
          textAlign: "center",
          color: "#DEB511",
          fontSize: "11px",
        }}
      >
        ONE-STOP LEARNING PLATFORM
      </Typography>
      <Typography
        className="boldFont"
        sx={{ fontWeight: "bolder", textAlign: "center" }}
        variant="h5"
      >
        Everything you need to crack your Dream Job
      </Typography>

      <Box className="contentBox">
        <Box className="contentTab">
          {tab("Learning Portal", 0)}
          {tab("Live Sessions", 1)}
          {tab("Practice Interviews", 2)}
          {tab("Doubt Solving", 3)}
          {tab("Placement Portal", 4)}
        </Box>

        <Box className="mediaBox">
          <Box className="mediaCover">
            <Box className="media">
              <img className="mediaImage" src={WhatsAppImage} />
            </Box>
          </Box>
          <Box className="media_Text">
            <Typography
              className="bold_Font"
              sx={{ fontWeight: "bolder" }}
              variant="h5"
            >
              Unlimited 1-on-1 Mock Interviews with Mentors from Top Tech
              Companies
            </Typography>
            <Typography className="mediaParagraph" mt={3}>
              Get set for success with endless support! Mentorship sessions,
              Resume/Project reviews, Mock HR interviews, and Job Readiness
              sessions all available to you.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
