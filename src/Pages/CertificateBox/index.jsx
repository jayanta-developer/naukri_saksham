import { Box, Typography } from '@mui/material';
import React from 'react';
import { RedButton } from '../../components/AppButton';
import card1Cover from "../../Assets/images/card1P.png"
import card2Cover from "../../Assets/images/card2p.png"
import card3Cover from "../../Assets/images/card3p.png"
import coverGirlPhoto from "../../Assets/images/sideview-students-prepearing-exams-university Girl.png"

import TEDx from "../../Assets/images/TEDx.png"
import startupindia from "../../Assets/images/startupindia.png"
import nasscom from "../../Assets/images/NASSCOM.png"
import ark from "../../Assets/images/ARK.png"
import ansys from "../../Assets/images/ANSYS.png"
import siemens from "../../Assets/images/SIEMENS.png"
import altair from "../../Assets/images/ALTAIR.png"

import "./style.css"

export default function CertificateBox() {
  const card = (cardPhoto, cardText, cardSubtext) => {
    return (
      <Box className="certificateCard pointer">
        <Box className="cardCoverPhoto">
          <img style={{ width: "100%", height: "100%" }} src={cardPhoto} alt="" />
        </Box>
        <Box className="CcardText">
          <Typography mb={1} variant='h5' sx={{ fontWeight: "bolder" }}>{cardText}</Typography>
          <Typography>{cardSubtext}</Typography>
        </Box>
      </Box>
    )
  }


  return (
    <Box className="CertificateBox">
      <Typography mb={3} className="boldFont"
        sx={{ fontWeight: "bolder", paddingLeft: "23px" }}
        variant="h4">Get Certified</Typography >

      <Box className="certificateCards">
        {card(card1Cover, "Certificate of Completion", "Lorem ipsum dolor sit amet consectetur. Nulla sed turpis adipiscing mauris.")}
        {card(card2Cover, "Detailed Project Report", "Lorem ipsum dolor sit amet consectetur. Nulla sed turpis adipiscing mauris.")}
        {card(card3Cover, "Letter of Recommendation", "Lorem ipsum dolor sit amet consectetur. Nulla sed turpis adipiscing mauris.")}
      </Box>



      <Box className="certificateMedia">
        <Box className="CcoverPhoto">
          <img src={coverGirlPhoto} alt="" />
        </Box>
        <Box className="CTextBox">
          <Typography mb={3} className="boldFont"
            sx={{ fontWeight: "bolder" }}
            variant="h4">About Us</Typography>
          <Typography mb={4}>
            We at Capabl from Elite Techno Groups a leading industry consultant working with companies like Yulu, Amazon, Ola, Sastra Robotics etc. and now from last 10 years on a mission to create a world-class engineering learning ecosystem with Students, Industry, and Colleges that will reduce the Industria-Academia gap considering .
          </Typography>
          <RedButton BtnText="Read More" />
        </Box>
      </Box>




      <Box className="certificateCompanyLogo">
        <Box className="CLogo">
          <Typography px={5} variant='caption' sx={{ textAlign: "center" }}>TeaX talk delivered by Mayank Arora</Typography>
          <img className='Cimage' src={TEDx} />

        </Box>
        <Box className="CLogo">
          <Typography px={5} variant='caption' sx={{ textAlign: "center" }}>Recognised by</Typography>
          <img className='Cimage' src={startupindia} />
        </Box>
        <Box className="CLogo">
          <Typography px={5} variant='caption' sx={{ textAlign: "center" }}>Inoculated  by</Typography>
          <img className='Cimage' src={nasscom} />
        </Box>
        <Box className="CLogo">
          <Typography px={5} variant='caption' sx={{ textAlign: "center" }}>Industry Tie Up with</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

            <img style={{ width: "40px", margin: "0px 10px" }} src={ark} />
            <img style={{ width: "40px", margin: "0px 10px" }} src={ansys} />
            <img style={{ width: "40px", margin: "0px 10px" }} src={siemens} />
            <img style={{ width: "40px", margin: "0px 10px" }} src={altair} />
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
