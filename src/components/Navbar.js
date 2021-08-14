import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container">
        <a
          className="navbar-brand"
          href="https://bioptimizers.com/
"
        >
          <img
            className="img-fluid"
            width="476"
            height="auto"
            src="https://fb-v1.cdn-bio.com/assets/bio-logo-optimizing-2004-light-5033b0022127b4dde068830083376add.svg"
            alt="biOptimizers Logo"
          ></img>
        </a>
        <div>
          <a href="https://shop.bioptimizers.com/collections/all">
            <span>
              <p className="icon">Store</p>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
