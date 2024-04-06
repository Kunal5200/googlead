import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import step1 from "@/images/step1.png";
import step2 from "@/images/step2.png";
import step3 from "@/images/step3.png";
import Image from "next/image";
const Experts = () => {
  const items = [
    {
      step: "STEP 1",
      item: "Securely Submit Your Google Ads Details (100% Safe & Secure)",
      bg: "#fce8e5",
      border: "2px solid #C5221F",
      img: step1.src,

      color: "#C5221F",
    },
    {
      step: "STEP 2",
      item: "Our Expert analyses and gives a comprehensive report",
      bg: "#e7f0fe",
      border: "2px solid DeepSkyBlue",
      img: step2.src,
      color: "DeepSkyBlue",
    },
    {
      step: "STEP 3",
      item: "Get actionable insights & data-backed recommendations to supercharge your ads",
      bg: "#e8f3eb",
      border: "2px solid #0F9D58",
      img: step3.src,
      color: "#0F9D58",
    },
  ];
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          textAlign: "center",
          mt: 3,
        }}
      >
        {items.map((val, id) => {
          return (
            <Grid item lg={4} key={id} textAlign={"center"}>
              <Box
                sx={{
                  backgroundColor: val.bg,
                  border: val.border,
                  mx: 1,
                  pt: 5,
                  height: "15rem",
                  width: "80%",
                  px: 3,
                  borderRadius: "6px",
                }}
              >
                <img src={val.img} width={50} />
                <Typography
                  variant="h6"
                  fontSize={"28px"}
                  fontWeight={700}
                  sx={{
                    my: 1.5,
                    color: val.color,
                  }}
                >
                  {val.step}
                </Typography>
                <Typography variant="h6" fontSize={"18px"} fontWeight={700}>
                  {val.item}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Experts;
