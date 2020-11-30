import React from "react";

export default function Section() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="section-heading-wrap">
            <h2 className="h2">Forskjellige prisavtaler</h2>
            <div className="label cc-light">
              hva innebærer de forskjellige prisavtalene
            </div>
            <div>
              <p className="paragraph-6">
                Du kan spare mye penger på å velge riktig strømavtale. Vi har
                som mål å gjøre det enkelt å velge en varig og god strømavtale
                som passer dine behov. Med totalt over 400 strømavtaler i Norge
                er det ikke lett å få oversikt, men med vår tjeneste håper vi du
                kan få full oversikt og gjøre et godt valg.
              </p>
            </div>
          </div>
          <div className="w-layout-grid our-services-grid">
            <div id="w-node-543393b118e6-d78c1885" className="div-block-4">
              <img
                src="./assets/images/spot-01.png"
                width="100"
                alt=""
                className="service-icon"
              />
              <div className="paragraph-bigger">Spotpris</div>
              <div className="paragraph-light">
                Markedsprisen på strøm endrer seg gjennom året, og
                strømregningen din vil variere etter disse svingningene. Du må
                forvente høyere pris i vinterhalvåret, men kan nyte godt av lave
                strømpriser om sommeren. Spotpris har vist seg å være billigst i
                gjennomsnitt de siste årene.
                <br />
              </div>
            </div>
            <div id="w-node-543393b118ec-d78c1885" className="div-block-3">
              <img
                src="./assets/images/variabel-01.png"
                width="100"
                alt=""
                className="service-icon"
              />
              <div className="paragraph-bigger">Variabel pris</div>
              <div className="paragraph-light">
                Denne avtaleformen gjør at du betaler lik pris for strømmen
                gjennom hele året. Det kan være en fordel om du ønsker
                forutsigbarhet i økonomien og ikke vil ha de store svingningene
                som du får med en spotprisavtale. Fastpris har vist seg å være
                dyrere enn spotpris i gjennomsnitt.
              </div>
            </div>
            <div id="w-node-543393b118f2-d78c1885" className="div-block-5">
              <img
                src="./assets/images/fast-01.png"
                width="100"
                alt=""
                className="service-icon"
              />
              <div className="paragraph-bigger">Fastpris</div>
              <div className="paragraph-light">
                Variable prisavtaler gir varsel om endringer i pris hver 14.
                dag. I praksis betyr det at strømprisen følger markedsprisen, to
                uker på etterskudd. Dette sikrer at man blir skånet for de aller
                største prisendringene, samtidig som strømprisen fortsatt
                påvirkes av strømmarkedet. Variabel pris har også vist seg å
                være noe dyrere enn spotpris i gjennomsnitt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
