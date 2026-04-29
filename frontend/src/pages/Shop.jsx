






// import React, { useState, useEffect } from "react";
// import "./Shop.css";
// import { useCart } from "../components/CartContext";

// /* tumhara pura data same rahega */
// const data = [
   
//   {
//     category: "Medicine",
//     name: "AQUEAMINA",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2025/05/AQUEAMINA-1.jpg",
//     size: ["1KG", "10KG", "20KG"],
//     price: ["195.50", "1572.50", "2660.50"],
//     desc:
//       "Minerals & Micro Nutrients Promoter | Enriches Pond water's nutritional value | Promotes disease resistance | Helps grow phytoplankton and zooplankton | Improves FCR, increases growth and body weight, and enhances disease resistance | Reduces culture period through fast growth",
//   },
//   {
//     category: "Medicine",
//     name: "BOTTOM SEAF",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Bottom-Seaf-1.jpg",
//     size: ["1 KG"],
//     price: ["1062.50"],
//     desc:
//       "Keep pond bottom healthy by treating sludge, removing ammonia, H2S, and other toxic gases | Reduce algal bloom and keep pond healthy | Improve beneficial bacteria | Reduce stress, improve immunity & appetite | Balance pH and dissolved oxygen | Improve natural feed and FCR",
//   },
//   {
//     category: "Medicine",
//     name: "CALCI FISH",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Calci-Fish-1.jpg",
//     size: ["5 L"],
//     price: ["892.50"],
//     desc:
//       "Improves structural and bone strength | Builds healthy muscles | Reduces stress and improves immunity | Improves appetite and body weight gain",
//   },
//   {
//     category: "Medicine",
//     name: "CLEAR POND",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Clear-Pond.webp",
//     size: ["250mL", "1 L"],
//     price: ["382.50", "1232.50"],
//     desc:
//       "Absorbs ammonia, hydrogen sulphide and toxic gases | Reduces bacterial load | Removes bad odour | Improves ecosystem | Increases growth and immunity",
//   },
//   {
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
//     name: "EAZY CHUN",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/eazy-chun-1.jpg",
//     size: ["1 KG"],
//     price: ["233.75"],
//     desc:
//       "Maintains pH balance | Promotes plankton growth | Improves dissolved oxygen concentration | Boosts fish immunity",
//   },
//   {
//     category: "Medicine",
//     name: "LIV ZYM",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/liv-zym-1.jpg",
//     size: ["5 L"],
//     price: ["1062.50"],
//     desc:
//       "Treats liver disorders | Prevents liver damage from toxins | Improves digestion and appetite | Reduces stress | Improves FCR and body weight gain",
//   },
//   {
//     category: "Medicine",
//     name: "MEDISAN",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/medisan-1.jpg",
//     size: ["250 mL", "1 L"],
//     price: ["331.50", "892.50"],
//     desc:
//       "Controls bacterial & fungal diseases | Improves immunity | Reduces stress | Safe for larvae and fish spawn",
//   },
//   {
//     category: "Medicine",
//     name: "PHYTO PRO FS",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/phyto-pro-1.jpg",
//     size: ["1 KG"],
//     price: ["1889.00"],
//     desc:
//       "Creates phytoplankton (green water) | Produces natural feed | Improves FCR | Enhances pond ecosystem",
//   },
//   {
//     category: "Medicine",
//     name: "PREVENT 80",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/medisan-1.jpg",
//     size: ["0.5 L", "1 L", "5 L"],
//     price: ["586.50", "1011.50", "5519"],
//     desc:
//       "Controls bacterial & fungal infections | Kills viruses and harmful bacteria | Protects ecosystem | Prevents plankton bloom",
//   },
//   {
//     category: "Medicine",
//     name: "RENO FAST",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/reno-fast-1.jpg",
//     size: ["250 mL", "1 L"],
//     price: ["722.50", "2889.00"],
//     desc:
//       "Treats fin rot, tail rot, gill disease | Improves immunity | Increases appetite | Faster recovery",
//   },
//   {
//     category: "Medicine",
//     name: "ROT GUARD",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/rot-guard-1.jpg",
//     size: ["100 gm"],
//     price: ["357.00"],
//     desc:
//       "Controls rot diseases | Improves immunity | Reduces stress | Enhances appetite",
//   },
//   {
//     category: "Medicine",
//     name: "SANI FISH",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/sani-fish-1.jpg",
//     size: ["250 mL", "1 L"],
//     price: ["408.00", "1309.00"],
//     desc:
//       "Controls bacterial infections | Improves fish health | Reduces stress | Enhances appetite",
//   },
//   {
//     category: "Medicine",
//     name: "VITAMIN FS",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Viteamin-fs-1.jpg",
//     size: ["1 KG"],
//     price: ["331.50"],
//     desc:
//       "Vitamin & mineral supplement | Faster growth | Better digestion | Improves FCR",
//   },
//   {
//     category: "Medicine",
//     name: "WATER SOFT",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/water-soft-1.jpg",
//     size: ["0.5 KG", "5 KG"],
//     price: ["297.50", "2389.00"],
//     desc:
//       "Reduces water hardness | Improves oxygen level | Removes toxicity | Improves fish health",
//   },
//   {
//     category: "Medicine",
//     name: "YEAST EA",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/YEASTEA-1.jpg",
//     size: ["1 KG"],
//     price: ["314.50"],
//     desc:
//       "Improves growth performance | Boosts immunity | Improves water quality | Reduces bacterial load",
//   },
//   {
//     category: "Medicine",
//     name: "ZEA G",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/ZEA-G-1.jpg",
//     size: ["10 KG"],
//     price: ["1317.50"],
//     desc:
//       "Removes toxic gases like ammonia & hydrogen sulfide | Improves pond bottom condition | Balances pH | Improves oxygen and immunity",
//   },

