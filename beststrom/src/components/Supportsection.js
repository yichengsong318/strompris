import React from "react";

export default function Supportsection() {
  return (
    <div>
      <div className="support-section">
        <div className="container-2">
          <div className="div-block-2">
            <h2 className="h2">Hvordan funker prosessen?</h2>
          </div>
          <div className="support-wrapper">
            <div className="support-column">
              <div className="support-square">
                <div className="support-square-number">01</div>
                <div className="support-square-text">personaliser</div>
                <img
                  src="./assets/images/personalize-01.png"
                  alt="Circle Decoration in Shop Products Block"
                  width="120"
                  className="support-square-image"
                />
              </div>
              <p className="paragraph-2">
                Fyll inn postnummer og juster avtaletype, forbruk og
                faktureringsmetode etter ønske.
              </p>
            </div>
            <div className="support-column">
              <div className="support-square">
                <div className="support-square-number">02</div>
                <div className="support-square-text">sammenlign</div>
                <img
                  src="./assets/images/compare-01.png"
                  alt="Triangle Decoration in Donate Block"
                  width="120"
                  className="support-square-image triangle"
                />
              </div>
              <p className="paragraph">
                Sammenlign strømpriser fra alle strømleverandører som leverer
                strøm til din adresse.
                <br />
              </p>
            </div>
            <div className="support-column">
              <div className="support-square">
                <div className="support-square-number">03</div>
                <div className="support-square-text">bestill</div>
                <img
                  src="./assets/images/bestill-01.png"
                  alt="Rectangle Decoration in Buy Gift Cards Block"
                  width="120"
                  className="support-square-image rectangle"
                />
              </div>
              <p className="paragraph-3">
                Fyll inn bestillingsskjemaet som vi videresender til
                leverandører og få en billigere strømavtale
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="div-block">
          <a href="index.html" className="button w-inline-block">
            <div>sammenlign priser</div>
          </a>
        </div>
      </div>
    </div>
  );
}
