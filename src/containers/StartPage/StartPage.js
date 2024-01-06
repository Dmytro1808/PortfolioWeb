import "./StartPage.css";
import Hlegal from "../../img/projects/Hlegal.jpg";
import Out from "../../img/projects/Out.jpg";
import RentHouse from "../../img/projects/RentHouse.jpg";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <Link
                to="https://dmytro1808.github.io/SiteForHlegal/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="project__img img_hlehal"
                  src={Hlegal}
                  alt="project_img"
                />
                <h3 className="project__title">Hlegal law company</h3>
              </Link>
            </li>
            <li className="project">
              <Link
                to="https://dmytro1808.github.io/SiteForOutschool/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="project__img" src={Out} alt="project_img" />
                <h3 className="project__title">Outschool</h3>
              </Link>
            </li>
            <li className="project">
              <Link
                to="https://renthouseusacanada.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="project__img"
                  src={RentHouse}
                  alt="project_img"
                />
                <h3 className="project__title">House & Apartment</h3>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default NavBar;
