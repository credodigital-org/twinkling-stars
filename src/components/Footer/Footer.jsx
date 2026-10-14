import "./Footer.css";

import wonderBeesLogo from "../../assets/images/footer-1.png";
import winklingStarsLogo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* LEFT COLUMN */}
        <div className="footer-column footer-left">
          <h2 className="footer-heading">ADDRESS</h2>

          <div className="footer-address">
            <p>Mezzanine Floor - M4</p>
            <p>544 Sulthan Bin Zayed First Street</p>
            <p>Al Dana Zone 1</p>
            <p>Near Kozhikode Restaurant</p>
            <p>Abu Dhabi city.</p>

            <hr className="footer-divider" />

            <p>Contact:</p>
            <p>
              <a href="tel:+971564740473">
                +971564740473
              </a>
            </p>

            <p>Email:</p>
            <p className="footer-email">
              <a href="mailto:twinklingstarsdaycare4you@gmail.com">
                twinklingstarsdaycare4you@gmail.com
              </a>
            </p>
          </div>

          <div className="footer-logo footer-wonder-logo">
            <img src={winklingStarsLogo} alt="Twinkling Stars Daycare" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="footer-column footer-right">
          <div className="footer-address right-address">
            <p>Mezzanine Floor - M03</p>
            <p>Golden First Karate Building no: P/673,</p>
            <p>Opposite Model School, Gate No 2</p>
            <p>Mussafah - Shabiya</p>

            <hr className="footer-divider" />

            <p>
              Contact:{" "}
              <a href="tel:+971564740473">
                +971564740473
              </a>
            </p>

            <p>Email:</p>
            <p className="footer-email">
              <a href="mailto:wonderbees.shabiya12@gmail.com">
                wonderbees.shabiya12@gmail.com
              </a>
            </p>
          </div>

          <div className="footer-logo footer-winkling-logo">
            <img src={wonderBeesLogo} alt="Wonder Bees Daycare Preschool" />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;