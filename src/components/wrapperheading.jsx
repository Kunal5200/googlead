import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const WrapperHeading = (props) => {
  return (
    <div>
      <Box
        sx={{
          border: props.border,
          backgroundColor: props.bgColor,
          borderRadius: "25px",
          p: 0.5,
        }}
      >
        {props.children}
      </Box>
    </div>
  );
};

export default WrapperHeading;
