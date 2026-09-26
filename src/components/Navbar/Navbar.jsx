import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="main-navbar" aria-label="Main navigation">

        {/* =====================================================
            LOGO
        ===================================================== */}
        <NavLink
          to="/"
          end
          className="navbar-logo-link"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Twinkling Stars Daycare Preschool"
            className="navbar-logo"
          />
        </NavLink>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}
        <button
          type="button"
          className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* =====================================================
            NAVIGATION MENU
        ===================================================== */}
        <div className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}>

          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/programs"
            onClick={closeMenu}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            PROGRAMS
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            GALLERY
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            GET IN TOUCH
          </NavLink>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;