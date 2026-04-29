






// import React, { useState, useEffect } from "react";
// import "./DealsOfTheDay.css";
// import { useCart } from "../components/CartContext";
// import { Link } from "react-router-dom";

// const data = [
//  {
//     category: "Medicine",
//     name: "EAZY CHUN",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/eazy-chun-1.jpg",
//     size: ["1 KG"],
//     price: ["233.75"],
//     desc:
//       "Maintains pH balance | Promotes plankton growth | Improves dissolved oxygen concentration | Boosts fish immunity",
//   },
//  {
//     category: "Medicine",
//     name: "DO OXY",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/do-oxy-1.jpg",
//     size: ["1 KG"],
//     price: ["1037.00"],
//     desc:
//       "Solves oxygen deficiency in high density fish culture | Maintains dissolved oxygen levels | Improves fish survival rate",
//   },
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
//       "Keep pond bottom healthy by treating sludge, removing ammonia, H2S, and other toxic gases | Reduce algal bloom and keep pond healthy | Improve beneficial bacteria | Reduce stress, improve immunity & appetite | Balance pH and dissolved oxygen | Improve natural feed and FCR",
//   },
// ];

// export default function DealsOfTheDay() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [offers, setOffers] = useState({});
//   const { cart, addToCart } = useCart();

//   useEffect(() => {
//     const savedOffers =
//       JSON.parse(localStorage.getItem("adminOffers")) || {};
//     setOffers(savedOffers);
//   }, []);

//   const isInCart = (item) =>
//     cart.some((c) => c.product.name === item.name);

//   const calculatePrice = (price, discount) => {
//     const num = parseFloat(price);

//     if (isNaN(num)) return price;

//     if (!discount || discount <= 0) return `₹${num.toFixed(2)}`;

//     const finalPrice = num - (num * discount) / 100;

//     return (
//       <>
//         <span
//           style={{
//             textDecoration: "line-through",
//             color: "#888",
//             marginRight: "8px",
//             fontSize: "14px",
//           }}
//         >
//           ₹{num.toFixed(2)}
//         </span>

//         <span style={{ color: "green", fontWeight: "700" }}>
//           ₹{finalPrice.toFixed(2)}
//         </span>
//       </>
//     );
//   };

//   return (
//     <div className="dod-wrapper">
//       <div className="dod-container">

//         {/* HEADER */}
//         <div className="dod-header">
//           <div>
//             <h2 className="dod-main-title">
//               Deals of <span>the Day</span>
//             </h2>

//             <p className="dod-sub-text">
//               Hand-picked savings for the next 24 hours only
//             </p>
//           </div>

//           <Link to="/shop" className="dod-view-btn">
//             View All →
//           </Link>
//         </div>

//         {/* PRODUCTS */}
//         <div className="row g-4">

//           {data.map((p, i) => {
//             const discount = offers[p.name] || 0;

//             return (
//               <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
//                 <div className="dod-card">

//                   {/* OFFER BADGE */}
//                   <div className="dod-badge">
//                     {discount > 0
//                       ? `${discount}% OFF`
//                       : p.offer}
//                   </div>

//                   <img src={p.image} alt={p.name} />

//                   <h5 className="dod-title">{p.name}</h5>

//                   <p className="dod-desc">
//                     {openIndex === i
//                       ? p.desc
//                       : p.desc.substring(0, 80) + "..."}
//                   </p>

//                   <button
//                     className="dod-read"
//                     onClick={() =>
//                       setOpenIndex(
//                         openIndex === i ? null : i
//                       )
//                     }
//                   >
//                     {openIndex === i
//                       ? "Read Less"
//                       : "Read More"}
//                   </button>

//                   <p>
//                     <b>Size:</b> {p.size.join(" | ")}
//                   </p>

