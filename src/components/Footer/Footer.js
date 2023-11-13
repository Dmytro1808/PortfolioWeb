import "./Footer.css";
import twitter from "../../img/icons/twitter.svg";
import git from "../../img/icons/gitHub.svg";
import instagram from "../../img/icons/instagram.svg";
import linkedin from "../../img/icons/linkedIn.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <Link
                  to="https://instagram.com/dima_tkachenko_4?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="Link" />
                </Link>
              </li>
              <li className="social__item">
                <Link
                  to="https://twitter.com/darknegs8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="Link" />
                </Link>
              </li>
              <li className="social__item">
                <Link
                  to="https://github.com/Dmytro1808"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={git} alt="Link" />
                </Link>
              </li>
              <li className="social__item">
                <Link
                  to="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D1%82%D0%BA%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-63aa09276/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="Link" />
                </Link>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
