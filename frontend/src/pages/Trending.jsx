


// import React, { useState, useEffect } from "react";
// import "./DealsOfTheDay.css";
// import { useCart } from "../components/CartContext";
// import { Link } from "react-router-dom";

// const data = [
  
//   {
//     category: "Medicine",
//     // offer: "30% OFF",
//     name: "AQUEAMINA",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2025/05/AQUEAMINA-1.jpg",
//     size: ["1KG", "10KG", "20KG"],
//     price: ["195.50", "1572.50", "2660.50"],
//     desc:
//       "Minerals & Micro Nutrients Promoter | Improves pond health | Boosts growth and immunity | Enhances FCR",
//   },
//   {
//     category: "Medicine",
//     // offer: "30% OFF",
//     name: "BOTTOM SEAF",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Bottom-Seaf-1.jpg",
//     size: ["1 KG"],
//     price: ["1062.50"],
//     desc:
//       "Keep pond bottom healthy by treating sludge, removing ammonia, H2S and toxic gases",
//   },
// ];

// export default function Trending() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [offers, setOffers] = useState({});
//   const { cart, addToCart } = useCart();

//   useEffect(() => {
//     const saved =
//       JSON.parse(localStorage.getItem("adminOffers")) || {};
//     setOffers(saved);
//   }, []);

//   const isInCart = (item) =>
//     cart.some((c) => c.product.name === item.name);

//   const getDiscountedPrice = (price, productName) => {
//     if (price === "Contact for Price") return price;

//     const offer = offers[productName];

//     if (!offer) return `₹${price}`;

//     const finalPrice =
//       Number(price) - (Number(price) * offer) / 100;

//     return (
//       <>
//         <span className="old-price">₹{price}</span>{" "}
//         <span className="new-price">
//           ₹{finalPrice.toFixed(2)}
//         </span>
//       </>
//     );
//   };

//   const getBadge = (product) => {
//     return offers[product.name]
//       ? `${offers[product.name]}% OFF`
//       : product.offer;
//   };

//   return (
//     <div className="dod-wrapper">
//       <div className="dod-container">

//         {/* HEADER */}
//         <div className="dod-header">
//           <div>
//             <h2 className="dod-main-title">
//               Trending in <span>Aquaculture</span>
//             </h2>

//             <p className="dod-sub-text">
//               What fish farmers across India are buying this week
//             </p>
//           </div>

//           <Link to="/shop" className="dod-view-btn">
//             View All →
//           </Link>
//         </div>

//         {/* PRODUCTS */}
//         <div className="row g-4">

//           {data.map((p, i) => (
//             <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
//               <div className="dod-card">

//                 <div className="dod-badge">
//                   {getBadge(p)}
//                 </div>

//                 <img src={p.image} alt={p.name} />

//                 <h5 className="dod-title">{p.name}</h5>

//                 <p className="dod-desc">
//                   {openIndex === i
//                     ? p.desc
//                     : p.desc.substring(0, 80) + "..."}
//                 </p>

//                 <button
//                   className="dod-read"
//                   onClick={() =>
//                     setOpenIndex(openIndex === i ? null : i)
//                   }
//                 >
//                   {openIndex === i
//                     ? "Read Less"
//                     : "Read More"}
//                 </button>

//                 <p>
//                   <b>Size:</b> {p.size.join(" | ")}
//                 </p>

//                 <p className="dod-price">
//                   <b>Price:</b>{" "}
//                   {p.price.map((item, index) => (
//                     <span key={index}>
//                       {getDiscountedPrice(item, p.name)}
//                       {index !== p.price.length - 1 && " | "}
//                     </span>
//                   ))}
//                 </p>

//                 <button
//                   className="dod-cart"
//                   onClick={() =>
//                     addToCart({
//                       product: p,
//                       selectedSizeIndex: 0,
//                     })
//                   }
//                   disabled={isInCart(p)}
//                 >
//                   {isInCart(p)
//                     ? "Added ✔"
//                     : "🛒 Add"}
//                 </button>

