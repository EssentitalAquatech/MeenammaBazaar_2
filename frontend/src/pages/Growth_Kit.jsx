import React, { useState } from "react";
import "./CompleteKit.css";
import { useCart } from "../components/CartContext";

import img1 from "../assets/images/Viteamin-fs-1.jpg";
import img2 from "../assets/images/YEASTEA-1.jpg";
import img3 from "../assets/images/AQUEAMINA-1.jpg";

import img4 from "../assets/images/liv-zym-1.jpg";


const images = [
  { src: img1, name: "Vitamin FS" },
    { src: img2, name: "YEAST EA" },
    { src: img3, name: "AQUEAMINA" },
  { src: img4, name: "LIV ZYM" },

  
];

function Growth_Kit() {
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
    name: "Growth Booster Kit",
    image: img1,
    size: ["Full Kit"],
    price: ["3281"],
    desc: "Growth Booster Kit",
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

          <h1 className="title">Growth Booster Kit</h1>

          <p className="subText">
            Fish growth slow hai
          </p>

          <div className="priceBox">
            <span>₹3281</span>
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
              <li>Vitamin FS (1 Kg)</li>
              <li>YEAST EA (1 Kg)</li>
              <li>AQUEAMINA (10 Kg)</li>
              <li>LIV ZYM (5 L)</li>
            </ul>
          </div>

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="kitDescription">

        <h2>Product Description</h2>

        <div className="descGrid">

          <div className="descCard">
            <h4>Vitamin FS (1 Kg)</h4>
            <p>
              Vitamin & mineral supplement | Faster growth | Better digestion | Improves FCR
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

          <div className="descCard">
            <h4>LIV ZYM (5 L)</h4>
            <p>
              Treats liver disorders | Prevents liver damage from toxins | Improves digestion and appetite | Reduces stress | Improves FCR and body weight gain
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Growth_Kit;