//   // ================= FEED =================
//   {
//     category: "Feed",
//     name: "Elaang Feed 42P1M",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Elaang-Feed-l.webp",
//     size: ["25 KG"],
//     price: ["Contact for Price"],
//     desc:
//       "Elaang Fish Feed 42% Protein, 6% Fat, Pellet Size 1mm. Feed For IMC, Pangasius, Roopchand, Tilapia, Catfish",
//   },
//   {
//     category: "Feed",
//     name: "Elaang Feed 28P2M",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Elaang-Feed-lI.webp",
//     size: ["25 KG"],
//     price: ["Contact for Price"],
//     desc:
//       "Elaang Fish Feed 28% Protein, 3% Fat, Pellet Size 2mm. Feed For IMC, Pangasius, Roopchand, Tilapia, Catfish. ",
//   },
//    {
//     category: "Feed",
//     name: "Elaang Feed 24P3M",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Elaang-Feed-lII.webp",
//     size: ["25 KG"],
//     price: ["Contact for Price"],
//     desc:
//       "Elaang Fish Feed 24% Protein, 3% Fat, Pellet Size 3mm. Feed For IMC, Pangasius, Roopchand, Tilapia, Catfish. ",
//   },
//   {
//     category: "Feed",
//     name: "Elaang Feed 20P4M",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Elaang-Feed-lV.webp",
//     size: ["25 KG"],
//     price: ["Contact for Price"],
//     desc:
//       "Elaang Fish Feed 20% Protein, 4% Fat, Pellet Size 4mm. Feed For IMC, Pangasius, Roopchand, Tilapia, Catfish. ",
//   },

 

// ]

// export default function Shop() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [offers, setOffers] = useState({});

//   const { cart, addToCart } = useCart();

//   useEffect(() => {
//     const savedOffers =
//       JSON.parse(localStorage.getItem("adminOffers")) || {};
//     setOffers(savedOffers);
//   }, []);

//   const isInCart = (item) => {
//     return cart.some((c) => c.product.name === item.name);
//   };

//   const filteredData = data.filter((p) => {
//     const matchSearch = p.name
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchFilter =
//       filter === "All"
//         ? true
//         : p.category === filter;

//     return matchSearch && matchFilter;
//   });

//   const calculatePrice = (price, discount) => {
//     const num = parseFloat(price);

//     if (isNaN(num)) return price;

//     if (!discount || discount <= 0) {
//       return `₹${num.toFixed(2)}`;
//     }

//     const finalPrice =
//       num - (num * discount) / 100;

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

//         <span
//           style={{
//             color: "green",
//             fontWeight: "700",
//           }}
//         >
//           ₹{finalPrice.toFixed(2)}
//         </span>
//       </>
//     );
//   };

//   return (
//     <div className="shop-product-page">
//       <div className="container py-5">

//         {/* TITLE */}
//         <h2 className="shop-main-title mt-4">
//           Our <span>Products</span>
//         </h2>

//         {/* DESCRIPTION */}
//         <p className="shop-sub-text">
//           Scientifically backed products for inland aquaculture.
//         </p>

