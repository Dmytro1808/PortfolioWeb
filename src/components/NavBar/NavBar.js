import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const normallink = "nav-list__link";

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <span className="strong">Developer</span>portfolio
            </NavLink>

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeLink : normallink
                  }
                >
                  Project
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? activeLink : normallink
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normallink
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
