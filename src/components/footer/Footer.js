import React from "react";
import "./footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Vedant</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/ved-thakre"
            className="footer__social-link"
            target="_black"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/Vedant_I0"
            className="footer__social-link"
            target="_black"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://wa.link/xvfld6"
            className="footer__social-link"
            target="_black"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span className="footer__copy">&#169; VedantThakre.</span>
          <span className="footer__count">
          
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
