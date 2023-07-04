import { Box, Typography, Button, Container, TextField, Card } from "@mui/material";
import { RedButton, BlueButton, WhiteButton } from "../../components/AppButton";
import vector1 from "../../Assets/images/Vector (3).png"
import vector2 from "../../Assets/images/artificial-intelligence 1.png"
import vector3 from "../../Assets/images/web-development 1.png"
import vector4 from "../../Assets/images/web-development 2 (1).png"
import microsoft from "../../Assets/images/Microsoft Logo.png"
import Enthire from "../../Assets/images/EnthireLogo.png"
import SitusAMC from "../../Assets/images/SitusAMc.png"
import walmart from "../../Assets/images/walmart.png"
import accenture from "../../Assets/images/accenture.png"
import valeo from "../../Assets/images/valeo.png"
import honda from "../../Assets/images/honda.png"
import volvo from "../../Assets/images/volvo.png"
import tata from "../../Assets/images/tata.png"
import "./style.css";

export default function WorkFlow() {
  return (
    <Box className="workFlowBox">
      <Box className="workFlowHeader">
        <Typography className="boldFont" sx={{ fontWeight: "bolder", textAlign: "center" }}
          variant="h5">Building industry ready workforce in <br /> High demand Domains</Typography>
      </Box>
      <Box className="workFlowItems">


        <Box className="workFlowItem workFlowItem1">
          <Box className="workFlowItemBox">
            <Box className="logoBG logoBackground1">
              <img className="vector1Logo" src={vector1} />
            </Box>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkFlowItemBoxCenterText" variant="h5">Full Stack
              Development</Typography>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkflowPByText">Powered By</Typography>
          </Box>
          <Box className="workFlowItemBox companyLogoBox">
            <img className="companyLogo" src={microsoft} />
            <img className="companyLogo companyLogoImg" src={Enthire} />
            <img className="companyLogo" src={SitusAMC} />
          </Box>
        </Box>



        <Box className="workFlowItem workFlowItem2">
          <Box className="workFlowItemBox">
            <Box className="logoBG logoBackground2">
              <img className="vector1Logo" src={vector2} />
            </Box>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkFlowItemBoxCenterText" variant="h5">Data Science With
              AI/ML/Python</Typography>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkflowPByText">Powered By</Typography>
          </Box>
          <Box className="workFlowItemBox companyLogoBox">
            <img className="companyLogo" src={walmart} />
            <img className="companyLogo companyLogoImg" src={accenture} />
            <img className="companyLogo" src={valeo} />
          </Box>
        </Box>



        <Box className="workFlowItem workFlowItem3">
          <Box className="workFlowItemBox">
            <Box className="logoBG logoBackground3">
              <img className="vector1Logo" src={vector3} />
            </Box>
          </Box>
          <Box className="workFlowItemBox">
            <Typography sx={{ color: "white", marginBottom: "6px" }} className="WorkFlowItemBoxCenterText" variant="h5">Electric Vehicle
              & Design</Typography>
          </Box>
          <Box className="workFlowItemBox">
            <Typography sx={{ color: "white", fontSize: "16px", marginBottom: "2px" }} className="WorkflowPByText">Nulla sed turpis adipiscing mauris sit morbi potenti mauris.</Typography>
          </Box>
          <Box className="workFlowItemBox btnBox">
            <BlueButton BtnText="View Details" />
            <WhiteButton BtnText="Download Syllabus" />
          </Box>
        </Box>


        <Box className="workFlowItem workFlowItem4">
          <Box className="workFlowItemBox">
            <Box className="logoBG logoBackground4">
              <img className="vector1Logo" src={vector4} />
            </Box>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkFlowItemBoxCenterText" variant="h5">Advice Care &
              <br /> Design</Typography>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkflowPByText">Powered By</Typography>
          </Box>
          <Box className="workFlowItemBox companyLogoBox">
            <img className="companyLogo fortBoxhLogo" src={honda} />
            <img className="companyLogo fortBoxhLogo" src={volvo} />
            <img className="companyLogo fortBoxhLogo" src={tata} />
          </Box>
        </Box>



      </Box>
      <Box className="workFlowBtn">
        <RedButton BtnText="Get Started" />
      </Box>
    </Box>
  )
}