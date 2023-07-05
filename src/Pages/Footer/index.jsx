import React from 'react';
import { Box, Typography } from "@mui/material";
import FooterCoverPhoto from "../../Assets/images/FooterCoverPhoto.png"
import CompanyLogo2 from "../../Assets/images/Naukrisaksham 2.png"
import FacebookLogo from "../../Assets/images/FIcon_11_.png"
import TwitterLogo from "../../Assets/images/T_x30_4.Twitter.png"
import InstagramLogo from "../../Assets/images/IVector (4).png"
import LinkedinLogo from "../../Assets/images/LVector (4).png"
import Arrow from "../../Assets/images/footerHomeArrow.png"
import MessageLogo from "../../Assets/images/MessageLogo.png"
import "./style.css";


export default function Footer() {
  return (
    <Box className="footer">
      <Box className="footerContent">
        <Box className="footerTextBoxItem footerImageBox">
          <img className='footerImage' src={FooterCoverPhoto} />
        </Box>
        <Box className="footerTextBoxItem">

          <Typography className='footerColHeader' mb={1} variant='h7' sx={{ fontWeight: "bolder" }}>Quick Links</Typography>
          <Box className="footerRowItem">
            <Typography className="footerText pointer textUnderlineOnHover" mb={1}>
              <img style={{ width: "7px", height: "11px", margin: "7px 7px 0px 2px" }} src={Arrow} />
              Home
            </Typography>
            <Typography className="pointer textUnderlineOnHover" mb={1}>Course</Typography>
            <Typography className="pointer textUnderlineOnHover" mb={1}>Companies</Typography>
            <Typography className="pointer textUnderlineOnHover" mb={1}>Resources</Typography>
            <Typography className="pointer textUnderlineOnHover" mb={1}>About Us</Typography>
            <Typography className="pointer textUnderlineOnHover" mb={1}>Contact</Typography>
          </Box>
        </Box>

        <Box className="footerTextBoxItem">
          <Typography className='footerColHeader' mb={1} variant='h7' sx={{ fontWeight: "bolder" }}>Policies</Typography>
          <Box className="footerRowItem">
            <Typography className="pointer textUnderlineOnHover" mb={1}>Privacy policy</Typography>
            <Typography className="pointer textUnderlineOnHover" mb={1}>Refund policy</Typography>
            <Typography className="pointer textUnderlineOnHover" mb={1}>Terms and Condition</Typography>
          </Box>
        </Box>
        <Box className="footerTextBoxItem ClogBox">

          <img className='cLogo' src={CompanyLogo2} />
          <Typography className="pointer" sx={{ lineHeight: "28px", marginTop: "22px" }}>
            Nulla sed turpis adipiscing
            mauris sit morbi<br /> potenti mauris
            Lorem ipsum dolor sit.</Typography>

        </Box>

      </Box>

      <Box className="footerBottomBox">

        <Box className="footerBottomBoxContent">
          <Typography className='footerBottomText'>© Copyright 2023 <spam style={{ color: "#FFCC00" }}>NaukriSaksham</spam> All Rights Reserved.</Typography>
          <Box className="MediaLinks">
            <img src={FacebookLogo} />
            <img src={TwitterLogo} />
            <img src={InstagramLogo} />
            <img src={LinkedinLogo} />
            {/* <img className='messageLogoOnFooter' src={MessageLogo} /> */}
          </Box>

        </Box>
      </Box>

    </Box >
  )
}
