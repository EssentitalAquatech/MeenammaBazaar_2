



import React, { useState } from "react";
import "./CompleteKit.css";
import { useCart } from "../components/CartContext";

import img1 from "../assets/images/water-soft-1.jpg";
import img2 from "../assets/images/phyto-pro-1.jpg";
import img3 from "../assets/images/YEASTEA-1.jpg";
import img4 from "../assets/images/AQUEAMINA-1.jpg";

const images = [
  { src: img1, name: "Water Soft" },
  { src: img2, name: "Phyto Pro" },
  { src: img3, name: "Yeast EA" },
  { src: img4, name: "Aqueamina" },
];

function Plakton_Kit() {
  const [current, setCurrent] = useState(0);
  const [added, setAdded] = useState(false);

  const { cart, addToCart } = useCart();

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const kitProduct = {
    category: "Kit",
    name: "Plankton & Natural Feed Kit",
    image: img1,
    size: ["Full Kit"],
    price: ["4073"],
    desc: "Plankton & Natural Feed Kit",
  };

  const isInCart = cart.some(
    (item) => item.product.name === kitProduct.name
  );

  const handleAdd = () => {
    if (!isInCart) {
      addToCart({
        product: kitProduct,
        selectedSizeIndex: 0,
      });
      setAdded(true);
    }
  };

  return (
    <div className="kitWrapper">
      <div className="kitContainer">

        {/* LEFT SIDE */}
        <div className="kitLeft">

          <div className="slider">
            <button className="arrow left" onClick={prevSlide}>❮</button>

            <img
              src={images[current].src}
              alt={images[current].name}
            />

            <button className="arrow right" onClick={nextSlide}>❯</button>
          </div>

          {/* THUMBNAILS */}
          <div className="thumbContainer">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.name}
                className={current === i ? "activeThumb" : ""}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="kitRight">

          <h1 className="title">Plankton & Natural Feed Kit</h1>

          <p className="subText">
            Natural food badhao, cost kam karo
          </p>

          <div className="priceBox">
            <span>₹4073</span>
            <small>Inclusive of all items</small>
          </div>

          {/* ADD TO CART */}
          <button
            className="addBtn"
            onClick={handleAdd}
            disabled={isInCart}
          >
            {isInCart || added ? "✅ Added" : "🛒 Add To Cart"}
          </button>

          {/* INCLUDED ITEMS */}
          <div className="includesBox">
            <h3>Kit Includes:</h3>
            <ul>
              <li>WATER SOFT (500 gm)</li>
              <li>PHYTO PRO FS (1 Kg)</li>
              <li>YEAST EA (1 Kg)</li>
              <li>AQUEAMINA (10 Kg)</li>
            </ul>
          </div>

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="kitDescription">

        <h2>Product Description</h2>

        <div className="descGrid">

          <div className="descCard">
            <h4>WATER SOFT (500 gm)</h4>
            <p>
              Reduces water hardness | Improves oxygen level | Removes toxicity | Improves fish health
            </p>
          </div>

          <div className="descCard">
            <h4>PHYTO PRO FS (1 Kg)</h4>
            <p>
              Creates phytoplankton (green water) | Produces natural feed | Improves FCR | Enhances pond ecosystem
            </p>
          </div>

          <div className="descCard">
            <h4>YEAST EA (1 Kg)</h4>
            <p>
              Improves growth performance | Boosts immunity | Improves water quality | Reduces bacterial load
            </p>
          </div>

          <div className="descCard">
            <h4>AQUEAMINA (10 Kg)</h4>
            <p>
              Minerals & Micro Nutrients Promoter | Enriches pond water nutritional value | Promotes disease resistance | Helps grow phytoplankton & zooplankton | Improves FCR, increases growth & body weight | Reduces culture period through fast growth
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Plakton_Kit;