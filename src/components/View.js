import React from "react";

export default function View() {
  return (
    <div>
      <div className="container divcon">
        <div className="row text-center">
          <div className="col-sm mt-5">
            <div className="card stylecard">
              <div className="card-header">Featured</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a href="#">More Videos</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Customer Support</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Shop Now</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Home</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
