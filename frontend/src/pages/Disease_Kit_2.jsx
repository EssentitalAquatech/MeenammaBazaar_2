import React, { useState } from "react";
import "./CompleteKit.css";
import { useCart } from "../components/CartContext";

import img1 from "../assets/images/Viteamin-fs-1.jpg";
import img2 from "../assets/images/rot-guard-1.jpg";
import img3 from "../assets/images/prevent-80-1.jpg";
import img4 from "../assets/images/sani-fish-1.jpg";
import img5 from "../assets/images/medisan-1.jpg";

const images = [
  { src: img1, name: "Vitamin FS" },
  { src: img2, name: "ROT GUARD " },
  { src: img3, name: "Prevent 80" },
  { src: img4, name: "SANI Fish" },
  { src: img5, name: "MEDISAN" },
];

function Disease_Kit_2() {
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
    name: "Disease Control Kit_2",
    image: img1,
    size: ["Full Kit"],
    price: ["3000"],
    desc: "Disease Control Kit_2",
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

          <h1 className="title">Disease Control Kit_2</h1>

          <p className="subText">
            Fish bimar hai-turant solution
          </p>

          <div className="priceBox">
            <span>₹3000</span>
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
              <li>ROT GUARD (100 gm)</li>
              <li>Prevent 80 (1 L)</li>
              <li>SANI Fish (250 ml)</li>
              <li>MEDISAN (1 Kg)</li>
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
            <h4>ROT GUARD (100 gm)</h4>
            <p>
              Controls rot diseases | Improves immunity | Reduces stress | Enhances appetite
            </p>
          </div>

          <div className="descCard">
            <h4>Prevent 80 (1 L)</h4>
            <p>
              Controls bacterial & fungal infections | Kills viruses and harmful bacteria | Protects ecosystem | Prevents plankton bloom
            </p>
          </div>

          <div className="descCard">
            <h4>SANI Fish (250 ml)</h4>
            <p>
              Controls bacterial infections | Improves fish health | Reduces stress | Enhances appetite
            </p>
          </div>

          <div className="descCard">
            <h4>MEDISAN (1 Kg)</h4>
            <p>
              Controls bacterial & fungal diseases | Improves immunity | Reduces stress | Safe for larvae and fish spawn
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Disease_Kit_2;