//         {/* SEARCH + FILTER */}
//         <div className="shop-top-bar">

//           {/* SEARCH */}
//           <div className="shop-search-box">
//             <i className="fa fa-search"></i>

//             <input
//               type="text"
//               placeholder="Search Products"
//               value={search}
//               onChange={(e) =>
//                 setSearch(e.target.value)
//               }
//             />
//           </div>

//           {/* FILTER */}
//           <div className="shop-filter-btns">
//             <button
//               onClick={() => setFilter("All")}
//             >
//               All
//             </button>

//             <button
//               onClick={() =>
//                 setFilter("Medicine")
//               }
//             >
//               Medicine
//             </button>

//             <button
//               onClick={() => setFilter("Feed")}
//             >
//               Feed
//             </button>
//           </div>

//         </div>

//         {/* PRODUCTS */}
//   {/* PRODUCTS */}
// <div className="row mt-4 g-4">

//   {filteredData.map((p, i) => {
//     const discount = offers[p.name] || 0;

//     return (
//       <div
//         className="col-lg-4 col-md-6 col-sm-12"
//         key={i}
//       >
//         <div className="shop-product-card">

//           {/* TOP BAR */}
//           <div className="shop-card-top">

//             {/* LEFT CATEGORY */}
//             <div className="shop-category-label">
//               {p.category}
//             </div>

//             {/* RIGHT OFFER */}
//             {discount > 0 && (
//               <div className="shop-offer-badge">
//                 {discount}% OFF
//               </div>
//             )}

//           </div>

//           {/* IMAGE */}
//           <img
//             src={p.image}
//             alt={p.name}
//           />

//           {/* NAME */}
//           <h5 className="mt-2">
//             {p.name}
//           </h5>

//           {/* DESCRIPTION */}
//           <p className="shop-desc">
//             {openIndex === i
//               ? p.desc
//               : p.desc.substring(
//                   0,
//                   90
//                 ) + "..."}
//           </p>

//           {/* READ MORE */}
//           <button
//             className="shop-read-btn"
//             onClick={() =>
//               setOpenIndex(
//                 openIndex === i
//                   ? null
//                   : i
//               )
//             }
//           >
//             {openIndex === i
//               ? "Read Less"
//               : "Read More"}
//           </button>

//           {/* SIZE */}
//           <p>
//             <b>Size:</b>{" "}
//             {p.size.join(" | ")}
//           </p>

//           {/* PRICE */}
//           <div className="shop-price">
//             <b>Price:</b>

//             {p.price.map(
//               (
//                 itemPrice,
//                 index
//               ) => (
//                 <div
//                   key={index}
//                   style={{
//                     marginTop:
//                       "5px",
//                   }}
//                 >
//                   {
//                     p.size[
//                       index
//                     ]
//                   }{" "}
//                   :{" "}
//                   {calculatePrice(
//                     itemPrice,
//                     discount
//                   )}
//                 </div>
//               )
//             )}
//           </div>

//           {/* CART */}
//           <button
//             className="shop-cart-btn"
//             onClick={() =>
//               addToCart({
//                 product: p,
//                 selectedSizeIndex: 0,
//               })
//             }
//             disabled={isInCart(p)}
//           >
//             {isInCart(p)
//               ? "Added ✔"
//               : "🛒 Add"}
//           </button>

//         </div>
//       </div>
//     );
//   })}

// </div>

//       </div>
//     </div>
//   );
// }











import React, { useState, useEffect } from "react";
import "./Shop.css";
import { useCart } from "../components/CartContext";
import { getOffers } from "../api";