//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// }















// import React, { useState, useEffect } from "react";
// import "./DealsOfTheDay.css";
// import { useCart } from "../components/CartContext";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// const data = [
//   {
//     category: "Medicine",
//     name: "AQUEAMINA",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2025/05/AQUEAMINA-1.jpg",
//     size: ["1KG", "10KG", "20KG"],
//     price: ["195.50", "1572.50", "2660.50"],
//     descKey: "trending.aqueamina",
//   },
//   {
//     category: "Medicine",
//     name: "BOTTOM SEAF",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Bottom-Seaf-1.jpg",
//     size: ["1 KG"],
//     price: ["1062.50"],
//     descKey: "trending.bottom_seaf",
//   },
// ];

// export default function Trending() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [offers, setOffers] = useState({});
//   const { cart, addToCart } = useCart();
//   const { t } = useTranslation();

//   useEffect(() => {
//     const saved =
//       JSON.parse(localStorage.getItem("adminOffers")) || {};
//     setOffers(saved);
//   }, []);

//   const isInCart = (item) =>
//     cart.some((c) => c.product.name === item.name);

//   const getDiscountedPrice = (price, productName) => {
//     if (price === "Contact for Price") return price;

//     const offer = offers[productName];

//     if (!offer) return `₹${price}`;

//     const finalPrice =
//       Number(price) - (Number(price) * offer) / 100;

//     return (
//       <>
//         <span className="old-price">₹{price}</span>{" "}
//         <span className="new-price">
//           ₹{finalPrice.toFixed(2)}
//         </span>
//       </>
//     );
//   };

//   const getBadge = (product) => {
//     return offers[product.name]
//       ? `${offers[product.name]}% OFF`
//       : product.offer;
//   };

//   return (
//     <div className="dod-wrapper">
//       <div className="dod-container">

//         {/* HEADER */}
//         <div className="dod-header">
//           <div>
//             <h2 className="dod-main-title">
//               {t("trending.title")} <span>{t("trending.highlight")}</span>
//             </h2>

//             <p className="dod-sub-text">
//               {t("trending.subtitle")}
//             </p>
//           </div>

//           <Link to="/shop" className="dod-view-btn">
//             {t("trending.view_all")}
//           </Link>
//         </div>

//         {/* PRODUCTS */}
//         <div className="row g-4">

//           {data.map((p, i) => (
//             <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
//               <div className="dod-card">

//                 <div className="dod-badge">
//                   {getBadge(p)}
//                 </div>

//                 <img src={p.image} alt={p.name} />

//                 <h5 className="dod-title">{p.name}</h5>

//                 <p className="dod-desc">
//                   {openIndex === i
//                     ? t(p.descKey)
//                     : t(p.descKey).substring(0, 80) + "..."}
//                 </p>

//                 <button
//                   className="dod-read"
//                   onClick={() =>
//                     setOpenIndex(openIndex === i ? null : i)
//                   }
//                 >
//                   {openIndex === i
//                     ? t("trending.read_less")
//                     : t("trending.read_more")}
//                 </button>

//                 <p>
//                   <b>{t("trending.size")}:</b> {p.size.join(" | ")}
//                 </p>

//                 <p className="dod-price">
//                   <b>{t("trending.price")}:</b>{" "}
//                   {p.price.map((item, index) => (
//                     <span key={index}>
//                       {getDiscountedPrice(item, p.name)}
//                       {index !== p.price.length - 1 && " | "}
//                     </span>
//                   ))}
//                 </p>

//                 <button
//                   className="dod-cart"
//                   onClick={() =>
//                     addToCart({
//                       product: p,
//                       selectedSizeIndex: 0,
//                     })
//                   }
//                   disabled={isInCart(p)}
//                 >
//                   {isInCart(p)
//                     ? t("trending.added")
//                     : t("trending.add")}
//                 </button>

