import "./Gallery.css";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

/* =========================================================
   GALLERY IMAGES
========================================================= */

import readingCorner from "../assets/gallery/reading.png";
import artsCraft from "../assets/gallery/arts.png";
import gardening from "../assets/gallery/gardening.png";
import musicClass from "../assets/gallery/music.png";
import playground from "../assets/gallery/playground.png";
import sportsDay from "../assets/gallery/sports.png";
import scienceDay from "../assets/gallery/science-day.png";
import graduation from "../assets/gallery/graduation.png";

import img1 from "../assets/gallery/image1.jpeg"
import img2 from "../assets/gallery/image2.jpeg"
import img3 from "../assets/gallery/image3.jpeg"
import img4 from "../assets/gallery/image4.jpeg"
import img5 from "../assets/gallery/image5.jpeg"
import img6 from "../assets/gallery/image6.jpeg"
import img7 from "../assets/gallery/image7.jpeg"
import img8 from "../assets/gallery/image8.jpeg"
import img9 from "../assets/gallery/image9.jpeg"
import img10 from "../assets/gallery/image10.jpeg"
import img11 from "../assets/gallery/image11.jpeg"
import img12 from "../assets/gallery/image12.jpeg"
import img13 from "../assets/gallery/image13.jpeg"
import img14 from "../assets/gallery/image14.jpeg"
// import img15 from "../assets/gallery/image15.jpeg"
import img16 from "../assets/gallery/image16.jpeg"
import img17 from "../assets/gallery/image17.jpeg"
import img18 from "../assets/gallery/image18.jpeg"
/* =========================================================
   CTA IMAGE
========================================================= */

import teddyImage from "../assets/images/journey-bear.png";


function Gallery() {

  const navigate = useNavigate();

  useEffect(() => {
  const gallery = document.querySelector(".gallery-page");

  if (!gallery) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        gallery.classList.add("gallery-revealed");
        observer.disconnect();
      }
    },
    {
      threshold: 0.08,
    }
  );

  observer.observe(gallery);

  return () => observer.disconnect();
}, []);

  /* =======================================================
     GALLERY ITEMS
  ======================================================= */

  const galleryItems = [
    // { title: "Reading corner", image: readingCorner, className: "reading" },
    // { title: "Arts & Craft", image: artsCraft, className: "arts" },
    // { title: "Gardening", image: gardening, className: "gardening" },
    // { title: "Music Class", image: musicClass, className: "music" },
    // { title: "Playground", image: playground, className: "playground" },
    // { title: "Sports Day", image: sportsDay, className: "sports" },
    // { title: "Science Day", image: scienceDay, className: "science" },
    // { title: "Graduation", image: graduation, className: "graduation" },

    { title: "", image: img1, className: "reading", }, 
    { title: "", image: img2, className: "arts", }, 
    { title: "", image: img3, className: "gardening", }, 
    { title: "", image: img4, className: "music", }, 
    { title: "", image: img5, className: "playground", }, 
    { title: "", image: img6, className: "sports", }, 
    { title: "", image: img7, className: "science", }, 
    { title: "", image: img8, className: "graduation", }, 
    { title: "", image: img9, className: "birthday", }, 
    // { title: "", image: img10, className: "storytelling", }, 
    { title: "", image: img11, className: "painting", }, 
    { title: "", image: img12, className: "dance", }, 
    { title: "", image: img13, className: "outdoor-play", }, 
    { title: "", image: img14, className: "classroom", }, 
    // { title: "", image: img15, className: "yoga", }, 
    { title: "", image: img16, className: "festival", }, 
    { title: "", image: img17, className: "nature-walk", }, 
    { title: "", image: img18, className: "group-activities", },
  ];


  return (
    <main className="gallery-page">

      {/* =================================================
          GALLERY HERO
      ================================================= */}

      <section className="gallery-hero">

        <div className="gallery-hero-content">

          <h1>Our Gallery</h1>

          <p>
            A glimpse into the joyful moments that makes Twinkling Stars Nursery a happy place to learn, explore, play, and grow.
            <br className="desktop-break" />
            Every smile, every little discovery, and every shared moment creates beautiful memories while nurturing young minds and 
            <br className="desktop-break" />
            hearts.
          </p>

        </div>


        {/* <a
          href="#gallery-grid"
          className="visit-button"
        >
          BOOK A VISIT
        </a> */}

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


      {/* =================================================
          GALLERY SECTION
      ================================================= */}

      <section
        className="gallery-section"
        id="gallery-grid"
      >

        <div className="gallery-grid">

          {galleryItems.map((item) => (

            <article
              className={`gallery-card ${item.className}`}
              key={item.title}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div
                className={`gallery-label ${item.className}-label`}
              >
                {item.title}
              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =================================================
          ADMISSION / CTA
      ================================================= */}

      <section className="gallery-admission-section">

        {/* CTA IMAGE */}

        <div className="admission-image-wrapper">

          <img
            src={teddyImage}
            alt="Teddy bear with books and plant"
            className="admission-image"
          />

        </div>


        {/* CTA CONTENT */}

        <div className="admission-content">

          <h2 className="admission-title">
            Ready to Begin Their Journey?
          </h2>

          <p className="admission-description">
            Give your child the opportunity to learn, grow
            <br className="desktop-break" />
            and thrive in a caring and inspiring
            <br className="desktop-break" />
            environment.
          </p>

        </div>


        {/* CTA BUTTON */}

        <button
          type="button"
          className="gallery-admission-button"
          onClick={() => navigate("/contact")}
        >
          ENROLL NOW!
        </button>

      </section>

    </main>
  );
}


export default Gallery;