import { Box, Typography } from "@mui/material";
import React from "react";

const Experience = (props) => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: props.bgColor,
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          borderBottomLeftRadius: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          width: 200,
          p: 3,
        //   height:100
        }}
      >
        <Box>{props.children}</Box>
      </Box>
    </div>
  );
};

export default Experience;