const data = [
   
  {
    category: "Medicine",
    name: "AQUEAMINA",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2025/05/AQUEAMINA-1.jpg",
    size: ["1KG", "10KG", "20KG"],
    price: ["195.50", "1572.50", "2660.50"],
    desc:
      "Minerals & Micro Nutrients Promoter | Enriches Pond water's nutritional value | Promotes disease resistance | Helps grow phytoplankton and zooplankton | Improves FCR, increases growth and body weight, and enhances disease resistance | Reduces culture period through fast growth",
  },
  {
    category: "Medicine",
    name: "BOTTOM SEAF",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/Bottom-Seaf-1.jpg",
    size: ["1 KG"],
    price: ["1062.50"],
    desc:
      "Keep pond bottom healthy by treating sludge, removing ammonia, H2S, and other toxic gases | Reduce algal bloom and keep pond healthy | Improve beneficial bacteria | Reduce stress, improve immunity & appetite | Balance pH and dissolved oxygen | Improve natural feed and FCR",
  },
  {
    category: "Medicine",
    name: "CALCI FISH",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/Calci-Fish-1.jpg",
    size: ["5 L"],
    price: ["892.50"],
    desc:
      "Improves structural and bone strength | Builds healthy muscles | Reduces stress and improves immunity | Improves appetite and body weight gain",
  },
  {
    category: "Medicine",
    name: "CLEAR POND",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/Clear-Pond.webp",
    size: ["250mL", "1 L"],
    price: ["382.50", "1232.50"],
    desc:
      "Absorbs ammonia, hydrogen sulphide and toxic gases | Reduces bacterial load | Removes bad odour | Improves ecosystem | Increases growth and immunity",
  },
  {
    category: "Medicine",
    name: "DO OXY",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/do-oxy-1.jpg",
    size: ["1 KG"],
    price: ["1037.00"],
    desc:
      "Solves oxygen deficiency in high density fish culture | Maintains dissolved oxygen levels | Improves fish survival rate",
  },
  {
    category: "Medicine",
    name: "EAZY CHUN",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/eazy-chun-1.jpg",
    size: ["1 KG"],
    price: ["233.75"],
    desc:
      "Maintains pH balance | Promotes plankton growth | Improves dissolved oxygen concentration | Boosts fish immunity",
  },
  {
    category: "Medicine",
    name: "LIV ZYM",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/liv-zym-1.jpg",
    size: ["5 L"],
    price: ["1062.50"],
    desc:
      "Treats liver disorders | Prevents liver damage from toxins | Improves digestion and appetite | Reduces stress | Improves FCR and body weight gain",
  },
  {
    category: "Medicine",
    name: "MEDISAN",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/medisan-1.jpg",
    size: ["250 mL", "1 L"],
    price: ["331.50", "892.50"],
    desc:
      "Controls bacterial & fungal diseases | Improves immunity | Reduces stress | Safe for larvae and fish spawn",
  },
  {
    category: "Medicine",
    name: "PHYTO PRO FS",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/phyto-pro-1.jpg",
    size: ["1 KG"],
    price: ["1889.00"],
    desc:
      "Creates phytoplankton (green water) | Produces natural feed | Improves FCR | Enhances pond ecosystem",
  },
  {
    category: "Medicine",
    name: "PREVENT 80",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/medisan-1.jpg",
    size: ["0.5 L", "1 L", "5 L"],
    price: ["586.50", "1011.50", "5519"],
    desc:
      "Controls bacterial & fungal infections | Kills viruses and harmful bacteria | Protects ecosystem | Prevents plankton bloom",
  },
  {
    category: "Medicine",
    name: "RENO FAST",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/reno-fast-1.jpg",
    size: ["250 mL", "1 L"],
    price: ["722.50", "2889.00"],
    desc:
      "Treats fin rot, tail rot, gill disease | Improves immunity | Increases appetite | Faster recovery",
  },
  {
    category: "Medicine",
    name: "ROT GUARD",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/rot-guard-1.jpg",
    size: ["100 gm"],
    price: ["357.00"],
    desc:
      "Controls rot diseases | Improves immunity | Reduces stress | Enhances appetite",
  },
  {
    category: "Medicine",
    name: "SANI FISH",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/sani-fish-1.jpg",
    size: ["250 mL", "1 L"],
    price: ["408.00", "1309.00"],
    desc:
      "Controls bacterial infections | Improves fish health | Reduces stress | Enhances appetite",
  },
  {
    category: "Medicine",
    name: "VITAMIN FS",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/Viteamin-fs-1.jpg",
    size: ["1 KG"],
    price: ["331.50"],
    desc:
      "Vitamin & mineral supplement | Faster growth | Better digestion | Improves FCR",
  },
  {
    category: "Medicine",
    name: "WATER SOFT",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/water-soft-1.jpg",
    size: ["0.5 KG", "5 KG"],
    price: ["297.50", "2389.00"],
    desc:
      "Reduces water hardness | Improves oxygen level | Removes toxicity | Improves fish health",
  },
  {
    category: "Medicine",
    name: "YEAST EA",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/YEASTEA-1.jpg",
    size: ["1 KG"],
    price: ["314.50"],
    desc:
      "Improves growth performance | Boosts immunity | Improves water quality | Reduces bacterial load",
  },
  {
    category: "Medicine",
    name: "ZEA G",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/ZEA-G-1.jpg",
    size: ["10 KG"],
    price: ["1317.50"],
    desc:
      "Removes toxic gases like ammonia & hydrogen sulfide | Improves pond bottom condition | Balances pH | Improves oxygen and immunity",
  },

  // ================= FEED =================
  {
    category: "Feed",
    name: "Elaang Feed 42P1M",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/Elaang-Feed-l.webp",
    size: ["25 KG"],
    price: ["Contact for Price"],
    desc:
      "Elaang Fish Feed 42% Protein, 6% Fat, Pellet Size 1mm. Feed For IMC, Pangasius, Roopchand, Tilapia, Catfish",
  },
  {
    category: "Feed",
    name: "Elaang Feed 28P2M",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/Elaang-Feed-lI.webp",
    size: ["25 KG"],
    price: ["Contact for Price"],
    desc:
      "Elaang Fish Feed 28% Protein, 3% Fat, Pellet Size 2mm. Feed For IMC, Pangasius, Roopchand, Tilapia, Catfish. ",
  },
   {
    category: "Feed",
    name: "Elaang Feed 24P3M",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/Elaang-Feed-lII.webp",
    size: ["25 KG"],
    price: ["Contact for Price"],
    desc:
      "Elaang Fish Feed 24% Protein, 3% Fat, Pellet Size 3mm. Feed For IMC, Pangasius, Roopchand, Tilapia, Catfish. ",
  },
  {
    category: "Feed",
    name: "Elaang Feed 20P4M",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/Elaang-Feed-lV.webp",
    size: ["25 KG"],
    price: ["Contact for Price"],
    desc:
      "Elaang Fish Feed 20% Protein, 4% Fat, Pellet Size 4mm. Feed For IMC, Pangasius, Roopchand, Tilapia, Catfish. ",
  },

 

]

