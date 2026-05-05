import React, { useState } from "react";
import "./CompleteKit.css";
import { useCart } from "../components/CartContext";

import img1 from "../assets/images/clear-pond-1.jpg";
import img2 from "../assets/images/water-soft-1.jpg";
import img3 from "../assets/images/ZEA-G-1.jpg";
import img4 from "../assets/images/Bottom-Seaf-1.jpg";

const images = [
  { src: img1, name: "CLEAR POND" },
  { src: img2, name: "Water Soft " },
  { src: img3, name: "Zea-G" },
  { src: img4, name: "Bottom Seaf" },
];

function Water_Kit() {
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
    name: "Water Improvement Kit",
    image: img1,
    size: ["Full Kit"],
    price: ["6000"],
    desc: "Water Improvement Kit",
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

          <h1 className="title">Water Improvement Kit</h1>

          <p className="subText">
            Ganda paani saaf karo
          </p>

          <div className="priceBox">
            <span>₹6000</span>
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
              <li>CLEAR POND (1 L)</li>
              <li>Water Soft (5 Kg)</li>
              <li>Zea-G (10 Kg)</li>
              <li>Bottom Seaf (1 Kg)</li>
            </ul>
          </div>

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="kitDescription">

        <h2>Product Description</h2>

        <div className="descGrid">

          <div className="descCard">
            <h4>CLEAR POND (1 L)</h4>
            <p>
              Absorbs ammonia, hydrogen sulphide and toxic gases | Reduces bacterial load | Removes bad odour | Improves ecosystem | Increases growth and immunity
            </p>
          </div>

          <div className="descCard">
            <h4>Water Soft (5 Kg)</h4>
            <p>
              Reduces water hardness | Improves oxygen level | Removes toxicity | Improves fish health
            </p>
          </div>

          <div className="descCard">
            <h4>Zea-G (10 Kg)</h4>
            <p>
              Removes toxic gases like ammonia & hydrogen sulfide | Improves pond bottom condition | Balances pH | Improves oxygen and immunity
            </p>
          </div>

          <div className="descCard">
            <h4>Bottom Seaf (1 Kg)</h4>
            <p>
              Keep pond bottom healthy by treating sludge, removing ammonia, H2S, and other toxic gases | Reduce algal bloom and keep pond healthy | Improve beneficial bacteria | Reduce stress, improve immunity & appetite | Balance pH and dissolved oxygen | Improve natural feed and FCR
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Water_Kit;   