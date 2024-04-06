import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const RoadMap = (props) => {
  return (
    <div>
      <Box
        sx={{
          border: props.border,
          borderRadius: "0px 20px 20px 0px",
          backgroundColor: props.bgColor,
        //   height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <img src={props.img} />
          <Box p={2}>
            <Typography fontSize={{ lg: 28, sm: 15 }} fontWeight={600}>
              {props.title}
            </Typography>
            <Typography mt={1} fontSize={18} fontWeight={500} >
              {props.heading}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default RoadMap;
