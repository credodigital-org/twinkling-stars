import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

import sun from "../../assets/images/sun.png";
import bee from "../../assets/images/stars.png";
import cloud from "../../assets/images/cloud.png";
import flower from "../../assets/images/flower.png";
import heroChild from "../../assets/images/hero-child.png";

function Hero() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");

          // Animation only needs to happen once
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section reveal"
    >
      {/* =====================================================
          DECORATIONS
      ===================================================== */}

      <img
        className="hero-decoration hero-sun"
        src={sun}
        alt=""
        aria-hidden="true"
      />

      <img
        className="hero-decoration hero-bee"
        src={bee}
        alt=""
        aria-hidden="true"
      />

      <img
        className="hero-decoration hero-cloud"
        src={cloud}
        alt=""
        aria-hidden="true"
      />

      <img
        className="hero-decoration hero-flower"
        src={flower}
        alt=""
        aria-hidden="true"
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="hero-content">

        {/* =================================================
            LEFT TEXT
        ================================================= */}

        <div className="hero-text">

          <h1>
            <span>Explore</span>
            <span>Learn.</span>
            <span>Grow</span>
            <span>Together!</span>
          </h1>

          <p>
            A joyful place where every day is filled
            with laughter, friendship and discovery.
          </p>

          <button
            type="button"
            className="admission-button"
            onClick={() => navigate("/contact")}
          >
            ADMISSION OPEN NOW!
          </button>

        </div>

        {/* =================================================
            RIGHT HERO IMAGE
        ================================================= */}

        <div className="hero-image">

          <img
            src={heroChild}
            alt="Happy child"
          />

        </div>

      </div>

      {/* =====================================================
          BOTTOM COLORFUL MOVING LINE
      ===================================================== */}

      <div className="colorful-line">

        <div className="colorful-line-track">

          <div className="colorful-line-item">
            <span>●</span>
            Pre school,kg1,kg2,1st,2nd,3rd and 4th standard
          </div>

          <div className="colorful-line-item">
            <span>●</span>
            Pre school,kg1,kg2,1st,2nd,3rd and 4th standard
          </div>

          <div className="colorful-line-item">
            <span>●</span>
            Pre school,kg1,kg2,1st,2nd,3rd and 4th standard
          </div>

          <div className="colorful-line-item">
            <span>●</span>
            Pre school,kg1,kg2,1st,2nd,3rd and 4th standard
          </div>

          <div className="colorful-line-item">
            <span>●</span>
            Pre school,kg1,kg2,1st,2nd,3rd and 4th standard
          </div>

          <div className="colorful-line-item">
            <span>●</span>
            Pre school,kg1,kg2,1st,2nd,3rd and 4th standard
          </div>

        </div>

      </div>

      <div className="golden-stars">
        <span className="gold-star star-1">★</span>
        <span className="gold-star star-2">★</span>
        <span className="gold-star star-3">★</span>
        <span className="gold-star star-4">★</span>
        <span className="gold-star star-5">★</span>
        <span className="gold-star star-6">★</span>
        <span className="gold-star star-7">★</span>
        <span className="gold-star star-8">★</span>
      </div>

    </section>
  );
}

export default Hero;