export default function Shop() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [offers, setOffers] = useState({});

  const { cart, addToCart } = useCart();

  // ================= FETCH OFFERS =================
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

  const filteredData = data.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All" ? true : p.category === filter;

    return matchSearch && matchFilter;
  });

  const calculatePrice = (price, discount) => {
    const num = parseFloat(price);
    if (isNaN(num)) return price;

    if (!discount || discount <= 0) {
      return <span>₹{num.toFixed(2)}</span>;
    }

    const final = num - (num * discount) / 100;
   

    return (
      <>
        <span style={{ textDecoration: "line-through", color: "#888", marginRight: "8px" }}>
          ₹{num.toFixed(2)}
        </span>
        <span style={{ color: "green", fontWeight: "700" }}>
          ₹{final.toFixed(2)}
        </span>
      </>
    );
  };

  return (
    <div className="shop-product-page">
      <div className="container py-5">

        <h2 className="shop-main-title mt-4">
          Our <span>Products</span>
        </h2>

        <p className="shop-sub-text">
          Scientifically backed products for aquaculture
        </p>

        {/* SEARCH */}
        <div className="shop-top-bar">
          <div className="shop-search-box">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Search Products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="shop-filter-btns">
            <button onClick={() => setFilter("All")}>All</button>
            <button onClick={() => setFilter("Medicine")}>Medicine</button>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="row mt-4 g-4">
          {filteredData.map((p, i) => {
            const discount = offers[p.name] || 0;

            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                <div className="shop-product-card">

                  <div className="shop-card-top">
                    <div className="shop-category-label">{p.category}</div>

                    {discount > 0 && (
                      <div className="shop-offer-badge">
                        {discount}% OFF
                      </div>
                    )}
                  </div>

                  <img src={p.image} alt={p.name} />

                  <h5 className="mt-2">{p.name}</h5>

                  <p className="shop-desc">
                    {openIndex === i ? p.desc : p.desc.substring(0, 90) + "..."}
                  </p>

                  <button
                    className="shop-read-btn"
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                  >
                    {openIndex === i ? "Read Less" : "Read More"}
                  </button>

                  <p><b>Size:</b> {p.size.join(" | ")}</p>

                  <div className="shop-price">
                    <b>Price:</b>
                    {p.price.map((itemPrice, index) => (
                      <div key={index}>
                        {p.size[index]} :{" "}
                        {calculatePrice(itemPrice, discount)}
                      </div>
                    ))}
                  </div>

                  <button
                    className="shop-cart-btn"
                    onClick={() =>
                      addToCart({ product: p, selectedSizeIndex: 0 })
                    }
                    disabled={isInCart(p)}
                  >
                    {isInCart(p) ? "Added ✔" : "🛒 Add"}
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