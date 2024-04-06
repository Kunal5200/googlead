import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          mt: 2,
         
          padding: "20px 0",
        }}
      >
        <Container
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: 35, sm: 30 },
              fontWeight: 700,
              color: "#fff",
              mb: 2,
            }}
          >
            Here Are the Two Choices You Have...
          </Typography>
          <Box
            sx={{
              backgroundColor: "grey",
              px: 4,
              py: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: 35, sm: 30 },
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Continue{" "}
              <Typography variant="span" color="#EA4335">
                Spending Your Hard Earned Money{" "}
              </Typography>
              on Google Ads without even knowing whether it's a waste or not..
            </Typography>
            <Box
              sx={{
                backgroundColor: "#343434",
                mt: 2,
                p: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: 35, sm: 30 },
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Get your account and campaigns reviewed by experts who know
                exactly how to{"  "}
                <Typography variant="span" color="#0F9D58">
                  Maximise Your ROAS
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                my: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: 35, sm: 30 },
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                What Would You Choose?
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                mt: 2,
                py: 2,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: 35, sm: 30 },
                  fontWeight: 700,
                  color: "#000",
                }}
              >
                Remember… The Road to Higher Performance of your campaigns and
                smarter spending of your budget starts with{" "}
                <Typography variant="span" color="#0F9D58">
                  just a Rs. 499 Comprehensive Google Ads Audit
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Button
                sx={{
                  backgroundColor: "#0F9D58",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: { lg: 35, sm: 30 },
                  fontWeight: 550,
                }}
              >
                start my audit now
              </Button>
            </Box>
            <Box
              sx={{
                my: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: 35, sm: 30 },
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                What Would You Choose?
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;