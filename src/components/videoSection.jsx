import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Player } from "video-react";
import poster from "@/images/google-ad-thumbnail.webp";
import { CheckCircle } from "@mui/icons-material";
import google from "@/images/google-partner.webp";
const VideoSection = () => {
  const items = [
    {
      item: "Comprehensive Audit of Your Google Ads in 30 minutesv",
    },
    {
      item: "Actionable insights for better management of your ad account",
    },
    {
      item: "Customised strategies for higher ad performance and smarter ad spend",
    },
    {
      item: "Guidance for Improved ROAS and conversion",
    },
  ];
  return (
    <div>
      <Grid container spacing={5} mt={0.5}>
        <Grid item lg={6}>
          <Player
            src="https://www.youtube.com/embed/gFL6FucuCRQ?si=v_xfMhG-ETmBys9O"
            poster={poster}
          />
          {/* <iframe
            width="500"
            height="500"
            src="https://www.youtube.com/embed/gFL6FucuCRQ?si=v_xfMhG-ETmBys9O"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style={{ borderRadius: "8px", border: "5px solid #1b72e8" }}
          ></iframe> */}
          <Box sx={{ mt: 2, backgroundColor: "#2E353B" }}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <img src={google.src} />
              <Typography sx={{ color: "#fff", fontSize: 15 }}>
                We are among Top 3% of the Ad agencies in India
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box>
            <Typography
              textAlign={"center"}
              fontSize={25}
              fontWeight={550}
              mb={2}
            >
              WHY GET OUR EXPERT AUDIT?
            </Typography>
            <Box
              sx={{ backgroundColor: "#E7F0FE", borderRadius: "8px", p: 1.4 }}
            >
              <List>
                {items.map((val, i) => (
                  <ListItem key={i}>
                    <ListItemAvatar>
                      <CheckCircle sx={{ color: "#008000" }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={val.item}
                      sx={{
                        "& .MuiTypography-root": {
                          fontWweight: 400,
                          fontSize: "16px",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Typography
              sx={{ mt: 2, fontSize: 20, textAlign: "center", fontWeight: 550 }}
            >
              Get Our Expert Audit at Just Rs.499/-
            </Typography>
            <Box sx={{ mt: 1, textAlign: "center" }}>
              <Button
                sx={{
                  backgroundColor: "#0F9D58",
                  color: "#fff",
                  textTransform: "uppercase",
                  p: 2,
                  //   width: "50%",
                  fontSize: {lg:30,sm:20},
                  fontWeight: 550,
                  ":hover": {
                    backgroundColor: "#0F9D58",
                    color: "#fff",
                  },
                  
                }}
              >
                start my audit now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoSection;
