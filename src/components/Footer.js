import React from "react";

import FooterStyle from "./FooterStyle.css";

export default function Footer() {
  return (
    <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
      <footer>
        <div className="row my-5 justify-content-center py-5">
          <div className="col-11">
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <h3 className="text-muted mb-md-0 mb-5 bold-text">
                  BiOptimizers
                </h3>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text ">
                  <b>MENU</b>
                </h6>
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>About</li>
                  <li>Store</li>
                  <li>Product Support</li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                  <b>ADDRESS</b>
                </h6>
                <p className="mb-1">5470 Kietzke Lane, Suite 300</p>
                <p>Reno, NV 89511</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                <p className="social text-muted mb-0 pb-0 bold-text">
                  {" "}
                  <span className="mx-2"></span> <span className="mx-2"></span>{" "}
                  <span className="mx-2"></span> <span className="mx-2"></span>{" "}
                </p>
                <small className="rights">
                  <span>&copy;</span> BiOptimizers USA, Inc. All Rights
                  Reserved.
                </small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                <h6 className="mt-55 mt-2 text-muted bold-text">
                  <b>SUPPORT</b>
                </h6>
                <small>
                  {" "}
                  <span></span> support@bioptimizers.com
                </small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                <h6 className="text-muted bold-text">
                  <b>TYLER VANNOY</b>
                </h6>
                <small>
                  <span></span> tylervannoy@hotmail.com
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
