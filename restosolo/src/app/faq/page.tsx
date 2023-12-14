"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid rgba(223, 94, 0, 100)`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />} {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(24, 23, 28, 100)" : "rgba(43, 42, 50, 100)",
  color: "white",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(223, 94, 0, 100)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2rem",
        paddingBottom: "4rem",
        backgroundColor: "#18171C",
      }}
    >
      <Typography
        variant="h5"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "flex" },
          fontFamily: "sans-serif",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "none",
          marginBottom: "2rem",
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ width: "100%", maxWidth: "1000px" }} // Adjust the max width as needed
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How can I make a reservation?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Absolutely! To make a reservation, you can contact us by phone number. We recommend making a reservation maximum 1 day in advance, especially during peak hours, to ensure we have a table ready for you.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} style={{ width: "100%", maxWidth: "1000px" }}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Do you offer vegetarian or vegan options?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer a variety of vegetarian and vegan dishes on our menu. We understand the importance of catering to different dietary preferences, and our chefs have crafted delicious plant-based options for you to enjoy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} style={{ width: "100%", maxWidth: "1000px" }}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What safety measures are in place regarding food allergies?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We take food allergies seriously. Our chefs are trained to accommodate various dietary restrictions. If you have specific allergies or dietary concerns, please inform your server, and we will do our best to provide a safe and
            enjoyable dining experience for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
