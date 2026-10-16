import "./ParentTestimonials.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?kgmid=/g/11yzm4b28l&q=Twinkling+Stars+A+Daycare+%26+Preschool#lrd=0x3e5e679882983261:0x7df8eb5683e49533,1";

const testimonials = [
  {
    name: "Sanvith Shetty",
    text:
      "We have had a wonderful experience with this preschool and daycare. The activities organized for the children are engaging, fun, and contribute so much to their overall development.",
  },
  {
    name: "Riya Pai",
    text:
      "It's a very nice daycare and preschool nursery. I am very happy with the environment over there. The staff are caring towards the children.",
  },
  {
    name: "Sujitha",
    text:
      "A wonderful nursery with a warm and welcoming environment. The staff are very caring, friendly, and attentive to the children. The nursery is clean and provides a safe and happy atmosphere for kids to learn and grow.",
  },
  {
    name: "Jamcy Jose",
    text:
      "Excellent in quality, affordable fees... truly recommend it to all parents.",
  },
  {
    name: "Sooraj Hussain",
    text:
      "We are very happy with the nursery. The teachers are caring, supportive, and professional. Our daughter enjoys attending and has grown in confidence and learning.",
  },
];

function ParentTestimonials() {
  useScrollReveal();

  return (
    <section
      className="parent-testimonials reveal"
      aria-labelledby="parent-testimonials-title"
    >
      <h2
        id="parent-testimonials-title"
        className="testimonials-title"
      >
        What Parents Say About Us
      </h2>

      <p className="testimonials-subtitle">
        Discover what parents appreciate about Twinkling Stars
        A Daycare & Preschool.
      </p>

      <div className="testimonials-container stagger">
        {testimonials.map((testimonial) => (
          <article
            className="testimonial-card animated-card"
            key={testimonial.name}
          >
            <div
              className="testimonial-placeholder"
              aria-hidden="true"
            >
              <span className="placeholder-stars">★★★★★</span>
              <span className="placeholder-label">
                Parent Review
              </span>
            </div>

            <div className="testimonial-content">
              <div
                className="testimonial-stars"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>

              <p>{testimonial.text}</p>

              <span className="testimonial-author">
                {testimonial.name}
              </span>

              <span className="testimonial-source">
                Google Review
              </span>
            </div>
          </article>
        ))}
      </div>

     <div className="testimonials-button-wrapper">
  <a
    href={GOOGLE_REVIEWS_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="google-reviews-button"
  >
    Google Reviews ↗
  </a>
</div>
    </section>
  );
}

export default ParentTestimonials;
