import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="footer-wrap">
            <div>
              <div className="paragraph-tiny">
                Alle rettigheter Best Strøm 2020
              </div>
            </div>
            <div className="div-block-20">
              <div className="paragraph-tiny">LEVERT AV LETTPÅ.NET</div>
              <img
                src="./assets/images/lpn-symbol-black-01.png"
                loading="lazy"
                width="40"
                alt=""
              />
            </div>
            <div>
              <a href="#" className="paragraph-tiny">
                Personvern og Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
