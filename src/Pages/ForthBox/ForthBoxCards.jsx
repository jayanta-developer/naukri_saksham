import React from 'react';
import { Box, Typography } from "@mui/material";
import "./style.css";
import avatar1 from "../../Assets/images/image 106.png"
import avatar2 from "../../Assets/images/image 112.png"
import avatar3 from "../../Assets/images/image 105.png"

import Boeing from "../../Assets/images/BoeingLogo.png"
import Mercedes from "../../Assets/images/Mercedes.png"
import Bosch from "../../Assets/images/BoschLogo.png"

export default function ForthBoxCards() {

  const card = (avatar, name, subtitle, cardText, cardSubText, footerSubText1, footerSubText2, footerLogo) => {
    return (
      <Box className="ForthBoxCard">

        <Box className="profileBox">
          <Box className="profilePhoto">
            <img src={avatar} alt="" />
          </Box>
          <Box className="profileInfo">
            <Typography sx={{ textAlign: "left", fontWeight: "bolder" }} variant='h5'>{name}</Typography>
            <Typography variant='caption' sx={{ fontWeight: "700" }}>{subtitle}</Typography>
          </Box>
        </Box>

        <Box className="TextBox">
          <Typography mb={1} sx={{ fontWeight: "bolder", textAlign: "left", color: "#13488b", fontSize: "18px" }}>{cardText}</Typography>
          <Typography variant='subtitle1' sx={{ textAlign: "left" }}>{cardSubText}</Typography>
        </Box>


        <Box className="cardFooter">
          <Box className="footerInrBox">
            <Typography mb={1} sx={{ textAlign: "left", fontWeight: "bolder" }}>Before</Typography>
            <Typography className="FooterSubText" variant="caption">{footerSubText1}</Typography>
          </Box>
          <Box className="footerInrBox">
            <Typography mb={1} sx={{ textAlign: "left", fontWeight: "bolder" }}>After</Typography>
            <Typography className="FooterSubText" variant="caption" >{footerSubText2}</Typography>
            <img className="footerCompanyLogo" src={footerLogo} alt="" />
          </Box>
        </Box>
      </Box>
    )
  }



  return (
    <Box className="ForthBoxCardContainer">
      <Box className="header">
        <Typography mb={2} className='boldFont' sx={{ fontWeight: "bolder", textAlign: "center" }} variant='h4'>Testimonial</Typography>
        <Typography mb={3} variant="subtitle2" sx={{ textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur. Nulla sed turpis adipiscing mauris sit morbi potenti mauris.</Typography>
      </Box>
      <Box className="cardBox">
        {card(
          avatar1,
          "Balaji Elumalai",
          "Engineering Data Author Boeing",
          "From Fresher to Engineering Data Author",
          "By doing all the real world projects at Capabl, you gain a lot of confidence about solving real world problems. If you work on Capabl projects, you’ll be able to crack interviews.",
          "Rajllakshmi College of engineering(Batch 2018 - 2022)",
          "Engineering Data Author",
          Boeing
        )}
        {card(
          avatar2,
          "Gaurav Jiwanani",
          "CAE Analyst Mercedes-Beng",
          "From SDE to CAE Analyst",
          "Capabl program was a game changer, We learned from industry experts who taught through hands on industry projects. As a result, i was able to secure my dream job. I highly recommend this Program!",
          "Senior Design Engineer",
          "CAE Analyst",
          Mercedes
        )}
        {card(
          avatar3,
          "Tejas Hegde",
          "Associate Software Engineer Bosch Global Software Technology",
          "From Intern to Associate Software Engineer",
          "The modules and tasks were similar to what we would do in a real job. Apart from a great resume, my problem-solving skills improved a lot too.",
          "Research Intern",
          "Associate Software Engineer",
          Bosch
        )}

      </Box>
    </Box>
  )
}
