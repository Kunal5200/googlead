import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const WrapperHeading = (props) => {
  return (
    <div>
      <Box
        sx={{
          border: "1px solid #E7F0FE",
          backgroundColor: "#E7F0FE",
          borderRadius: "15px",
        }}
      >
       {props.children}
      </Box>
    </div>
  );
};

export default WrapperHeading;
