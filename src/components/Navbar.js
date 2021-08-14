import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar has-background-dark">
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img
            loading="lazy"
            src="https://fb-v1.cdn-bio.com/assets/bio-logo-optimizing-2004-light-5033b0022127b4dde068830083376add.svg"
            width="112"
            height="28"
          ></img>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <a className="button is-primary">
            <strong>Shop Now</strong>
          </a>
        </div>
      </div>
    </nav>
  );
}
