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

import featureLogo1 from "../../Assets/images/Group 21316.svg"
import featureLogo2 from "../../Assets/images/Group 21317.svg"
import featureLogo3 from "../../Assets/images/Group 21318.svg"
import featureLogo4 from "../../Assets/images/Group 21319.svg"
import featureLogo5 from "../../Assets/images/Group 21320.svg"
import featureLogo6 from "../../Assets/images/Group 21370.svg"
import featureLogo7 from "../../Assets/images/Group 21369.svg"


export default function MediaBox() {
  return (
    <Box className="mediaContainer">

      <Box className="videoItem gridItem1  videoItemText">
        <Typography mb={2} className="boldFont"
          sx={{ fontWeight: "bolder", textAlign: "center" }}
          variant="h5"
        >Students Defining Our Success</Typography>
        <Typography sx={{ textAlign: "center", fontSize: "11px" }}>Witness the transformation & Experience the Power of Our Program in Shaping Your Career Path</Typography>
      </Box>
      <Box className="videoBox">

        <Box className="YouTubeContent">
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
      </Box>

      <Box className="MediaTextBox">
        <Box className="textArea">
          <Typography mb={2} className="boldFont"
            sx={{ fontWeight: "bolder", textAlign: "center" }} variant="h5">
            Program Features
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "11px" }}>
            We've Got You Fully Covered, Every Step of the Way From Technical Skills to Placements!
          </Typography>
          <Box className="featuresBox">

            <Box className="featuresCard">
              <Typography variant='h6' sx={{ fontWeight: "700", padding: "30px 0px 10px 30px" }}>Learning Features:</Typography>

              <Box className="featureItem">
                <img style={{ width: "102px" }} src={featureLogo1} />
                <Typography>6 Month of Learning journey</Typography>
              </Box>
              <Box className="featureItem">
                <img style={{ width: "102px" }} src={featureLogo2} />
                <Typography>250+ hours of learning</Typography>
              </Box>
              <Box className="featureItem">
                <img style={{ width: "102px" }} src={featureLogo3} />
                <Typography>20+ Real Time Projects</Typography>
              </Box>
              <Box className="featureItem">
                <img style={{ width: "102px" }} src={featureLogo4} />
                <Typography>Weekly Live Sessions with top experts</Typography>
              </Box>
              <Box className="featureItem">
                <img style={{ width: "102px" }} src={featureLogo5} />
                <Typography>1-2 Month of Industrial Internship</Typography>
              </Box>
              <Box className="featureItem">
                <img style={{ width: "102px" }} src={featureLogo6} />
                <Typography>Lifetime access to capabl Community</Typography>
              </Box>
              <Box className="featureItem">
                <img style={{ width: "102px" }} src={featureLogo7} />
                <Typography>Live Doubt Support</Typography>
              </Box>

            </Box>


            <Box className="featuresCard card2">
              <Typography variant='h6' sx={{ fontWeight: "700", padding: "30px 0px 10px 30px" }}>Placement Support:</Typography>

              <Box className="featureItem card2featureItem">
                <img style={{ width: "102px" }} src={featureLogo1} />
                <Typography>Aptitude Training</Typography>
              </Box>
              <Box className="featureItem card2featureItem">
                <img style={{ width: "102px" }} src={featureLogo2} />
                <Typography>Soft Skills Training</Typography>
              </Box>
              <Box className="featureItem card2featureItem">
                <img style={{ width: "102px" }} src={featureLogo3} />
                <Typography>Resume Preparation</Typography>
              </Box>
              <Box className="featureItem card2featureItem">
                <img style={{ width: "102px" }} src={featureLogo4} />
                <Typography>Mock Interviews by Tech and
                  HR Panels</Typography>
              </Box>
              <Box className="featureItem card2featureItem">
                <img style={{ width: "102px" }} src={featureLogo5} />
                <Typography>Negotiation with companies for
                  higher salaries</Typography>
              </Box>
              <Box className="featureItem card2featureItem">
                <img style={{ width: "102px" }} src={featureLogo6} />
                <Typography>Access to Placement Portal</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
