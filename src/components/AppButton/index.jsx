import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./style.css";
import "../../Assets/fonts.css";

export const RedButton = ({
  BtnText,
  width = "174px",
  height = "47px",
  backgroundColor = "#cf2323",
}) => {
  return (
    <div style={{ width, height, backgroundColor }} className="NavGetStartBtn">
      <Typography sx={{ fontFamily: "Satoshi" }} className="redBtnText">
        {BtnText}
      </Typography>
    </div>
  );
};
export const YellowButton = ({
  BtnText,
  width = "174px",
  height = "47px",
  backgroundColor = "#FFA033",
}) => {
  return (
    <div
      style={{ width, height, backgroundColor }}
      className="NavGetStartBtn NavGetYellowStartBtn"
    >
      <Typography sx={{ fontFamily: "Satoshi" }} className="redBtnText">
        {BtnText}
      </Typography>
    </div>
  );
};
export const BlueButton = ({
  BtnText,
}) => {
  return (
    <div
      className="NavGetBlueStartBtn"
    >
      <Typography sx={{ fontFamily: "Satoshi" }} className="redBtnText">
        {BtnText}
      </Typography>
    </div>
  );
};
export const WhiteButton = ({
  BtnText,
}) => {
  return (
    <div
      className="NavGetWhiteStartBtn">
      <Typography sx={{ fontFamily: "Satoshi", color: "black" }} className="redBtnText">
        {BtnText}
      </Typography>
    </div>
  );
};
