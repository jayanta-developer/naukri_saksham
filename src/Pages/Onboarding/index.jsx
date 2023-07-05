import React from 'react';
import { Box, Typography, Button, Container, TextField } from "@mui/material";
import "./onboarding.css";
import { RedButton } from '../../components/AppButton';
import step1 from "../../Assets/images/StepLogo1.png"
import step2 from "../../Assets/images/StepLogo2.png"
import step3 from "../../Assets/images/StepLogo3.png"
import cover1 from "../../Assets/images/Group 21337.png"
import cover2 from "../../Assets/images/Group 21357.png"



export default function Onboarding() {
  return (
    <>
      <Box className="onboardContainer">
        <Typography mb={1} className="boldFont"
          sx={{ fontWeight: "bolder", textAlign: "center" }}
          variant="h5"
        >Process of Onboarding</Typography>
        <Typography mb={5} sx={{ fontSize: "13px", textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur. Nulla sed turpis adipiscing mauris sit morbi potenti mauris.</Typography>
        <Box className="stepBox">

          <Box m={3} className="stepItem">
            <Box className="stepItemLOgo">
              <Box sx={{ background: "#359cef" }} className="stepItemLogoBox">
                <img src={step1} />
              </Box>
            </Box>
            <Typography mb={1} sx={{ color: "#359CEF", fontWeight: "700", fontSize: "11px" }}>STEPS 1</Typography>
            <Typography sx={{ textAlign: "center", fontWeight: "700" }}>Register for <br /> NaukriSaksham</Typography>
          </Box>
          <Box m={3} className="stepItem">
            <Box className="stepItemLOgo">
              <Box sx={{ background: "#CF2323" }} className="stepItemLogoBox">
                <img src={step2} />
              </Box>
            </Box>
            <Typography mb={1} sx={{ color: "#CF2323", fontWeight: "700", fontSize: "11px" }}>STEPS 2</Typography>
            <Typography sx={{ textAlign: "center", fontWeight: "700" }}>Deposit 100% Refundable<br /> deposit: Rs. 6900/-</Typography>
          </Box>
          <Box m={3} className="stepItem">
            <Box className="stepItemLOgo">
              <Box sx={{ background: "#8C29CC" }} className="stepItemLogoBox">
                <img src={step3} />
              </Box>
            </Box>
            <Typography mb={1} sx={{ color: "#8C29CC", fontWeight: "700", fontSize: "11px" }}>STEPS 3</Typography>
            <Typography sx={{ textAlign: "center", fontWeight: "700" }}>Get all above Program<br /> and Placement Features</Typography>
          </Box>




        </Box>


        <Box className="step4">
          <Typography mb={2} sx={{ color: "#359CEF", fontWeight: "700", fontSize: "20px", textAlign: "center" }}>STEPS 4</Typography>
          <Box className="onboardCoverItem">
            <Box className="onboardCover">
              <img src={cover1} />
            </Box>
            <Box className="onboardCover">
              <img src={cover2} />
            </Box>
          </Box>
        </Box>
        <Box className="onboardBtnBox"><RedButton BtnText="ENROLL NOW" /></Box>
      </Box>
    </>
  )
}
