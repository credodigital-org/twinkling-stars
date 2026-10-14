import "./GetInTouch.css";

import whatsappIcon from "../../assets/images/whatsapp.png";
import callicon from "../../assets/images/call.png";
import instagram from "../../assets/images/Instagram.png";
import bee from "../../assets/images/stars.png";

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const enquiry = form.elements.enquiry.value.trim();

    const subject = `New Enquiry from ${name}`;

    const body = `Name: ${name}
Phone: ${phone}

Enquiry:
${enquiry}`;

    const mailtoUrl =
      `mailto:twinklingstarsdaycare4you@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-card">

        {/* DISCOUNT BANNER */}
        <div className="discount-wrapper">
          <img
            src={bee}
            alt=""
            className="discount-bee"
            aria-hidden="true"
          />

          <div className="discount-banner">
            Siblings Discount Available
          </div>
        </div>

        {/* CONTACT CONTENT */}
        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h2 id="contact-title">GET IN TOUCH</h2>

            <p className="contact-email">
              E-MAIL:{" "}
              <a href="mailto:twinklingstarsdaycare4you@gmail.com">
                twinklingstarsdaycare4you@gmail.com
              </a>
            </p>

            <p className="contact-phone">
              PHONE:{" "}
              <a href="tel:+971564740473">
                +971564740473
              </a>
            </p>

            {/* ADDRESS */}
            <div className="contact-address">
              <h3>ADDRESS</h3>

              <p>
                Floor 10, City Centre Deira
                <br />
                Complex, The Tower 1, Trade
                <br />
                Center 2, Dubai, ARE.
              </p>
            </div>

            {/* WORKING HOURS */}
            <div className="working-hours">
              <h3>Working Hours</h3>

              <ul>
                <li>Monday - Sunday</li>
                <li>6:30 Am - 8:30 Pm</li>
              </ul>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="contact-name">
                YOUR NAME
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">
                YOUR PHONE NO.
              </label>

              <input
                id="contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-enquiry">
                YOUR ENQUIRY
              </label>

              <textarea
                id="contact-enquiry"
                name="enquiry"
                placeholder="Write your enquiry"
                rows={5}
                required
              />
            </div>

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
          href="tel:+971564740473"
          className="call-button"
          aria-label="Call us"
        >
          <img src={callicon} alt="" />
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/971564740473"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          aria-label="Chat with us on WhatsApp"
        >
          <img src={whatsappIcon} alt="" />
        </a>

        {/* INSTAGRAM BUTTON */}
        <a
          href="https://www.instagram.com/twinklingstarsday/?stkn=cDkwdXg5cGQzeWpj"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-button"
          aria-label="Visit our Instagram"
        >
          <img src={instagram} alt="" />
        </a>

      </div>
    </section>
  );
}

export default ContactSection;