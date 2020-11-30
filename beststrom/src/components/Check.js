import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Accordion from "./Accordion";
import Tabs from "./Tabs";
import axios from "axios";
import { ImportExport } from "@material-ui/icons";

const PRODUCT_TYPE_SPOT = "SPOT",
  PRODUCT_TYPE_PURCHASE = "PURCHASE",
  PRODUCT_TYPE_CUSTOM = "CUSTOM",
  PRODUCT_TYPE_HOURLY_SPOT = "HOURLY SPOT",
  PRICE_TYPE_SPOT = "SPOT";
  
export default function Check() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [country, setCountry] = useState(["react", "angular"]);
  const [selcountry, setSelcountry] = useState(1);
  const [consumption, setConsumption] = useState([
    "5000",
    "10000",
    "16000",
    "20000",
    "40000",
  ]);
  const [kwhYear, setkwhYear] = useState(16000);
  const [filter, setFilter] = useState("SPOT");
  const vatPrice = (price, t) => {
    if (price && t.vatApplicable) {
      var n = t.currentPrice.vatRatio;
      price *= 1 + n;
    }
    return price;
  };
  const periodToMonths = (billingFrequency, billingFrequencyUnits) => {
    if (billingFrequency && billingFrequency > 0)
      switch (billingFrequencyUnits) {
        case "day":
          return billingFrequency / 30;
        case "month":
          return billingFrequency || 1;
        case "year":
          return 12 * billingFrequency;
        default:
          return billingFrequency;
      }
    return 0;
  };
  const checkSpotProductType = (e) => {
    return (
      e.productType === PRODUCT_TYPE_SPOT ||
      e.productType === PRODUCT_TYPE_PURCHASE ||
      e.productType === PRODUCT_TYPE_HOURLY_SPOT ||
      (e.productType === PRODUCT_TYPE_CUSTOM && e.priceType === PRICE_TYPE_SPOT)
    );
  };

  const spotPriceValidation = (e, t, n) => {
    var r = e;
    return t && checkSpotProductType(n) && (r += t), r;
  };

  const excessKwhfunc = (e, monthlyConsumption) => {
    if (
      e.maxKWYear &&
      e.maxKWYear > 0 &&
      e.kwPriceExcessUsage &&
      e.kwPriceExcessUsage > 0
    ) {
      var t = e.currentPrice.usageMonthlyProfile * e.maxKWYear;
      if (t < monthlyConsumption) return monthlyConsumption - t;
    }
    return 0;
  };

  let processdata = data
    .map((item) => {
      const billsMonthly =
        item.billingFrequency && item.billingFrequency > 0
          ? 1 /
            periodToMonths(item.billingFrequency, item.billingFrequencyUnits)
          : 0;
      const addonPriceMinimumFixedForInMonths = periodToMonths(
        item.addonPriceMinimumFixedFor,
        item.addonPriceMinimumFixedForUnits
      );
      const agreementTimeInMonths = periodToMonths(
        item.agreementTime,
        item.agreementTimeUnits
      );
      const intermediateAddonPrice = item.currentPrice.addonPrice;

      const intermediateKwPrice = item.currentPrice.kwPrice;

      const finalConsumerElectricityTax = vatPrice(
        item.currentPrice.consumerElectricityTax,
        item
      );

      const finalAddonPrice = vatPrice(intermediateAddonPrice, item);

      const finalMonthlyFee = vatPrice(item.currentPrice.monthlyFee, item);

      const finalFeeMail = vatPrice(item.currentPrice.feeMail, item);
      const finalContractBreachFee = vatPrice(
        item.currentPrice.contractBreachFee,
        item
      );
      const finalKwPrice = vatPrice(intermediateKwPrice, item);
      const intermediateKwPriceExcessUsage = item.kwPriceExcessUsage;
      const finalKwPriceExcessUsage = vatPrice(
        intermediateKwPriceExcessUsage,
        item
      );
      const electricityPerKwh = spotPriceValidation(
        finalKwPrice,
        finalAddonPrice,
        item
      );
      let intermediateAddonPriceExcessUsage,
        finalAddonPriceExcessUsage,
        excessPricePerKwh;
      excessPricePerKwh = checkSpotProductType(item)
        ? item.currentPrice.addonPriceExcessUsage &&
          item.currentPrice.addonPriceExcessUsage > 0
          ? ((intermediateAddonPriceExcessUsage =
              item.currentPrice.addonPriceExcessUsage),
            (finalAddonPriceExcessUsage = intermediateAddonPriceExcessUsage),
            electricityPerKwh + (finalAddonPriceExcessUsage - finalAddonPrice))
          : 0
        : item.kwPriceExcessUsage && item.kwPriceExcessUsage > 0
        ? finalKwPriceExcessUsage - electricityPerKwh
        : 0;

      const yearlyConsumption = kwhYear;
      const monthlyConsumption =
        yearlyConsumption * item.currentPrice.usageMonthlyProfile;
      let finalFeePayment;
      if (item.paymentMail) finalFeePayment = finalFeeMail;
      else {
        finalFeePayment = 0;
      }
      const fixedMonthlyElectricityPrice =
        finalMonthlyFee + finalFeePayment * billsMonthly;
      const fixedElectricityYearly =
        12 * finalMonthlyFee + finalFeePayment * billsMonthly * 12;
      const excessKwh = excessKwhfunc(item, monthlyConsumption);
      const excessUsageCost =
        excessKwh > 0 && excessPricePerKwh > 0
          ? excessKwh * excessPricePerKwh
          : 0;

      const electricityMonthlyConsumptionPrice =
        electricityPerKwh * monthlyConsumption;
      const fullMonthlyElectricityPrice =
        electricityMonthlyConsumptionPrice +
        fixedMonthlyElectricityPrice +
        excessUsageCost;
      const fixedElectricityPerKwh =
        yearlyConsumption > 0 ? fixedElectricityYearly / yearlyConsumption : 0;
      const fullElectricityPerKwh = electricityPerKwh + fixedElectricityPerKwh;
      const finalfullMonthlyElectricityPricePrice = Math.round(
        fullMonthlyElectricityPrice
      );
      const finalfullElectricityPerKwhPrice =
        Math.round(1e4 * fullElectricityPerKwh) / 100;

      return {
        billsMonthly: billsMonthly,
        addonPriceMinimumFixedForInMonths: addonPriceMinimumFixedForInMonths,
        agreementTimeInMonths: agreementTimeInMonths,
        intermediateAddonPrice: intermediateAddonPrice,
        intermediateKwPrice: intermediateKwPrice,
        finalConsumerElectricityTax: finalConsumerElectricityTax,
        finalAddonPrice: finalAddonPrice,
        finalMonthlyFee: finalMonthlyFee,
        finalFeeMail: finalFeeMail,
        finalContractBreachFee: finalContractBreachFee,
        finalKwPrice: finalKwPrice,
        intermediateKwPriceExcessUsage: intermediateKwPriceExcessUsage,
        finalKwPriceExcessUsage: finalKwPriceExcessUsage,
        electricityPerKwh: electricityPerKwh,
        intermediateAddonPriceExcessUsage: intermediateAddonPriceExcessUsage,
        finalAddonPriceExcessUsage: finalAddonPriceExcessUsage,
        excessPricePerKwh: excessPricePerKwh,
        finalfullMonthlyElectricityPricePrice: finalfullMonthlyElectricityPricePrice,
        finalfullElectricityPerKwhPrice: finalfullElectricityPerKwhPrice,
        fullElectricityPerKwh: fullElectricityPerKwh,
        organizationName: item.organizationName,
        productName: item.productName,
        monthlyConsumption: monthlyConsumption,
        fullMonthlyElectricityPrice: fullMonthlyElectricityPrice,
        electricityMonthlyConsumptionPrice: electricityMonthlyConsumptionPrice,
        orderUrl: item.orderUrl,
        productType: item.productType,
        productId: item.productId,
        applicableToCustomersType: item.applicableToCustomersType,
        feeEFakturaMandatory: item.feeEFakturaMandatory,
        feeAvtalegiroMandatory: item.feeAvtalegiroMandatory,
        feeMandatoryUpdated: item.feeMandatoryUpdated,
        agreementTimeUnits: item.agreementTimeUnits,
        agreementTime: item.agreementTime,
      };
    })
    .filter((element) => {
      if (filter === "OTHER")
        return (
          element.productType === "HOURLY SPOT" ||
          element.productType === "CUSTOM" ||
          element.productType === "PURCHASE"
        );
      if (filter === "SPOT")
        return (
          element.productType === "HOURLY SPOT" ||
          element.productType === "SPOT"
        );
      return element.productType === filter;
    }).sort((a, b) => (a.finalfullMonthlyElectricityPricePrice > b.finalfullMonthlyElectricityPricePrice) ? 1 : -1 );
  const filtering = (val) => {
    setFilter(val);
  };
  useEffect(() => {
    const fetchcountrydata = async () => {
      const fetchcountry = await axios.get(
        "https://www.strompris.no/rest/municipalities"
      );
      const countries = fetchcountry.data;
      setCountry(countries);
    };
    fetchcountrydata();
  }, []);

  const fetchdata = async () => {
    setFlag(true);
    const fetchdata = await axios.get(
      `https://www.strompris.no/rest/products/get/municipality/${selcountry}?v=master_48`
    );
    setData(fetchdata.data);
    setFlag(false);
  };

  return (
    <div>
      <div className="div-block-34">
        <div className="div-block-35">
          <div className="div-block-36">
            <h1 className="h2">sjekk strømprisene</h1>
            <div className="w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                className="form"
              >
                <label htmlFor="name">hvilken kommune bor du i?</label>
                <Autocomplete
                  maxLength="256"
                  name="name"
                  data-name="Name"
                  id="name"
                  options={country}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, value) => setSelcountry(value.id)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className="arest"
                      variant="outlined"
                    />
                  )}
                  freeSolo
                />

                <label htmlFor="email">
                  hva er ditt årlige strømforbruk?
                  <br />
                  (se strømregningen din)
                </label>

                <Autocomplete
                  maxLength="256"
                  name="name"
                  data-name="Name"
                  id="name"
                  options={consumption}
                  getOptionLabel={(option) => option + " kWt"}
                  onChange={(event, value) => setkwhYear(parseInt(value))}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className="arest"
                      variant="outlined"
                    />
                  )}
                  freeSolo
                />
                <input
                  defaultValue="SJEKK STRØMPRISENE"
                  data-wait="Vennligst vent..."
                  className=" w-button submit-button"
                  onClick={() => fetchdata()}
                />
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {flag && (
        <div className="overlay">
          <div className="wrap">
            <div className="content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 400 400"
              >
                <defs>
                  <clipPath id="clip-path">
                    <path
                      d="M47.08 63.27h305.84v273.46H47.08z"
                      className="overlaySearch-1"
                    ></path>
                  </clipPath>
                  <clipPath id="clip-path-2">
                    <path
                      d="M47.08 63.27h305.84v273.46H47.08z"
                      className="overlaySearch-1"
                    ></path>
                  </clipPath>
                </defs>
                <g
                  id="Cyan_Nysgjerrig"
                  className="overlaySearch-2 overlaySearch-3"
                  data-name="Cyan Nysgjerrig"
                >
                  <path
                    d="M125.5 336.73a25.58 25.58 0 0 1-24.59-18.94l-.18-.64c-6-21.3-25.44-92.86-25.44-119.34v-121a13.56 13.56 0 0 1 13.54-13.54h166.7a13.57 13.57 0 0 1 13.55 13.55v128.32h76.28a7.51 7.51 0 0 1 7.31 5.72 5.91 5.91 0 0 1 .24 1.82 7.47 7.47 0 0 1-4 6.63L137.62 333.66a25.42 25.42 0 0 1-12.13 3.07M88.83 69.95A6.88 6.88 0 0 0 82 76.82v121c0 26.29 21 102.52 25.19 117.54l.2.72a18.77 18.77 0 0 0 27.08 11.72l211.32-114.37a.84.84 0 0 0 .46-.75c-.13-.6-.48-.86-.87-.86h-83v-135a6.89 6.89 0 0 0-6.88-6.87z"
                    className="overlaySearch-4"
                  ></path>
                  <path
                    d="M143.94 155.46a33.06 33.06 0 0 1-8.31-1.07 32.7 32.7 0 1 1 8.31 1.07m-.1-59.11a26.21 26.21 0 1 0 22.64 12.92 26 26 0 0 0-22.64-12.92"
                    className="overlaySearch-4"
                  ></path>
                  <path
                    d="M47.494 175.914l68.017-40.336 3.41 5.744-68.02 40.336zM155.57 122.56a11.13 11.13 0 1 1-11.13-11.13 11.13 11.13 0 0 1 11.13 11.13m55.08 0a11.13 11.13 0 1 1-11.13-11.13 11.13 11.13 0 0 1 11.13 11.13"
                    className="overlaySearch-4"
                  ></path>
                  <path
                    d="M158.91 122.56a15 15 0 1 1-15-15 15 15 0 0 1 15 15"
                    className="overlaySearch-4"
                  ></path>
                </g>
              </svg>
              <p>Vent to sekunder mens jeg leter frem priser for deg</p>
            </div>
          </div>
        </div>
      )}
      {!flag && processdata.length > 0 && <Tabs filtering={filtering} />}
      {!flag && (
        <>
          <Accordion items={processdata} selectedfilter={filter}></Accordion>
        </>
      )}
      {!flag && processdata.length > 0 && (
        <div className="div-block-22">
          <div className="div-block-21">
            <h4 className="more-link-text">Flere tilbud</h4>
          </div>
        </div>
      )}
    </div>
  );
}
