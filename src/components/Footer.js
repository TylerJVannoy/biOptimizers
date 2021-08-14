import React from "react";

import FooterStyle from "./FooterStyle.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start">
      <div className="text-center text-light p-3">
        © 2021 Copyright:
        <a
          className="text-light"
          href="https://frontend-portfolio-one.vercel.app/"
        >
          Tyler Vannoy
        </a>
      </div>
    </footer>
  );
}
