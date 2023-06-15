import React from "react";
import { Box, Typography } from "@mui/material";

import "./style.css";

export default function PlacementCard({ logo, FirsText, secondText }) {
  return (
    <Box className="placementItemCard">
      <Box className="placementCardLogo">
        <img src={logo} alt="" />
      </Box>
      <Box className="placementCardText">
        <Typography
          className="boldFont"
          sx={{ fontWeight: "bolder", textAlign: "center" }}
          variant="h4"
        >
          {FirsText}
        </Typography>
        <Typography variant="h7">{secondText}</Typography>
      </Box>
    </Box>
  );
}
