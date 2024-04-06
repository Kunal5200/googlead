import { Add, ExpandMore, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Faq = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (e, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        sx={{
          border: "3px solid #d7d7d7",
          boxShadow: "none",
          backgroundColor: "transparent",
          borderBottom:
            expanded === "panel1" ? "3px solid #d7d7d7" : "1.5px solid #d7d7d7",
          //   mb: 1,
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <Remove sx={{ fontSize: 20, fill: "#000", fontWeight: 600 }} />
            ) : (
              <Add sx={{ fontSize: 20, fill: "#000", fontWeight: 600 }} />
            )
          }
          sx={{
            flexDirection: "row-reverse",
            borderBottom: expanded === "panel1" && "3px solid #d7d7d7",
          }}
        >
          <Typography fontSize={20} fontWeight={600} ml={2}>
            IS MY ACCOUNT INFORMATION SAFE?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: 15, px: 3, pt: 3, pb: 3 }}>
            Absolutely! We prioritize the security of your information above
            all. We adhere to strict confidentiality standards and do not share,
            sell, or misuse your information in any manner. Once the audit is
            completed, any account access we may have had is revoked.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          border: "3px solid #d7d7d7",
          boxShadow: "none",
          backgroundColor: "transparent",
          borderBottom:
            expanded === "panel2" ? "3px solid #d7d7d7" : "1.5px solid #d7d7d7",
          //   mb: 1,
        }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <Remove sx={{ fontSize: 20, fill: "#000", fontWeight: 600 }} />
            ) : (
              <Add sx={{ fontSize: 20, fill: "#000", fontWeight: 600 }} />
            )
          }
          sx={{
            flexDirection: "row-reverse",
            borderBottom: expanded === "panel2" && "3px solid #d7d7d7",
          }}
        >
          <Typography fontSize={20} fontWeight={600} ml={2}>
            HOW LONG DOES THE AUDIT TAKE?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: 15, px: 3, pt: 3, pb: 3 }}>
            Our audit is thorough and comprehensive. Typically, the process
            takes between 1-2 business days. This timeframe ensures that we
            meticulously analyze every aspect of your Google Ads account and
            provide actionable insights. You’ll receive a detailed report at the
            end of this period.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          border: "3px solid #d7d7d7",
          boxShadow: "none",
          backgroundColor: "transparent",
          borderBottom:
            expanded === "panel3" ? "3px solid #d7d7d7" : "3px solid #d7d7d7",
          mb: 1,
        }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <Remove sx={{ fontSize: 20, fill: "#000", fontWeight: 600 }} />
            ) : (
              <Add sx={{ fontSize: 20, fill: "#000", fontWeight: 600 }} />
            )
          }
          sx={{
            flexDirection: "row-reverse",
            borderBottom: expanded === "panel3" && "3px solid #d7d7d7",
          }}
        >
          <Typography fontSize={20} fontWeight={600} ml={2}>
            WHAT IF I HAVE MULTIPLE GOOGLE ADS ACCOUNTS?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: 15, px: 3, pt: 3, pb: 3 }}>
            If you have multiple Google Ads accounts, we can certainly audit
            each one of them. Each account will be treated as a separate audit.
            For multiple accounts, we recommend reaching out to our team
            directly, and we may be able to offer a bundled discount or package
            deal based on the number of accounts
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Faq;
