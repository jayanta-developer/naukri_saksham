import React from 'react';
import { Box, Typography } from '@mui/material';
import { RedButton } from '../../components/AppButton';
import "./about.css";

import coverGirlPhoto from "../../Assets/images/sideview-students-prepearing-exams-university Girl.png"

import TEDx from "../../Assets/images/TEDx.png"
import startupindia from "../../Assets/images/startupindia.png"
import nasscom from "../../Assets/images/NASSCOM.png"
import ark from "../../Assets/images/ARK.png"
import ansys from "../../Assets/images/ANSYS.png"
import siemens from "../../Assets/images/SIEMENS.png"
import altair from "../../Assets/images/ALTAIR.png"

export default function index() {
  return (
    <>
      <Box className="CertificateBox">
        <Box className="certificateMedia">
          <Box className="CcoverPhoto">
            <img style={{ width: "100%", maxWidth: "624px" }} src={coverGirlPhoto} alt="" />
          </Box>
          <Box className="CTextBox">
            <Typography mb={3} className="boldFont"
              sx={{ fontWeight: "bolder" }}
              variant="h5">About Us</Typography>
            <Typography mb={4}>
              Capabl from Elite Techno Groups, an industry consultant and Ed-Tech backed by 200+ leading MNC's & Startups, is dedicated to creating a top-notch learning ecosystem. Our mission is to bridge the industry-academia gap while considering the complexities of the Indian degree ecosystem.
            </Typography>
            <Typography mb={4}>
              Our NaukriSaksham initiatives aim to protect students from the exploitation of commercial Edtech companies that charge exorbitant fees for placement and training. Our pocket-friendly model allows students to learn, secure a job, and pay fees, relieving the financial burden on their parents.
            </Typography>
            <Typography sx={{ color: "#3E8504", fontWeight: "700" }} mb={4}>
              With Capabl, students become Capable!
            </Typography>
          </Box>
        </Box>

        <Box className="certificateCompanyLogoBox">
          <Typography mb={3} className="boldFont" sx={{ fontWeight: "bolder" }}
            variant="h5">Awards and Achievements</Typography>
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
        </Box>

      </Box >
    </>
  )
}
