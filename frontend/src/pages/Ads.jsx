import React from "react";
import "./Ads.css";

import oneImg from "../assets/images/1.png";
import twoImg from "../assets/images/2.png";
import threeImg from "../assets/images/3.png";

const Ads = () => {
  const items = [
    { img: oneImg, lines: ["Safe & Secure", "Payment"] },
    { img: twoImg, lines: ["Expert Advice"] },
    { img: threeImg, lines: ["Best Price", "Assured"] },
  ];

  return (
    <div className="ads_unique_wrapper">
      {items.map((item, index) => (
        <div className="ads_unique_item" key={index}>

          {/* ICON REPLACED WITH IMAGE */}
          <img src={item.img} alt="icon" className="ads_unique_icon" />

          <div className="ads_unique_text">
            {item.lines.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
};

export default Ads;