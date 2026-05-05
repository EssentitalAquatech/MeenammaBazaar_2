import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Kit.css";

// images
import img1 from "../assets/images/complete_pond.png";
import img2 from "../assets/images/plakton_natural.png";
import img3 from "../assets/images/growth_buster.png";
import img4 from "../assets/images/disease_control_2.png";
import img5 from "../assets/images/emergency.png";
import img6 from "../assets/images/disease_control.png";
import img7 from "../assets/images/water_imporvment.png";

const categoryData = [
  "Complete Pond Health Kit",
    "Plankton & Natural Feed Kit",
     "Growth Booster Kit",
  "Disease Control Kit_1",
  "Disease Control Kit_2",
  "Emergency Rescue Kit",
 

  "Water Improvement Kit",
  
];

const images = [
  img1, img2, img3, img4,
  img5, img6, img7
];

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");

const getPath = (item, index) => {
  if (index === 0) return "/complete_kit";
  if (index === 1) return "/plakton_kit";
  if (index === 2) return "/growth_kit";
  if (index === 3) return "/disease_kit_1";
  if (index === 4) return "/disease_kit_2";
  if (index === 5) return "/emergency_kit";
  if (index === 6) return "/water_kit";

  return `/category/${slugify(item)}`;
};

function Kit() {

  useEffect(() => {
    const items = document.querySelectorAll(".kitItem");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  const directions = ["left", "right", "top", "bottom"];

  return (
    <div className="kitWrapper">

      <div className="kitHeader">
        <h1 className="kitTitle">
          Shop By  <span> Kits Category</span>
        </h1>

        <p className="kitPara">
          Explore our range of fish farming kits designed for better pond health and growth.
        </p>

        {/* <div className="kitHeaderRight">
          <Link to="/shop" className="kitViewAllBtn">
            View All
          </Link>
        </div> */}
      </div>

      <div className="kitGrid">
        {categoryData.map((item, index) => {
          const direction = directions[index % 4];

          return (
            <Link
              to={getPath(item, index)}
              key={index}
              className={`kitItem ${direction}`}
              style={{ textDecoration: "none" }}
            >
              {/* 🔥 Direct Image (No Circle) */}
              <img
                src={images[index]}
                alt={item}
                className="kitImage"
              />

              <p className="kitName">{item}</p>
            </Link>
          );
        })}
      </div>

    </div>
  );
}

export default Kit;