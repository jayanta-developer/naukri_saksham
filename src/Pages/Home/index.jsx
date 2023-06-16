import React from "react";
import { Box, Typography, Button, Container, TextField } from "@mui/material";
import { RedButton, YellowButton } from "../../components/AppButton";
import MediaImage from "../../Assets/images/MediaGirlImage.png";
import VectorLog from "../../Assets/images/Vector.png";
import EmailLog from "../../Assets/images/Vector (1).png";
import CallLog from "../../Assets/images/Vector (2).png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
//Home card logo
import JobSearch from "../../Assets/images/HomeCardLogo/Group 21302.png"
import FectoryHelmet from "../../Assets/images/HomeCardLogo/FectoryHelmet.png"
import factory from "../../Assets/images/HomeCardLogo/factory.png"
import CurencyGraph from "../../Assets/images/HomeCardLogo/CurencyGraph.png"
import Lock from "../../Assets/images/HomeCardLogo/Lock.png"

import HomeItemCard from "../../components/HomeItemCard";

import "./style.css";

export default function Home() {
  const [value, setValue] = React.useState();
  return (
    <Box className="HContainer">
      <Box className="homeContainer">
        <Box className="aboutBox homeBox">
          <Box className="textBox">
            <Typography
              mb={2}
              className="boldFont"
              sx={{ fontWeight: "bolder" }}
              variant="h4"
            >
              NaukriSaksham
            </Typography>
            <Box mb={2} className="paragraphText">
              <ul>
                <li>No Job - No Payment | 100% Placement Guarantee</li>
                <li>Skills First, Job Next, Fees Last - Our Order of Success</li>
                <li>Relieve Your Parents: No More Burden after College Fees</li>
                <li>Degree Alone Won't Get You the Job, But We Will!</li>
              </ul>
            </Box>
            <Box className="btnMediaBox">
              <Box className="mediaBtn">
                <RedButton BtnText="View Certifications" />
              </Box>
              <Box className="watchVideoMediaBox">
                <img className="mediaGirlImage" src={MediaImage} />
                <Typography sx={{ display: "flex", alignItems: "center" }}>Watch Our Video</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="inputBox homeBox">
          <Box className="contactBox">
            <Box sx={{ textAlign: "center" }} className="contactBoxItem">
              <Typography
                className="boldFont"
                sx={{ fontWeight: "bolder", fontSize: "15px" }}
                variant="h4"
              >
                View the Program Package to Access:
              </Typography>
            </Box>
            <Box className="contactBoxItem">
              <ul className="contactUl">
                <li>No Job - No Payment</li>
                <li>100% Placement Guarantee</li>
                <li>Skills First, Job Next, Fees Last</li>
              </ul>
            </Box>
            <Box className="contactBoxItem nameInputFieldBox">
              <Box className="inputField">
                <TextField
                  className="inputF"
                  sx={{ width: "100%" }}
                  placeholder="First Name"
                  InputProps={{
                    style: {
                      borderRadius: "23px",
                      height: "45px",
                      // width: "225px",
                    },
                  }}
                />
                <img className="firstNameLog" src={VectorLog} alt="" />
              </Box>
              <Box className="inputField">
                <TextField
                  sx={{ width: "100%" }}
                  placeholder="Last Name"
                  InputProps={{
                    style: {
                      borderRadius: "23px",
                      height: "45px",
                      // width: "100%",
                    },
                  }}
                />
                <img className="lastNameLog" src={VectorLog} alt="" />
              </Box>
            </Box>
            <Box className="contactBoxItem">
              <TextField
                sx={{ width: "100%" }}
                type="email"
                placeholder="Email Address"
                InputProps={{
                  style: {
                    borderRadius: "23px",
                    height: "45px",
                    // width: "470px",
                  },
                }}
              />
              <img className="emailLog" src={EmailLog} alt="" />
            </Box>
            <Box className="contactBoxItem">
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
              <img className="flagLog" src={CallLog} alt="" />
            </Box>
            <Box className="contactBoxItem">
              <YellowButton BtnText="View Program Package" width="100%" />
            </Box>
          </Box>
        </Box>

      </Box>
      <Box className="homeItemBox">
        <Typography mb={4} className="boldFont" sx={{ fontWeight: "bolder", textAlign: "center" }} variant="h4">Why NaukriSaksham</Typography>
        <Box className="homeItemCardBox">
          <HomeItemCard logo={JobSearch} Header="Future Job Market" BottomText="2.5 million jobs in EV, DS, and Full Stack by 2025." />
          <HomeItemCard logo={FectoryHelmet} Header="Misfit Engineers" BottomText="94% student lack the necessary skills due to outdated curriculum." />
          <HomeItemCard logo={factory} Header="Industry Demands" BottomText="Companies face challenges in finding skilled graduates." />
          <HomeItemCard logo={CurencyGraph} Header="Financial Burden" BottomText="Students spend 1.2 lakh rupees on upskilling, on top of college fees." />
          <HomeItemCard logo={Lock} Header="Job Security" BottomText="Neither colleges nor the expensive training programs offer job assurance." />

        </Box>

      </Box>
    </Box>
  );
}
