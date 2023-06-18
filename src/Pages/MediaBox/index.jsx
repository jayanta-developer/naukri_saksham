import React from 'react';
import "./style.css";
import { Box, Typography } from "@mui/material";
import avatar1 from "../../Assets/images/y1unsplash_wK8zm2vkKXA.png"
import avatar2 from "../../Assets/images/y2unsplash_0Zx1bDv5BNY.png"
import avatar3 from "../../Assets/images/y3unsplash_Uhn_u8UfiRw.png"
import avatar4 from "../../Assets/images/y4unsplash_eJ0UGX8da2c.png"
import avatar5 from "../../Assets/images/y5unsplash_h5cd51KXmRQ.png"
import avatar6 from "../../Assets/images/y6unsplash_6anudmpILw4.png"
import YouTubeLogo from "../../Assets/images/YouTubeLogo.png"
import WhiteGay from "../../Assets/images/whiteGayPic.png"
import stepLogo1 from "../../Assets/images/StepLogo1.png"
import stepLogo2 from "../../Assets/images/StepLogo2.png"
import stepLogo3 from "../../Assets/images/StepLogo3.png"
import stepLogo4 from "../../Assets/images/StepLogo4.png"


export default function MediaBox() {
  return (
    <Box className="mediaContainer">

      <Box className="videoBox">
        <Box className="videoItem gridItem1  videoItemText">
          <Typography mb={2} className="boldFont"
            sx={{ fontWeight: "bolder" }}
            variant="h4"
          >Success Stories</Typography>
          <Typography>We love what we do and we
            do it with passion. The experimentation
            of the message and smart incentives.</Typography>
        </Box>

        <Box className="videoItem gridItem2">
          <img className='avatarImage' src={avatar1} />
          <img className='YouTubeLogo' src={YouTubeLogo} />
          <Typography className='YouTubeCoverText'>Watch Fresher to Engineering Data Author Video</Typography>
          <Box className="grayBox"></Box>
        </Box>
        <Box className="videoItem gridItem3">
          <img className='avatarImage' src={avatar2} />
          <img className='YouTubeLogo' src={YouTubeLogo} />
          <Typography className='YouTubeCoverText'>Watch Fresher to Engineering Data Author Video</Typography>
          <Box className="grayBox"></Box>
        </Box>
        <Box className="videoItem gridItem4">
          <img className='avatarImage' src={avatar3} />
          <img className='YouTubeLogo' src={YouTubeLogo} />
          <Typography className='YouTubeCoverText'>Watch Fresher to Engineering Data Author Video</Typography>
          <Box className="grayBox"></Box>
        </Box>
        <Box className="videoItem gridItem5">
          <img className='avatarImage' src={avatar4} />
          <img className='YouTubeLogo' src={YouTubeLogo} />
          <Typography className='YouTubeCoverText'>Watch Fresher to Engineering Data Author Video</Typography>
          <Box className="grayBox"></Box>
        </Box>
        <Box className="videoItem gridItem6">
          <img className='avatarImage' src={avatar5} />
          <img className='YouTubeLogo' src={YouTubeLogo} />
          <Typography className='YouTubeCoverText'>Watch Fresher to Engineering Data Author Video</Typography>
          <Box className="grayBox"></Box>
        </Box>
        <Box className="videoItem gridItem7">
          <img className='avatarImage' src={avatar6} />
          <img className='YouTubeLogo' src={YouTubeLogo} />
          <Typography className='YouTubeCoverText'>Watch Fresher to Engineering Data Author Video</Typography>
          <Box className="grayBox"></Box>
        </Box>
      </Box>

      <Box className="MediaTextBox">
        <Box className="textArea">
          <Typography mb={2} className="boldFont"
            sx={{ fontWeight: "bolder" }} variant="h4">
            Process of Onboarding
          </Typography>
          <Typography variant='caption'>Lorem ipsum dolor sit amet consectetur. Nulla sed turpis adipiscing mauris sit morbi potenti mauris.</Typography>
          <Box mt={6} className="stepBox">
            <Box className="stepItem">
              <Box className="stepLogo">
                <img src={stepLogo1} />
              </Box>
              <Box className="stepText">
                <Typography className='red'>STEPS 1</Typography>
                <Typography sx={{ fontWeight: 700 }}>Register for NaukriSaksham</Typography>
              </Box>
            </Box>
            <Box className="stepItem">
              <Box className="stepLogo">
                <img src={stepLogo2} />

              </Box>
              <Box className="stepText">
                <Typography className='red'>STEPS 2</Typography>
                <Typography sx={{ fontWeight: 700 }}>Deposit 100% Refundable deposit: Rs. 6900/-</Typography>
              </Box>
            </Box>
            <Box className="stepItem">
              <Box className="stepLogo">
                <img src={stepLogo3} />

              </Box>
              <Box className="stepText">
                <Typography className='red'>STEPS 3</Typography>
                <Typography sx={{ fontWeight: 700 }}>Get all above Program and Placement Features</Typography>
              </Box>
            </Box>
            <Box className="stepItem">
              <Box className="stepLogo">
                <img src={stepLogo4} />

              </Box>
              <Box className="stepText">
                <Typography className='red'>STEPS 4</Typography>
                <Typography sx={{ fontWeight: 700 }}>{"Get Placed with CTC upto 29 LPA".toUpperCase()}</Typography>
              </Box>
            </Box>
          </Box>


        </Box>
        <Box className="coverPhoto">
          <img src={WhiteGay} />
        </Box>

      </Box>

    </Box>
  )
}
