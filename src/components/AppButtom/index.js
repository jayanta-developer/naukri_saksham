import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./style.css";
import "../../Assets/fonts.css";

export const RedButton = ({ BtnText }) => {
  return (
    <div className="NavGetStartBtn">
      <Typography className="redBtnText">{BtnText}</Typography>
    </div>
  );
};
