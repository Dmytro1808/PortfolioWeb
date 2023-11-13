import "../../styles/main.css";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <span className="strong__h1">
              Hi, my name is <span className="strong-color"> Dmytro</span>
            </span>
            <span> a frontend developer</span>
          </h1>
          <div className="header__text">
            <p>looking forward to the chance to create.</p>
          </div>
          <Link
            to="https://drive.google.com/file/d/1YiZy6wVyMhFl9DzVUNZPE6XNXP_dxJxi/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            See my CV
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