//                   {/* PRICE */}
//                   <div className="dod-price">
//                     <b>Price:</b>{" "}
//                     {Array.isArray(p.price)
//                       ? p.price.map((price, index) => (
//                           <div key={index}>
//                             {p.size[index]} :{" "}
//                             {calculatePrice(
//                               price,
//                               discount
//                             )}
//                           </div>
//                         ))
//                       : calculatePrice(
//                           p.price,
//                           discount
//                         )}
//                   </div>

//                   <button
//                     className="dod-cart"
//                     onClick={() =>
//                       addToCart({
//                         product: p,
//                         selectedSizeIndex: 0,
//                       })
//                     }
//                     disabled={isInCart(p)}
//                   >
//                     {isInCart(p)
//                       ? "Added ✔"
//                       : "🛒 Add"}
//                   </button>

//                 </div>
//               </div>
//             );
//           })}

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
//  {
//     category: "Medicine",
//     name: "EAZY CHUN",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/eazy-chun-1.jpg",
//     size: ["1 KG"],
//     price: ["233.75"],
//     descKey: "dod.eazy_chun"
//   },
//  {
//     category: "Medicine",
//     name: "DO OXY",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/do-oxy-1.jpg",
//     size: ["1 KG"],
//     price: ["1037.00"],
//     descKey: "dod.do_oxy"
//   },
//   {
//     category: "Medicine",
//     name: "AQUEAMINA",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2025/05/AQUEAMINA-1.jpg",
//     size: ["1KG", "10KG", "20KG"],
//     price: ["195.50", "1572.50", "2660.50"],
//     descKey: "dod.aqueamina"
//   },
//   {
//     category: "Medicine",
//     name: "BOTTOM SEAF",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Bottom-Seaf-1.jpg",
//     size: ["1 KG"],
//     price: ["1062.50"],
//     descKey: "dod.bottom_seaf"
//   },
// ];

// export default function DealsOfTheDay() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [offers, setOffers] = useState({});
//   const { cart, addToCart } = useCart();
//   const { t } = useTranslation();

//   useEffect(() => {
//     const savedOffers =
//       JSON.parse(localStorage.getItem("adminOffers")) || {};
//     setOffers(savedOffers);
//   }, []);

//   const isInCart = (item) =>
//     cart.some((c) => c.product.name === item.name);

//   const calculatePrice = (price, discount) => {
//     const num = parseFloat(price);

//     if (isNaN(num)) return price;

//     if (!discount || discount <= 0) return `₹${num.toFixed(2)}`;

//     const finalPrice = num - (num * discount) / 100;

//     return (
//       <>
//         <span
//           style={{
//             textDecoration: "line-through",
//             color: "#888",
//             marginRight: "8px",
//             fontSize: "14px",
//           }}
//         >
//           ₹{num.toFixed(2)}
//         </span>

//         <span style={{ color: "green", fontWeight: "700" }}>
//           ₹{finalPrice.toFixed(2)}
//         </span>
//       </>
//     );
//   };

//   return (
//     <div className="dod-wrapper">
//       <div className="dod-container">

//         {/* HEADER */}
//         <div className="dod-header">
//           <div>
//             <h2 className="dod-main-title">
//               {t("dod.title")} <span>{t("dod.highlight")}</span>
//             </h2>

//             <p className="dod-sub-text">
//               {t("dod.subtitle")}
//             </p>
//           </div>

//           <Link to="/shop" className="dod-view-btn">
//             {t("dod.view_all")}
//           </Link>
//         </div>

//         {/* PRODUCTS */}
//         <div className="row g-4">

//           {data.map((p, i) => {
//             const discount = offers[p.name] || 0;

//             return (
//               <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
//                 <div className="dod-card">

//                   {/* OFFER BADGE */}
//                   <div className="dod-badge">
//                     {discount > 0
//                       ? `${discount}% ${t("dod.off")}`
//                       : ""}
//                   </div>

//                   <img src={p.image} alt={p.name} />

//                   <h5 className="dod-title">{p.name}</h5>

//                   <p className="dod-desc">
//                     {openIndex === i
//                       ? t(p.descKey)
//                       : t(p.descKey).substring(0, 80) + "..."}
//                   </p>

