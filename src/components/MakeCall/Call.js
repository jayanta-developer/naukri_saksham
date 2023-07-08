import React from "react";
import { Box, Typography } from "@mui/material";

export default function Call() {
  const phoneNumber = "7679624307";
  return (
    <>
      <Box>
        {/* Your other content */}
        <Typography>
          Call us at <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </Typography>
        {/* More content */}
      </Box>
    </>
  );
}
