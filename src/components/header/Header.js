import React, { useState } from 'react';
import './header.css';

const Header = () =>  {
            /* Change Background Header */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is the higher than 560 viewport height, add
    // scroll-header class to a tag with the scroll-top class
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  const [actitNav, setAcitNav] = useState('#home');

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Smith
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setAcitNav("#home")}
                className={
                  actitNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setAcitNav("#about")}
                className={
                  actitNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setAcitNav("#portfolio")}
                className={
                  actitNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setAcitNav("#skills")}
                className={
                  actitNav === "#skills" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setAcitNav("#contact")}
                className={
                  actitNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header