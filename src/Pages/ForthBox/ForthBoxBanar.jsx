import React from 'react';
import { Box, Typography } from "@mui/material";
import "./style.css";

export default function ForthBoxBanar() {
  return (
    <Box className="banarBox">
      <Box className="archiveBox">
        <Typography mb={2} className="boldFont" sx={{ fontWeight: "bolder" }} variant='h4'>
          Achieve Your Goals With Our<br /> Online Courses</Typography>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet consectetur. Nulla sed turpis adipiscing mauris sit
          morbi potenti mauris. Nulla<br /> pharetra facilisi fringilla convallis Lorem ipsum dolor sit amet consectetur.
          Nulla sed turpis adipiscing mauris sit<br /> morbi potenti mauris.
          Nulla pharetra facilisi fringilla convallis
        </Typography>

      </Box>
    </Box>
  )
}