//                   <button
//                     className="dod-read"
//                     onClick={() =>
//                       setOpenIndex(openIndex === i ? null : i)
//                     }
//                   >
//                     {openIndex === i
//                       ? t("dod.read_less")
//                       : t("dod.read_more")}
//                   </button>

//                   <p>
//                     <b>{t("dod.size")}:</b> {p.size.join(" | ")}
//                   </p>

//                   {/* PRICE */}
//                   <div className="dod-price">
//                     <b>{t("dod.price")}:</b>{" "}
//                     {Array.isArray(p.price)
//                       ? p.price.map((price, index) => (
//                           <div key={index}>
//                             {p.size[index]} :{" "}
//                             {calculatePrice(price, discount)}
//                           </div>
//                         ))
//                       : calculatePrice(price, discount)}
//                   </div>

//                   <button
//                     className="dod-cart"
//                     onClick={() =>
//                       addToCart({
//                         product: p,
//                         selectedSizeIndex: 0,
//                       })
//                     }
//                     disabled={isInCart(p)}
//                   >
//                     {isInCart(p)
//                       ? t("dod.added")
//                       : t("dod.add")}
//                   </button>

//                 </div>
//               </div>
//             );
//           })}

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
import { getOffers } from "../api";   // 👈 ADD THIS

const data = [
 {
    category: "Medicine",
    name: "EAZY CHUN",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/eazy-chun-1.jpg",
    size: ["1 KG"],
    price: ["233.75"],
    descKey: "dod.eazy_chun"
  },
 {
    category: "Medicine",
    name: "DO OXY",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/do-oxy-1.jpg",
    size: ["1 KG"],
    price: ["1037.00"],
    descKey: "dod.do_oxy"
  },
  {
    category: "Medicine",
    name: "AQUEAMINA",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2025/05/AQUEAMINA-1.jpg",
    size: ["1KG", "10KG", "20KG"],
    price: ["195.50", "1572.50", "2660.50"],
    descKey: "dod.aqueamina"
  },
  {
    category: "Medicine",
    name: "BOTTOM SEAF",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/Bottom-Seaf-1.jpg",
    size: ["1 KG"],
    price: ["1062.50"],
    descKey: "dod.bottom_seaf"
  },
];

export default function DealsOfTheDay() {
  const [openIndex, setOpenIndex] = useState(null);
  const [offers, setOffers] = useState({});   // 👈 API OFFERS
  const { cart, addToCart } = useCart();
  const { t } = useTranslation();

  // ================= FETCH OFFERS FROM API =================
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

  return (
    <div className="dod-wrapper">
      <div className="dod-container">

        <div className="dod-header">
          <div>
            <h2 className="dod-main-title">
              {t("dod.title")} <span>{t("dod.highlight")}</span>
            </h2>

            <p className="dod-sub-text">
              {t("dod.subtitle")}
            </p>
          </div>

          <Link to="/shop" className="dod-view-btn">
            {t("dod.view_all")}
          </Link>
        </div>

        <div className="row g-4">

          {data.map((p, i) => {
            const discount = offers[p.name] || 0; // 👈 SAME LOGIC AS SHOP

            return (
              <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                <div className="dod-card">

                  {/* OFFER BADGE */}
                  {discount > 0 && (
                    <div className="dod-badge">
                      {discount}% {t("dod.off")}
                    </div>
                  )}

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
                      ? t("dod.read_less")
                      : t("dod.read_more")}
                  </button>

                  <p>
                    <b>{t("dod.size")}:</b> {p.size.join(" | ")}
                  </p>

                  <div className="dod-price">
                    <b>{t("dod.price")}:</b>{" "}
                    {p.price.map((price, index) => (
                      <div key={index}>
                        {p.size[index]} :{" "}
                        {calculatePrice(price, discount)}
                      </div>
                    ))}
                  </div>

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
                      ? t("dod.added")
                      : t("dod.add")}
                  </button>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}