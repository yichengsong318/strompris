import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function FreqAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary aria-controls="panel1c-content" id="panel1c-header">
          <div className="w-dropdown-toggle">
            <div className="w-icon-dropdown-toggle"></div>
            <div className="text-block-3">Hva er strøm?</div>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {props.children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
