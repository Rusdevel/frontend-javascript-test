import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <h3 className="footer__title">
          Тестовое задание.
        </h3>
        <div className="footer__info">
          <nav className="footer__links">
            <ul className="footer__box">
              
              <li className="footer__list">
                <a
                  className="footer__link"
                  href="https://github.com/Rusdevel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="footer__list">
                <a
                  className="footer__link"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
          <p className="footer__copyright">&copy;2023</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
