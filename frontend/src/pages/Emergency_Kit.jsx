import React, { useState } from "react";
import "./CompleteKit.css";
import { useCart } from "../components/CartContext";

import img1 from "../assets/images/do-oxy-1.jpg";
import img2 from "../assets/images/clear-pond-1.jpg";
import img3 from "../assets/images/prevent-80-1.jpg";

const images = [
  { src: img1, name: "DO OXY" },
  { src: img2, name: "CLEAR POND " },
  { src: img3, name: "Prevent 80" },
];

function Emergency_Kit() {
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
    name: "Emergency Rescue Kit",
    image: img1,
    size: ["Full Kit"],
    price: ["3281"],
    desc: "Emergency Rescue Kit",
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

          <h1 className="title">Emergency Rescue Kit</h1>

          <p className="subText">
            Fish mar rahi hai / oxygen low
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
              <li>DO OXY (1 Kg)</li>
              <li>CLEAR POND (1 L)</li>
              <li>Prevent 80 (1 L)</li>
            </ul>
          </div>

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="kitDescription">

        <h2>Product Description</h2>

        <div className="descGrid">

          <div className="descCard">
            <h4>DO OXY (1 Kg)</h4>
            <p>
              Solves oxygen deficiency in high-density fish culture | Maintains dissolved oxygen levels | Improves fish survival rate
            </p>
          </div>

          <div className="descCard">
            <h4>CLEAR POND (1 L)</h4>
            <p>
              Absorbs ammonia, hydrogen sulphide and toxic gases | Reduces bacterial load | Removes bad odour | Improves ecosystem | Increases growth and immunity
            </p>
          </div>

          <div className="descCard">
            <h4>Prevent 80 (1 L)</h4>
            <p>
              Controls bacterial & fungal infections | Kills viruses and harmful bacteria | Protects ecosystem | Prevents plankton bloom
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Emergency_Kit;