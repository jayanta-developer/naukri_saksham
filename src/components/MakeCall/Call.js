import React from "react";
import { Box, Typography } from "@mui/material";
import headset from "../../Assets/images/headset-svgrepo-com.svg";
import "./style.css";

export default function Call() {
  const phoneNumber = "9091385148";
  return (
    <>
      <Box className="headsetIconBox">
        <a href={`tel:${phoneNumber}`}>
          <img src={headset} alt="Phone Icon" />
        </a>
      </Box>
    </>
  );
}
