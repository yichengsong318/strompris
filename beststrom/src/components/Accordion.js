import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import { withStyles } from '@material-ui/core/styles';
import Content from "./Content";

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "unset"
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
  },
  details: {
    alignItems: "center",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    padding: 0,
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

export default function DetailedAccordion(props) {
  const [expanded, setExpanded] = React.useState(false);
  const {selectedfilter} = props;
  console.log(selectedfilter)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <>
      {props.items &&
        props.items.map((item) => (
          <Accordion
            key={item.productId}
            expanded={expanded === item.productId}
            onChange={handleChange(item.productId)}
          >
            <div className="priser-container">
              <div className="strompris-mal-SPOT">
                <div className="priser-holder-strompris-copy">
                  <div className="w-layout-grid grid-1-copy">
                    <div
                      id="w-node-50e2cbff86e5-d78c1885"
                      className="blue-stroke-holder-copy"
                    >
                      <div className="les-mer-accordion-trigger-strompris w-inline-block">
                        <AccordionSummary aria-controls="panel1c-content">
                          <h4 className="heading-les-mer">les mer</h4>
                        </AccordionSummary>
                      </div>
                    </div>
                    <div
                      id="w-node-50e2cbff86e9-d78c1885"
                      className={`div-block-52-${selectedfilter}`}
                    >
                      <h4 className="heading-8 heading-bold-normal">
                        Strømselskap
                      </h4>
                    </div>
                    <div
                      id="w-node-50e2cbff86ec-d78c1885"
                      className={`div-block-53-${selectedfilter}`}
                    >
                      <h4 className="heading-bold">
                        {item.organizationName}
                        <br />
                        <span className="text-span-3">{item.productName}</span>
                      </h4>
                    </div>
                    <div
                      id="w-node-50e2cbff86f2-d78c1885"
                      className={`div-block-52-${selectedfilter}`}
                    >
                      <h4 className="heading-bold-normal">
                        Forventet månedspris
                      </h4>
                    </div>
                    <div
                      id="w-node-50e2cbff86f5-d78c1885"
                      className={`div-block-53-${selectedfilter}`}
                    >
                      <h4 className="heading-bold-align-right">
                        {item.finalfullMonthlyElectricityPricePrice + " kr"}
                      </h4>
                    </div>
                    <div
                      id="w-node-50e2cbff86f8-d78c1885"
                      className={`div-block-52-${selectedfilter}`}
                    >
                      <div className="hourglass"></div>
                      <div className={`div-block-51-${selectedfilter}`}>
                        <h4 className="heading-bold-normal">
                          Garantert pris i
                        </h4>
                      </div>
                    </div>
                    <div
                      id="w-node-50e2cbff86fd-d78c1885"
                      className={`div-block-53-${selectedfilter}`}
                    >
                      <div className="calender"></div>
                      <div className="div-block-50">
                        <h4 className="heading-bold-copy">
                          {item.addonPriceMinimumFixedForInMonths
                            ? item.addonPriceMinimumFixedForInMonths + " mnd"
                            : item.agreementTimeInMonths + " mnd"}
                        </h4>
                      </div>
                    </div>
                    <a
                      id="w-node-50e2cbff8702-d78c1885"
                      data-w-id="35e5f23a-9451-30e3-e57e-50e2cbff8702"
                      href={`${item.orderUrl}`}
                      className="bestill-button w-inline-block"
                    >
                      <h4 className="heading-bestill">bestill</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <AccordionDetails className={classes.details}>
              <Content item={item}/>
            </AccordionDetails>
            <AccordionActions></AccordionActions>
          </Accordion>
        ))}
    </>
  );
}
