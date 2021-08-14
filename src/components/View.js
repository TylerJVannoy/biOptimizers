import React from "react";

import ViewStyle from "./ViewStyle.css";

export default function View() {
  return (
    <div>
      <div className="container divcon">
        <div className="row text-center">
          <div class="col-sm">
            <div class="card stylecard">
              <div class="card-header">Featured</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <a href="#">More Videos</a>
                </li>
                <li class="list-group-item">
                  <a href="#">Customer Support</a>
                </li>
                <li class="list-group-item">
                  <a href="#">Shop Now</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
