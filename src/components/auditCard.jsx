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
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <img src={props.img} />
          <Box>
            <Typography>{props.title}</Typography>
            <Typography
              fontSize={{ lg: 18, sm: 15,xs:15 }}
              fontWeight={600}
              px={1}
              py={1}
            >
              {props.heading}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default AuditCard;
