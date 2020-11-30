import React from "react";

export default function Shopsection() {
  return (
    <div>
      <div className="shop-local-section">
        <div className="container-2 shop-local-container">
          <div className="shop-local-wrapper">
            <div className="shop-local-left"></div>
            <div className="shop-local-right">
              <div className="shop-local-content-wrapper">
                <h2 className="h2 white">Hva gjør vi?</h2>
                <p>
                  Vi er en sammenligningstjeneste for sammenligning av
                  strømpriser. Strømprisene varierer både på tvers av
                  strømleverandører og strømavtaler og det er derfor viktig å
                  sjekke være bevisst på hvilken strømavtale du har, og hvilke
                  strømavtaler som kan konkurrere med din strømpris.
                  Strømleverandørene isolert sett bør komme i rekke nummer to,
                  ettersom alle strømleverandørene har forskjellige avtaletyper,
                  hvorav noen er dyre mens andre har billige strømpriser.
                </p>
                <a href="index.html" className="button-white w-inline-block">
                  <div>sammenlign priser</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
