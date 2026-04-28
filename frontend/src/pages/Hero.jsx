




// // src/components/Hero.js
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Hero.css";

// import heroImage1 from "../assets/images/HomeMain.png";
// import heroImage2 from "../assets/images/hero1.jpeg";
// import heroImage3 from "../assets/images/hero2.jpeg";

// function Hero() {
//   const navigate = useNavigate();

//   const slides = [
//     { image: heroImage1, path: "/shop" },
//     { image: heroImage2, path: "/shop" },
//     { image: heroImage3, path: "/prevent" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const handleClick = () => {
//     navigate(slides[currentIndex].path);
//   };

//   return (
//     <section className="hero-section">
//       <div
//         className="image-background"
//         onClick={handleClick}
//         style={{
//           backgroundImage: `url(${slides[currentIndex].image})`,
//           cursor: "pointer",
//         }}
//       >
//         <div className="video-overlay"></div>
//       </div>
//     </section>
//   );
// }

// export default Hero;












// src/components/Hero.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

import heroImage1 from "../assets/images/hero.jpeg";
import heroImage2 from "../assets/images/hero1.jpeg";
import heroImage3 from "../assets/images/hero2.jpeg";

function Hero() {
  const navigate = useNavigate();

  const slides = [
    { image: heroImage1, path: "/shop" },
    { image: heroImage2, path: "/shop" },
    { image: heroImage3, path: "/prevent" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClick = () => {
    navigate(slides[currentIndex].path);
  };

  return (
    <section className="hero-section">
      <div
        className="image-background"
        onClick={handleClick}
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          cursor: "pointer",
        }}
      >
        <div className="video-overlay"></div>
      </div>

      {/* Circles */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;