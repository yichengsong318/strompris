import { ImportExport } from "@material-ui/icons";
import React from "react";

export default function Content(props) {
  const { item } = props;
  console.log(item);
  return (
    <div>
      <div
        style={{
          height: "100%",
          width: "90%",
        }}
        className="accordion-wrapper-strompris-2-copy"
      >
        <div className="w-layout-grid grid-3-copy">
          <h5 id="w-node-50e2cbff8707-d78c1885" className="heading-7">
            STRØMUTGIFT
          </h5>
          <div id="w-node-50e2cbff8709-d78c1885" className="div-block-37">
            <div className="w-layout-grid grid-4">
              <div
                id="w-node-50e2cbff870b-d78c1885"
                className="text-block-5-align-right"
              >
                {item.fullMonthlyElectricityPrice != null
                  ? item.fullMonthlyElectricityPrice
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")
                  : Math.round(item.fullMonthlyElectricityPrice).toFixed(
                      2
                    )}{" "}
                kroner
              </div>
              <div
                id="w-node-50e2cbff870d-d78c1885"
                className="text-block-5-header"
              >
                BEREGNET STRØMUTGIFT DENNE MÅNEDEN BASERT PÅ DAGENS PRIS
              </div>
              <div
                id="w-node-50e2cbff870f-d78c1885"
                className="text-block-5-align-left"
              >
                Strømutgift
              </div>
              <div
                id="w-node-50e2cbff8711-d78c1885"
                className="text-block-5-align-left"
              >
                = Beregnet strømutgift denne måneden
              </div>
              <div
                id="w-node-50e2cbff8713-d78c1885"
                className="text-block-5-align-right"
              >
                + Nettleie
              </div>
              {item.productType !== "FIXED" && item.productType !== "VARIABLE" && (
                <>
                  <div
                    id="w-node-50e2cbff8715-d78c1885"
                    className="text-block-4-align-left"
                  >
                    Påslag
                  </div>
                  <div
                    id="w-node-50e2cbff8717-d78c1885"
                    className="text-block-4-align-right"
                  >
                    {item.finalAddonPrice != null
                      ? (item.finalAddonPrice.toFixed(4) * 100)
                          .toFixed(2)
                          .toString()
                          .replace(".", ",")
                      : Math.round(item.finalAddonPrice)
                          .toFixed(2)
                          .toString()
                          .replace(".", ",")}{" "}
                    øre/kWt
                  </div>
                </>
              )}
              <div
                id="w-node-50e2cbff8719-d78c1885"
                className="text-block-4-align-right"
              >
                {item.finalKwPrice != null
                  ? (item.finalKwPrice.toFixed(4) * 100)
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")
                  : Math.round(item.finalKwPrice).toFixed(2)}{" "}
                øre/kWt
              </div>
              <div
                id="w-node-50e2cbff871b-d78c1885"
                className="text-block-4-align-right"
              >
                {item.finalKwPrice != null
                  ? (item.electricityPerKwh.toFixed(4) * 100)
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")
                  : Math.round(item.finalKwPrice).toFixed(2)}{" "}
                øre/kWt
              </div>
              <div
                id="w-node-50e2cbff871d-d78c1885"
                className="text-block-4-align-right"
              >
                {item.electricityMonthlyConsumptionPrice != null
                  ? item.electricityMonthlyConsumptionPrice
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")
                  : Math.round(item.electricityMonthlyConsumptionPrice).toFixed(
                      2
                    )}{" "}
                kroner
              </div>
              <div
                id="w-node-50e2cbff871f-d78c1885"
                className="text-block-4-align-right"
              >
                {item.fullElectricityPerKwh != null
                  ? item.finalMonthlyFee.toFixed(2).toString().replace(".", ",")
                  : Math.round(item.finalMonthlyFee).toFixed(2)}{" "}
                kroner
              </div>

              <div
                id="w-node-50e2cbff8721-d78c1885"
                className="text-block-4-align-left"
              >
                {item.productType !== "FIXED" && item.productType !== "VARIABLE"
                  ? "Anslått spotpris"
                  : "Strømpris"}
              </div>
              <div
                id="w-node-50e2cbff8723-d78c1885"
                className="text-block-4-align-left"
              >
                = Total pris
              </div>
              <div
                id="w-node-50e2cbff8725-d78c1885"
                className="text-block-4-align-left"
              >
                Beregnet forbruk {Math.round(item.monthlyConsumption)} kWt à{" "}
                {item.finalKwPrice != null
                  ? (item.electricityPerKwh.toFixed(4) * 100)
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")
                  : Math.round(item.finalKwPrice).toFixed(2)}{" "}
                øre
              </div>
              <div
                id="w-node-50e2cbff8727-d78c1885"
                className="text-block-4-align-left"
              >
                + Fastbeløp til Fjordkraft AS
              </div>
              <div
                id="w-node-50e2cbff8729-d78c1885"
                className="div-block-48-double-singel-line"
              ></div>
              <div
                id="w-node-50e2cbff872a-d78c1885"
                className="div-block-48-double-line-top"
              ></div>
            </div>
          </div>
          <div id="w-node-50e2cbff872b-d78c1885" className="div-block-64">
            <img
              src="images/trygg-close-01.png"
              loading="lazy"
              width="30"
              data-w-id="35e5f23a-9451-30e3-e57e-50e2cbff872c"
              alt=""
              className="image-2"
            />
          </div>
        </div>
        <div className="div-block-61">
          <div className="w-layout-grid grid-5">
            <div
              id="w-node-50e2cbff872f-d78c1885"
              className="div-block-62-heading"
            >
              <div className="text-block-7">
                Prisen oppgitt inkluderer strøm og nettleie på en regning:
              </div>
            </div>
            <div
              id="w-node-50e2cbff8732-d78c1885"
              className="div-block-62-heading"
            >
              <div className="text-block-7">
                Avtalen krever følgende betalingsmåte:
              </div>
            </div>
            <div
              id="w-node-50e2cbff8735-d78c1885"
              className="div-block-62-heading"
            >
              <div className="text-block-7">
                Betaling etter forbruk skjer gjennom:
              </div>
            </div>
            {item.finalContractBreachFee ? (
              <div
                id="w-node-50e2cbff8738-d78c1885"
                className="div-block-62-heading"
              >
                <div className="text-block-7">
                  Maksimal kostnad ved å bryte bindingstiden:
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              id="w-node-50e2cbff873b-d78c1885"
              className="div-block-62-heading"
            >
              <div className="text-block-7">Strømkunden får sendt regning:</div>
            </div>
            {item.agreementTime ? (
              <div
                id="w-node-50e2cbff873e-d78c1885"
                className="div-block-62-heading"
              >
                <div className="text-block-7">Bindingstid:</div>
              </div>
            ) : (
              <div
                id="w-node-50e2cbff873e-d78c1885"
                className="div-block-62-heading"
                style={{ display: "none" }}
              >
                <div className="text-block-7">Bindingstid:</div>
              </div>
            )}

            <div
              id="w-node-50e2cbff8741-d78c1885"
              className="div-block-62-heading"
            >
              <div className="text-block-7">
                Standard varslingsmåte ved prisendringer:
              </div>
            </div>
            <div
              id="w-node-50e2cbff8744-d78c1885"
              className="div-block-62-heading"
            >
              <div className="text-block-7">
                Prisen oppgit tilbys til følgende strømkunder:
              </div>
            </div>
            <div id="w-node-50e2cbff8747-d78c1885" className="div-block-62">
              <div className="text-block-7-bold">
                {item.applicableToCustomersType === "newCustomers"
                  ? "Nye strømkunder"
                  : "Nye og eksisterende kunder"}
              </div>
            </div>
            <div id="w-node-50e2cbff874a-d78c1885" className="div-block-62">
              <div className="text-block-7-bold">
                {item.applicableToCustomersType === "newCustomers"
                  ? "Nei"
                  : "Ja"}
              </div>
            </div>
            <div id="w-node-50e2cbff874d-d78c1885" className="div-block-62">
              <div className="text-block-7-bold">
                {item.feeEFakturaMandatory &&
                  item.feeAvtalegiroMandatory &&
                  item.feeMandatoryUpdated &&
                  "	Både e-faktura og avtalegiro"}
                {!item.feeEFakturaMandatory &&
                  item.feeAvtalegiroMandatory &&
                  item.feeMandatoryUpdated &&
                  "	Avtalegiro"}
                {item.feeEFakturaMandatory &&
                  !item.feeAvtalegiroMandatory &&
                  item.feeMandatoryUpdated &&
                  "E-Faktura"}
                {!item.feeEFakturaMandatory &&
                  !item.feeAvtalegiroMandatory &&
                  item.feeMandatoryUpdated &&
                  "	Ingen betalingsmåte er påkrevd"}
                {!item.feeEFakturaMandatory &&
                  !item.feeAvtalegiroMandatory &&
                  !item.feeMandatoryUpdated &&
                  "	Ikke oppgitt"}
              </div>
            </div>
            <div id="w-node-50e2cbff8750-d78c1885" className="div-block-62">
              <div className="text-block-7-bold">Etterskuddsbetaling</div>
            </div>
            {item.finalContractBreachFee ? (
              <div id="w-node-50e2cbff8753-d78c1885" className="div-block-62">
                <div className="text-block-7-bold">
                  {item.finalContractBreachFee} kroner
                </div>
              </div>
            ) : (
              ""
            )}

            <div id="w-node-50e2cbff8756-d78c1885" className="div-block-62">
              <div className="text-block-7-bold">Hver måned</div>
            </div>
            {item.agreementTime ? (
              <div id="w-node-50e2cbff8759-d78c1885" className="div-block-62">
                <div className="text-block-7-bold">
                  {item.agreementTime} måneder
                </div>
              </div>
            ) : (
              ""
            )}

            <div id="w-node-50e2cbff875c-d78c1885" className="div-block-62">
              <div className="text-block-7-bold">E-post</div>
            </div>
          </div>
        </div>
        <div className="div-block-40">
          <a href={`${item.orderUrl}`}>
            <h4 className="heading-bestill-white">bestill</h4>
          </a>
        </div>
      </div>
    </div>
  );
}
