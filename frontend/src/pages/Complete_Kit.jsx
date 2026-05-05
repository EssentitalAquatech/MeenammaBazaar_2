


// import React, { useState } from "react";
// import "./CompleteKit.css";
// import { useCart } from "../components/CartContext";

// import img1 from "../assets/images/eazy-chun-1.jpg";
// import img2 from "../assets/images/liv-active-1.jpg";
// import img3 from "../assets/images/ZEA-POND-1.jpg";
// import img4 from "../assets/images/EA-PRO-B-II.PNG";
// import img5 from "../assets/images/YEASTEA-1.jpg";
// import img6 from "../assets/images/AQUEAMINA-1.jpg";

// const images = [
//   { src: img1, name: "Eazy Chun" },
//   { src: img2, name: "Liv Active Gel" },
//   { src: img3, name: "Zeapond" },
//   { src: img4, name: "EA Pro B" },
//   { src: img5, name: "Yeast EA" },
//   { src: img6, name: "Aqueamina" },
// ];

// function Complete_Kit() {
//   const [current, setCurrent] = useState(0);
//   const [added, setAdded] = useState(false);
//   const { cart, addToCart } = useCart();

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const kitProduct = {
//     name: "Complete Pond Health Kit",
//     price: "6598",
//     image: img1,
//     desc: "Complete fish farming solution kit",
//   };

//   // check already added
//   const isInCart = cart.some(
//     (item) => item.product.name === kitProduct.name
//   );

//   const handleAdd = () => {
//     if (!isInCart) {
//       addToCart({
//         product: kitProduct,
//         selectedSizeIndex: 0,
//       });
//       setAdded(true);
//     }
//   };

//   return (
//     <div className="kitWrapper">

//       <div className="kitContainer">

//         {/* LEFT SIDE */}
//         <div className="kitLeft">

//           <div className="slider">
//             <button className="arrow left" onClick={prevSlide}>❮</button>

//             <img
//               src={images[current].src}
//               alt={images[current].name}
//             />

//             <button className="arrow right" onClick={nextSlide}>❯</button>
//           </div>

//           {/* THUMBNAILS */}
//           <div className="thumbContainer">
//             {images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img.src}
//                 alt={img.name}
//                 className={current === i ? "activeThumb" : ""}
//                 onClick={() => setCurrent(i)}
//               />
//             ))}
//           </div>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="kitRight">

//           <h1 className="title">Complete Pond Health Kit</h1>

//           <p className="subText">
//             Sab kuch ek saath – full pond solution
//           </p>

//           <div className="priceBox">
//             <span>₹6598.72</span>
//             <small>Inclusive of all items</small>
//           </div>

//           {/* ADD TO CART */}
//           <button
//             className="addBtn"
//             onClick={handleAdd}
//             disabled={isInCart}
//           >
//             {isInCart || added ? "✅ Added" : "🛒 Add To Cart"}
//           </button>

//           {/* INCLUDED ITEMS */}
//           <div className="includesBox">
//             <h3>Kit Includes:</h3>
//             <ul>
//               <li>EAZY CHUN (1 Kg)</li>
//               <li>LIV ACTIVE GEL (5 L)</li>
//               <li>ZEAPOND (5 Kg)</li>
//               <li>EA PRO B (1 Kg)</li>
//               <li>YEAST EA (1 Kg)</li>
//               <li>AQUEAMINA (20 Kg)</li>
//             </ul>
//           </div>

//         </div>

//       </div>

//       {/* DESCRIPTION */}
//       <div className="kitDescription">

//         <h2>Product Description</h2>

//         <div className="descGrid">

//           <div className="descCard">
//             <h4>EAZY CHUN (1 Kg)</h4>
//             <p>
//               Maintains pH balance | Promotes plankton growth | Improves dissolved oxygen concentration | Boosts fish immunity
//             </p>
//           </div>

//           <div className="descCard">
//             <h4>LIV ACTIVE GEL (5 L)</h4>
//             <p>
//               Acts as a protector to prevent liver damage | Binds feed supplements & probiotics | Improves digestion, appetite & FCR | Increases growth & immunity | Reduces culture period
//             </p>
//           </div>

//           <div className="descCard">
//             <h4>ZEAPOND (5 Kg)</h4>
//             <p>
//               Reduces ammonia & toxic gases | Improves water odor | Balances pH | Enhances oxygen | Improves ecosystem & plankton
//             </p>
//           </div>

//           <div className="descCard">
//             <h4>EA PRO B (1 Kg)</h4>
//             <p>
//               Improves water quality | Reduces organic load | Cleans water | Controls harmful bacteria & fungus | Boosts growth
//             </p>
//           </div>

//           <div className="descCard">
//             <h4>YEAST EA (1 Kg)</h4>
//             <p>
//               Improves growth performance | Boosts immunity | Improves water quality | Reduces bacterial load
//             </p>
//           </div>

//           <div className="descCard">
//             <h4>AQUEAMINA (20 Kg)</h4>
//             <p>
//               Minerals & micro nutrients | Improves pond nutrition | Promotes plankton growth | Enhances FCR & growth | Increases disease resistance
//             </p>
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Complete_Kit;

















import React, { useState } from "react";
import "./CompleteKit.css";
import { useCart } from "../components/CartContext";

import img1 from "../assets/images/eazy-chun-1.jpg";
import img2 from "../assets/images/liv-active-1.jpg";
import img3 from "../assets/images/ZEA-POND-1.jpg";
import img4 from "../assets/images/EA-PRO-B-II.PNG";
import img5 from "../assets/images/YEASTEA-1.jpg";
import img6 from "../assets/images/AQUEAMINA-1.jpg";

const images = [
  { src: img1, name: "Eazy Chun" },
  { src: img2, name: "Liv Active Gel" },
  { src: img3, name: "Zeapond" },
  { src: img4, name: "EA Pro B" },
  { src: img5, name: "Yeast EA" },
  { src: img6, name: "Aqueamina" },
];

function Complete_Kit() {
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

  // ✅ FIXED PRODUCT STRUCTURE (IMPORTANT)
  const kitProduct = {
    category: "Kit",
    name: "Complete Pond Health Kit",
    image: img1,
    size: ["Full Kit"],       // ✅ must be array
    price: ["6598"],          // ✅ must be array
    desc: "Complete fish farming solution kit",
  };

  // check if already in cart
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

          <h1 className="title">Complete Pond Health Kit</h1>

          <p className="subText">
            Sab kuch ek saath – full pond solution
          </p>

          <div className="priceBox">
            <span>₹6598</span>
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
              <li>EAZY CHUN (1 Kg)</li>
              <li>LIV ACTIVE GEL (5 L)</li>
              <li>ZEAPOND (5 Kg)</li>
              <li>EA PRO B (1 Kg)</li>
              <li>YEAST EA (1 Kg)</li>
              <li>AQUEAMINA (20 Kg)</li>
            </ul>
          </div>

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="kitDescription">

        <h2>Product Description</h2>

        <div className="descGrid">

          <div className="descCard">
            <h4>EAZY CHUN (1 Kg)</h4>
            <p>
              Maintains pH balance | Promotes plankton growth | Improves dissolved oxygen concentration | Boosts fish immunity
            </p>
          </div>

          <div className="descCard">
            <h4>LIV ACTIVE GEL (5 L)</h4>
            <p>
              Acts as a protector to prevent liver damage | Improves digestion | Increases appetite & FCR | Boosts growth & immunity
            </p>
          </div>

          <div className="descCard">
            <h4>ZEAPOND (5 Kg)</h4>
            <p>
              Reduces toxic gases | Improves water odor | Balances ecosystem | Enhances oxygen level
            </p>
          </div>

          <div className="descCard">
            <h4>EA PRO B (1 Kg)</h4>
            <p>
              Improves water quality | Reduces organic load | Controls bacteria & fungus
            </p>
          </div>

          <div className="descCard">
            <h4>YEAST EA (1 Kg)</h4>
            <p>
              Improves growth performance | Boosts immunity | Reduces bacterial load
            </p>
          </div>

          <div className="descCard">
            <h4>AQUEAMINA (20 Kg)</h4>
            <p>
              Enhances nutrients | Improves growth & FCR | Increases disease resistance
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Complete_Kit;