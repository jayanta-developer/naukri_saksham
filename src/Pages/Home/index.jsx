import React from "react";
import { Box, Typography, Button, Container, TextField } from "@mui/material";
import { RedButton, YellowButton } from "../../components/AppButton";
import watchMediaAvtar from "../../Assets/images/Ellipse 306.png";
import MediaWhiteBtn from "../../Assets/images/Ellipse 307.png";
import MediaPlayBtn from "../../Assets/images/Vector 76.png";
import VectorLog from "../../Assets/images/Vector.png";
import EmailLog from "../../Assets/images/Vector (1).png";
import CallLog from "../../Assets/images/Vector (2).png";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import "./style.css";

export default function Home() {
  const [value, setValue] = React.useState();
  return (
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
            <Box sx={{ paddingTop: "18px" }}>
              <RedButton BtnText="View Certifications" />
            </Box>
            <Box className="watchVideoMediaBox">
              <Box className="imageBox">
                <img src={watchMediaAvtar} alt="" />
                <img className="playWhiteBtn" src={MediaWhiteBtn} alt="" />
                <img className="playBtn" src={MediaPlayBtn} alt="" />
              </Box>
              <Typography className="mediaText">Watch Our Video</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="inputBox homeBox">
        <Box className="contactBox">
          <Box className="contactBoxItem">
            <Typography
              className="boldFont"
              sx={{ fontWeight: "bolder", fontSize: "22px" }}
              variant="h4"
            >
              View the Program Package to Access:
            </Typography>
          </Box>
          <Box className="contactBoxItem">
            <ul>
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
                    width: "225px",
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
                    width: "225px",
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
                  width: "470px",
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
  );
}
