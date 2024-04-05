import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import info from "@/images/info.webp";
const AuditCard = (props) => {
  return (
    <div>
      <Box
        sx={{
          border: props.border,
          borderRadius: "0px 20px 20px 0px",
          backgroundColor: props.bgColor,
          height: 95,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2} >
          <img src={props.img} />
          <Typography fontSize={18} fontWeight={600} px={1} py={1}  >
            {props.heading}
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default AuditCard;
