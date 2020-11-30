import React from "react";

export default function News() {
  return (
    <div>
      <div className="section cc-cta">
        <div className="container">
          <div className="cta-wrap">
            <div>
              <div className="cta-text">
                <div className="h2">
                  SPAR STRØM NÅ
                  <br />
                </div>
                <div className="paragraph-bigger cc-bigger-light">
                  Ta tak i strømregningen din og finn ut hvilken leverandør
                  passer deg best.
                  <br />
                </div>
              </div>
            </div>
            <div className="div-block">
              <a
                href="index"
                aria-current="page"
                className="button w-inline-block w--current"
              >
                <div>sammenlign priser</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