//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// }









import React, { useState, useEffect } from "react";
import "./DealsOfTheDay.css";
import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getOffers } from "../api";

const data = [
  {
    category: "Medicine",
    name: "AQUEAMINA",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2025/05/AQUEAMINA-1.jpg",
    size: ["1KG", "10KG", "20KG"],
    price: ["195.50", "1572.50", "2660.50"],
    descKey: "trending.aqueamina",
  },
  {
    category: "Medicine",
    name: "BOTTOM SEAF",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/Bottom-Seaf-1.jpg",
    size: ["1 KG"],
    price: ["1062.50"],
    descKey: "trending.bottom_seaf",
  },
];

export default function Trending() {
  const [openIndex, setOpenIndex] = useState(null);
  const [offers, setOffers] = useState({});
  const { cart, addToCart } = useCart();
  const { t } = useTranslation();

  // ================= API OFFERS =================
  const fetchOffers = async () => {
    try {
      const res = await getOffers();

      const formatted = {};
      res.data.forEach((item) => {
        formatted[item.product] = item.discount;
      });

      setOffers(formatted);
    } catch (err) {
      console.log("Offer API Error:", err);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const isInCart = (item) =>
    cart.some((c) => c.product.name === item.name);

  // ================= PRICE CALCULATION =================
  const calculatePrice = (price, discount) => {
    const num = parseFloat(price);

    if (isNaN(num)) return price;

    if (!discount || discount <= 0)
      return <span>₹{num.toFixed(2)}</span>;

    const finalPrice = num - (num * discount) / 100;

    return (
      <>
        <span
          style={{
            textDecoration: "line-through",
            color: "#888",
            marginRight: "8px",
            fontSize: "14px",
          }}
        >
          ₹{num.toFixed(2)}
        </span>

        <span style={{ color: "green", fontWeight: "700" }}>
          ₹{finalPrice.toFixed(2)}
        </span>
      </>
    );
  };

  const getBadge = (product) => {
    return offers[product.name]
      ? `${offers[product.name]}% OFF`
      : product.offer;
  };

  return (
    <div className="dod-wrapper">
      <div className="dod-container">

        {/* HEADER */}
        <div className="dod-header">
          <div>
            <h2 className="dod-main-title">
              {t("trending.title")} <span>{t("trending.highlight")}</span>
            </h2>

            <p className="dod-sub-text">
              {t("trending.subtitle")}
            </p>
          </div>

          <Link to="/shop" className="dod-view-btn">
            {t("trending.view_all")}
          </Link>
        </div>

        {/* CARDS */}
        <div className="row g-4">

          {data.map((p, i) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
              <div className="dod-card">

                <div className="dod-badge">
                  {getBadge(p)}
                </div>

                <img src={p.image} alt={p.name} />

                <h5 className="dod-title">{p.name}</h5>

                <p className="dod-desc">
                  {openIndex === i
                    ? t(p.descKey)
                    : t(p.descKey).substring(0, 80) + "..."}
                </p>

                <button
                  className="dod-read"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                >
                  {openIndex === i
                    ? t("trending.read_less")
                    : t("trending.read_more")}
                </button>

                <p>
                  <b>{t("trending.size")}:</b> {p.size.join(" | ")}
                </p>

                {/* PRICE BLOCK FIXED */}
                <div className="dod-price">
                  <b>{t("trending.price")}:</b>{" "}
                  {p.price.map((price, index) => (
                    <div key={index}>
                      {p.size[index]} :{" "}
                      {calculatePrice(price, offers[p.name])}
                    </div>
                  ))}
                </div>

                {/* CART BUTTON */}
                <button
                  className="dod-cart"
                  onClick={() =>
                    addToCart({
                      product: p,
                      selectedSizeIndex: 0,
                    })
                  }
                  disabled={isInCart(p)}
                >
                  {isInCart(p)
                    ? t("trending.added")
                    : t("trending.add")}
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}