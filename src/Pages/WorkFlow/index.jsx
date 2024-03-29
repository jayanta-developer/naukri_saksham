import React, { useState } from "react";
import { Box, Typography, Button, Container, TextField, Card } from "@mui/material";
import { RedButton, BlueButton, WhiteButton, WorkFlowBtn } from "../../components/AppButton";
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
import ION from "../../Assets/images/NewImages/download.png"
import mahindra from "../../Assets/images/NewImages/FbV6NXbaAAAmqlA.png"
import ampere from "../../Assets/images/NewImages/image001.png"
import "./style.css";

import { FullStackDevelopment, DataScienceBox, ElectricVehicleBox, AdvanceCarBox } from "../../components/Popup";

export default function WorkFlow({ setEnrollBox }) {
  const [fullStackBox, setFullStackBox] = useState(false)
  const [dataScienceBox, setDataScienceBox] = useState(false)
  const [electricVehicleBox, setElectricVehicleBox] = useState(false)
  const [advanceCarBox, setAdvanceCarBox] = useState(false)
  const [hoveredItems, setHoveredItems] = useState({});
  const handelClose = () => {
    setFullStackBox(false)
    setDataScienceBox(false)
    setElectricVehicleBox(false)
    setAdvanceCarBox(false)
  }


  const handleMouseEnter = (itemIndex) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [itemIndex]: true,
    }));
  };

  const handleMouseLeave = (itemIndex) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [itemIndex]: false,
    }));
  };


  return (
    <Box className="workFlowBox">
      <Box className="FContainer" sx={{ display: fullStackBox ? "block" : "none" }}>{FullStackDevelopment(handelClose)}</Box>
      <Box className="FContainer" sx={{ display: dataScienceBox ? "block" : "none" }}>{DataScienceBox(handelClose)}</Box>
      <Box className="FContainer" sx={{ display: electricVehicleBox ? "block" : "none" }}>{ElectricVehicleBox(handelClose)}</Box>
      <Box className="FContainer" sx={{ display: advanceCarBox ? "block" : "none" }}>{AdvanceCarBox(handelClose)}</Box>
      <Box className="workFlowHeader">
        <Typography className="bold_Font poppinsBold" sx={{ fontWeight: "700", textAlign: "center" }}
          variant="h5">Building industry ready workforce in <br />High-demand Domains</Typography>
      </Box>
      <Box className="workFlowItems">

        <Box className="workFlowItem workFlowItem1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          onClick={() => setFullStackBox(true)}
        >
          <Box className="workFlowItemBox">
            <Box className="logoBG logoBackground1">
              <img className="vector1Logo" src={vector1} />
            </Box>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkFlowItemBoxCenterText poppins" variant="h5">Full Stack
              Development</Typography>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkflowPByText ">Designed by Expert From</Typography>
          </Box>
          <Box className="hoverBtnBox">
            <Box sx={{ marginTop: "16px", display: hoveredItems[1] ? "block" : "none" }} className="workFlowItemBox btnBox">
              <WorkFlowBtn backgroundColor="#acff65" BtnText="View Details" BorderColor="#7de126" />
            </Box>
          </Box>
          <Box className="workFlowItemBox companyLogoBox">
            <img className="companyLogo" src={microsoft} />
            <img className="companyLogo companyLogoImg" src={Enthire} />
            <img className="companyLogo" src={SitusAMC} />
          </Box>
        </Box>

        <Box className="workFlowItem workFlowItem2"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          onClick={() => setDataScienceBox(true)}
        >
          <Box className="workFlowItemBox">
            <Box className="logoBG logoBackground2">
              <img className="vector1Logo" src={vector2} />
            </Box>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkFlowItemBoxCenterText poppins" variant="h5">Data Science With
              AI/ML/Python</Typography>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkflowPByText  ">Designed by Expert From</Typography>
          </Box>
          <Box className="hoverBtnBox">
            <Box sx={{ marginTop: "16px", display: hoveredItems[2] ? "block" : "none" }} className="workFlowItemBox btnBox">
              <WorkFlowBtn backgroundColor="#efb8ff" BtnText="View Details" BorderColor="#dc5cfff2" />
            </Box>
          </Box>
          <Box className="workFlowItemBox companyLogoBox">
            <img className="companyLogo" src={walmart} />
            <img className="companyLogo companyLogoImg" src={accenture} />
            <img className="companyLogo" src={valeo} />
          </Box>
        </Box>



        <Box className="workFlowItem workFlowItem3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
          onClick={() => setElectricVehicleBox(true)}
        >
          <Box className="workFlowItemBox">
            <Box className="logoBG logoBackground3">
              <img className="vector1Logo" src={vector3} />
            </Box>
          </Box>
          <Box sx={{ marginTop: "10px", marginBottom: "31px" }} className="workFlowItemBox">
            <Typography sx={{ marginBottom: "6px" }} className="poppins WorkFlowItemBoxCenterText" variant="h5">Electric Vehicle
              & Design</Typography>
          </Box>
          <Box className="hoverBtnBox h3">
            <Box sx={{ marginBottom: "15px", display: hoveredItems[3] ? "block" : "none" }} className="workFlowItemBox btnBox">
              <BlueButton BtnText="View Details" />
            </Box>
          </Box>
          <Box className="workFlowItemBox companyLogoBox">
            <img style={{ height: "18px" }} className="companyLogo" src={ION} />
            <img className="companyLogo companyLogoImg" src={mahindra} />
            <img style={{ height: "35px" }} className="companyLogo" src={ampere} />
          </Box>
        </Box>


        <Box className="workFlowItem workFlowItem4"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
          onClick={() => setAdvanceCarBox(true)}
        >
          <Box className="workFlowItemBox">
            <Box className="logoBG logoBackground4">
              <img className="vector1Logo" src={vector4} />
            </Box>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkFlowItemBoxCenterText poppins" variant="h5">Advance CAE &
              <br /> Design</Typography>
          </Box>
          <Box className="workFlowItemBox">
            <Typography className="WorkflowPByText">Designed by Expert From</Typography>
          </Box>
          <Box className="hoverBtnBox">
            <Box sx={{ marginTop: "16px", display: hoveredItems[4] ? "block" : "none" }} className="workFlowItemBox btnBox">
              <WorkFlowBtn backgroundColor="#ebb3a5" BtnText="View Details" BorderColor="#d37d68" />
            </Box>
          </Box>
          <Box className="workFlowItemBox companyLogoBox">
            <img style={{ width: "76px" }} className="companyLogo fortBoxhLogo" src={honda} />
            <img className="companyLogo fortBoxhLogo" src={volvo} />
            <img className="companyLogo fortBoxhLogo" src={tata} />
          </Box>
        </Box>

      </Box>
      <Box className="workFlowBtn">
        <RedButton onClick={() => setEnrollBox(true)} BtnText="Get Started" width="243px" />
      </Box>
    </Box>
  )
}