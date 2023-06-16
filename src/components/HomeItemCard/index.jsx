import React from 'react';
import { Box, Typography } from "@mui/material";
import "./style.css"


export default function HomeItemCard({ logo, Header, BottomText }) {
  return (
    <Box className="homeItemCard">
      <img className="cardLogo" src={logo} alt="" />
      <Box className="cardHeader">
        <Typography sx={{ fontWeight: "bolder" }}>{Header}</Typography>
      </Box>
      <Box className="cardText">
        <Typography mt={2} sx={{ fontSize: "0.9rem" }} variant="subtitle1">{BottomText}</Typography>
      </Box>
    </Box>
  )
}
