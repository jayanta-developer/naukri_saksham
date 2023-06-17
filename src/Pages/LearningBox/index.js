import React from "react";
import LearningBoxCoverPhoto from "../../Assets/images/student-online-cute-young-guy-studying-computer-glasses-green-shirt-smiling-pointing 1.png";
import { Box, Typography } from "@mui/material";

import "./style.css";

export default function LearningBox() {
  return (
    <Box className="learningBox">
      <Typography
        className="boldFont"
        sx={{ fontWeight: "bolder", textAlign: "center" }}
        variant="h4"
      >
        How You Will Learn
      </Typography>

      <Box className="contentBox">
        <Box className="sideNavBox">
          <Box className="sideNavItem">Learning Portal</Box>
          <Box className="sideNavItem">Live Sessions</Box>
          <Box className="sideNavItem">Time Flexibility</Box>
          <Box className="sideNavItem">Doubt Solving</Box>
          <Box className="sideNavItem">Placement Portal</Box>
        </Box>

        <Box className="mediaCoverBox">
          <Box className="coverPhoto">
            <img src={LearningBoxCoverPhoto} />
          </Box>
          <Box mt={1} className="textBox">
            <Typography
              className="boldFont"
              sx={{ fontWeight: "bolder" }}
              variant="h6"
            >
              Amplify Your Knowledge with Expert-Led Live Classes
            </Typography>
            <Typography variant="caption">
              Engage in weekly live sessions led by our experts to unlock your
              learning potential. Benefit from direct interaction with our
              instructors for an unparalleled and enriching learning experience.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
