import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { RedButton, YellowButton } from "../AppButton";

import "../../Pages/Home/style.css";
import "./style.css";
import cross from "../../Assets/images/PopupBoxLogos/cross-svgrepo-com.svg";

import MediaImage from "../../Assets/images/MediaGirlImage.png";
import redPlayBtn from "../../Assets/images/redPlay btn.png";
import VectorLog from "../../Assets/images/Vector.png";
import EmailLog from "../../Assets/images/Vector (1).png";
import CallLog from "../../Assets/images/Vector (2).png";
import VectorG from "../../Assets/images/VectorG.svg";
import VectorD from "../../Assets/images/VectorD.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Enroll({ enrollBox, setEnrollBox }) {
  const [value, setValue] = useState();

  const handelClose = () => {
    setEnrollBox(false);
  };

  return (
    <>
      <Box sx={{ display: enrollBox ? "flex" : "none" }} className="graBox">
        <Box className="inputBox homeBox">
          <Box className="contact_Box">
            <img
              onClick={handelClose}
              className="cross enrollCrossBtn"
              style={{ width: "42px" }}
              src={cross}
            />
            <Box sx={{ textAlign: "center" }} className="contactBoxItem">
              <Typography
                className="inputBoxHeader"
                sx={{ fontWeight: "700" }}
                variant="h4"
              >
                Start your Journey to Become
                <br /> NaukriSaksham
              </Typography>
            </Box>
            <Box mb={3} className="contactBoxItem">
              <Typography
                className="contactBoxItemSubHeader"
                sx={{ fontSize: "14px", textAlign: "center" }}
              >
                Skills First, Job Next, Fees Last
              </Typography>
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

            <Box className="contactBoxItem home_card_input">
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
              <img className="flagLog" src={CallLog} alt="" />
            </Box>
            <Box className="contactBoxItem home_card_input">
              <TextField
                sx={{ width: "100%" }}
                type="text"
                placeholder="College Name"
                InputProps={{
                  style: {
                    borderRadius: "23px",
                    height: "45px",
                    // width: "470px",
                  },
                }}
              />
              <img className="emailLog" src={VectorG} alt="" />
            </Box>
            <Box className="contactBoxItem home_card_input">
              <TextField
                sx={{ width: "100%" }}
                type="text"
                placeholder="Program"
                InputProps={{
                  style: {
                    borderRadius: "23px",
                    height: "45px",
                    // width: "470px",
                  },
                }}
              />
              <img className="emailLog" src={VectorD} alt="" />
            </Box>
            <Box id="EnrollBtnBox" className="contactBoxItem">
              <RedButton BtnText="Enroll Now" width="100%" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
