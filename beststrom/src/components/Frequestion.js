import React from "react";
import Faqaccordion from "./Faqaccordion";

export default function Frequestion() {
  return (
    <div className="section-sp-rsm-l">
      <div className="container">
        <div className="section-heading-wrap">
          <h2 className="h2">ofte stilte spørsmål</h2>
          <p className="paragraph-5-copy">
            Strøm varierer ofte og er styrt av mange faktorer. Det kan derfor
            være vanskelig å forstå seg på hva disse faktorene er og hvordan man
            skal forholde seg til de. Det er så mange som 8 av 10 som betaler
            altfor mye i strøm i dag uten at de engang vet at de kunne spart
            penger på enten å endre vaner eller bytte strømleverandør.
          </p>
          <div className="div-block-25">
            <div className="div-block-23">
              <h4 className="heading-4">Strøm</h4>
            </div>
            <div className="div-block-24">
              <div data-hover="" data-delay="0" className="w-dropdown dropdown">
                <Faqaccordion>
                  <div>
                    <p className="paragraph-5">
                      Strøm er elektroner i et spenningsfelt som er i konstant
                      bevegelse. Energi hvor elektroner blir fraktet er det som
                      betegnes som elektrisk strøm. Energien fraktes fra et
                      punkt til et annet ved at negativt ladde partikler beveger
                      seg gjennom en leder. Bevegelsen av elektroner skapes ved
                      at man kobler en spenningskilde til en leder, og vi får
                      det vi
                      <br />
                      kaller for elektrisk strøm.
                      <br />
                      <br />
                      Etter en omdanning av primære energikilder skapes en
                      sekundær energikilde som betegnes som elektrisk strøm.
                      Primære energikilder er olje, kull, atomkraft,
                      <br />
                      gass og naturlige energikilder som vind, sol og
                      naturkrefter.
                      <br />
                      <br />‍<strong>MÅLENHETER: </strong>
                      <br />
                      -Ampere er en måleenhet av elektrisk strømstyrke (I).
                      <br />
                      -Volt er en måleenhet for elektrisk spenning (V)
                      <br />
                      -Watt er en måleenhet for elektrisk effekt (W).
                      <br />
                      -Ohm er en måleenhet for elektrisk motstand (R).
                      <br />
                      <br />
                      <span className="text-span-2">
                        to ulike typer strøm– likestrøm og vekselstrøm.
                        <br />
                      </span>
                      <br />
                      -Batterier er ett eksempel på likestrøm. Likestrøm er en
                      elektrisk strøm som har
                      <br />
                      samme strømretning kontinuerlig.
                      <br />
                      -Vekselstrøm er elektrisk strøm hvor strømretningen
                      kontinuerlig endres.
                      <br />
                      <br />
                      https://xn--strm-ira.no/hva-er-str%C3%B8m
                    </p>
                  </div>{" "}
                </Faqaccordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
