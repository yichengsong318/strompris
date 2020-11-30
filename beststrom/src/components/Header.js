import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="modal-wrapper">
        <div className="st-mpriser-modal"></div>
      </div>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        role="banner"
        className="navigation w-nav"
      >
        <div className="navigation-wrap">
          <NavLink to="/oldhome" className="logo-link w-nav-brand">
            <img
              src="./assets/images/best-strøm-logo-01.png"
              width="108"
              sizes="108px"
              srcSet="./assets/images/best-strøm-logo-01-p-500.png 500w, ./assets/images/best-strøm-logo-01-p-800.png 800w, ./assets/images/best-strøm-logo-01-p-1080.png 1080w, ./assets/images/best-strøm-logo-01.png 1200w"
              alt=""
              className="logo-image"
            />
          </NavLink>
          <div className="menu">
            <nav role="navigation" className="navigation-items w-nav-menu">
              <NavLink
                exact
                to="/"
                activeClassName="w--current"
                className="navigation-item w-nav-link"
              >
                sammenlign strømpriser
              </NavLink>
              <NavLink
                to="/freqpage"
                activeClassName="w--current"
                className="navigation-item w-nav-link"
              >
                ofte stilte spørsmål
              </NavLink>
              <NavLink
                to="/sparetips"
                activeClassName="w--current"
                className="navigation-item w-nav-link"
              >
                sparetips
              </NavLink>
            </nav>
            <div className="menu-button w-nav-button">
              <img
                src="./assets/images/menu-icon_1menu-icon.png"
                width="22"
                alt=""
                className="menu-icon"
              />
            </div>
          </div>
          <a
            href="mailto:mail@business.com?subject=You&#x27;ve%20got%20mail!"
            className="button cc-contact-us w-inline-block"
          >
            <div>kontakt oss</div>
          </a>
        </div>
      </div>
    </div>
  );
}
