import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Smith</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com"
            className="footer__social-link"
            target="_black"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="footer__social-link"
            target="_black"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.twitter.com"
            className="footer__social-link"
            target="_black"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Crypticalcoder. All right reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer