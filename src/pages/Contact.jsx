import "./Contact.css";
import { useEffect } from "react";

import bee from "../assets/images/stars.png";
import whatsappIcon from "../assets/images/whatsapp.png";
import callicon from "../assets/images/call.png";

function GetInTouch() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  const handleSubmit = (event) => { 
    event.preventDefault(); 
    
    const formData = new FormData(event.target); 
    
    const name = formData.get("name"); 
    
    const phone = formData.get("phone"); 
    
    const enquiry = formData.get("enquiry"); 
    
    const subject = `New Enquiry from ${name}`; 
    
    const body = ` Name: ${name} Phone: ${phone} Enquiry: ${enquiry} `; 
    
    window.location.href = `mailto:twinklingstars@gmail.com?subject=${encodeURIComponent( 
      subject )}&body=${encodeURIComponent(body)}`; };

  return (
    <main className="get-touch-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-content">

          <h1>Get In Touch</h1>

          <p>
            Get in touch with our team to discover how we can support
            <br className="desktop-break" />
            your child’s learning, growth, and development.
          </p>

          <div className="golden-stars">
          <span className="gold-star star-1">★</span>
          <span className="gold-star star-2">★</span>
          <span className="gold-star star-3">★</span>
          <span className="gold-star star-4">★</span>
          {/* <span className="gold-star star-5">★</span>
          <span className="gold-star star-6">★</span>
          <span className="gold-star star-7">★</span>
          <span className="gold-star star-8">★</span> */}
        </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="contact-section">

        <div className="contact-card">

          {/* =================================================
              DISCOUNT BADGE
          ================================================= */}

          <div className="discount-badge">

            <img
              src={bee}
              alt="Bee"
            />

            <span>
              Siblings Discount Available
            </span>

          </div>


          {/* =================================================
              CONTACT GRID
          ================================================= */}

          <div className="contact-grid">


            {/* ===============================================
                LEFT SIDE
            =============================================== */}

            <div className="contact-info">

              {/* GET IN TOUCH */}

              <div className="info-block">

                <h2>
                  GET IN TOUCH
                </h2>

                <p>
                  <strong>E-MAIL:</strong>{" "}
                  <a href="mailto:twinklingstarsdaycare4you@gmail.com">
                    twinklingstarsdaycare4you@gmail.com
                  </a>
                </p>

                <p>
                  <strong>PHONE:</strong>{" "}
                  <a href="tel:+971541412448">
                    +971541412448
                  </a>
                </p>

              </div>


              {/* ADDRESS */}

              <div className="address-block">

                <h3>
                  ADDRESS
                </h3>

                <p>
                  Floor 10, City Centre Deira
                  <br />
                  Complex, The Central, Trade
                  <br />
                  Centre 2, Dubai, ARE.
                </p>

              </div>


              {/* WORKING HOURS */}

              <div className="working-hours">

                <h3>
                  Working Hours
                </h3>

                <ul>
                  <li>
                    Monday - Sunday
                  </li>

                  <li>
                    6:30 Am - 8:30 Pm
                  </li>
                </ul>

              </div>

            </div>


            {/* ===============================================
                RIGHT SIDE FORM
            =============================================== */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}

              <div className="form-group">

                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                />

              </div>


              {/* PHONE */}

              <div className="form-group">

                <label htmlFor="phone">
                  YOUR PHONE NO.
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                />

              </div>


              {/* ENQUIRY */}

              <div className="form-group">

                <label htmlFor="enquiry">
                  YOUR ENQUIRY
                </label>

                <textarea
                  id="enquiry"
                  name="enquiry"
                />

              </div>


              {/* SEND */}

              <button
                type="submit"
                className="send-button"
              >
                SEND MESSAGE
              </button>

            </form>

          </div>


          {/* CALL BUTTON */}

          <a
            href="tel:+971541412448"
            className="call-button"
            aria-label="Call us"
          >
            {/* <span>☎</span> */}
            <img
              src={callicon}
              alt="WhatsApp"
            />
          </a>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/+971541412448"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Chat on WhatsApp"
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp"
            />
          </a>

        </div>

      </section>

    </main>
  );
}

export default GetInTouch;