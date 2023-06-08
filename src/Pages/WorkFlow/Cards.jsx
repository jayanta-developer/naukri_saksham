import React from 'react';
import { Box, Typography, Button, Container, TextField, Card } from "@mui/material";

import "./style.css";

export default function Cards({ avatarLogo, text, logos, logoWidth, logoHeight, middleText, AddClass = "nul" }) {
  const elements = document.getElementsByClassName("workFlowItem")
  if (AddClass) {

    if (elements.length > 0) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(AddClass);
      }
    }
  }

  return (
    <Box className="workFlowItem">
      <Box className="workFlowItemBox">
        <Box className="logoBackground">
          <img className="vector1Logo" src={avatarLogo} />
        </Box>
      </Box>
      <Box className="workFlowItemBox">
        <Typography className="WorkFlowItemBoxCenterText" variant="h5">{text}</Typography>
      </Box>
      <Box className="workFlowItemBox">
        <Typography className="WorkflowPByText">{middleText ? middleText : "Powered By"}</Typography>
      </Box>
      <Box className="workFlowItemBox companyLogoBox">
        <img style={{ width: logoWidth ? logoWidth : "106px" }} className="companyLogo" src={logos ? logos[0] : ""} />
        <img style={{ width: logoWidth ? logoWidth : "106px", height: logoHeight ? logoHeight : "38px" }} className="companyLogo companyLogoImg" src={logos ? logos[1] : ""} />
        <img style={{ width: logoWidth ? logoWidth : "106px" }} className="companyLogo" src={logos ? logos[2] : ""} />
      </Box>
    </Box>
  )
}
