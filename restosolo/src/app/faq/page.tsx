"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid rgba(223, 94, 0, 100)`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(24, 23, 28, 100)"
      : "rgba(43, 42, 50, 100)",
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

interface CustomizedAccordionsProps {
  id: number;
  question: string;
  answer: string;
}

export default function CustomizedAccordions({
  id,
  question,
  answer,
}: CustomizedAccordionsProps) {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
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
      {/* Use question and answer directly */}
      <Accordion
        expanded={expanded === id}
        onChange={handleChange(id)}
        style={{ width: "100%", maxWidth: "1000px" }}
      >
        <AccordionSummary
          aria-controls={`panel${id}-content`}
          id={`panel${id}-header`}
        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
