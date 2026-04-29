
// import React, { useState } from "react";
// import "./Shop.css";
// import { useCart } from "../components/CartContext";


// const data = [
 


//    {
//     category: "Medicine",
//     name: "AQUEAMINA",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2025/05/AQUEAMINA-1.jpg",
//     size: ["1KG", "10KG", "20KG"],
//     price: ["195.50", "1572.50", "2660.50"],
//     desc:
//       "Minerals & Micro Nutrients Promoter | Enriches Pond water's nutritional value | Promotes disease resistance | Helps grow phytoplankton and zooplankton | Improves FCR, increases growth and body weight, and enhances disease resistance | Reduces culture period through fast growth",
//   },
//     {
//     category: "Medicine",
//     name: "VITAMIN FS",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Viteamin-fs-1.jpg",
//     size: ["1 KG"],
//     price: ["331.50"],
//     desc:
//       "Vitamin & mineral supplement | Faster growth | Better digestion | Improves FCR",
//   },
//     {
//     category: "Medicine",
//     name: "LIV ZYM",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/liv-zym-1.jpg",
//     size: ["5 L"],
//     price: ["1062.50"],
//     desc:
//       "Treats liver disorders | Prevents liver damage from toxins | Improves digestion and appetite | Reduces stress | Improves FCR and body weight gain",
//   },
//    {
//     category: "Medicine",
//     name: "CALCI FISH",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Calci-Fish-1.jpg",
//     size: ["5 L"],
//     price: ["892.50"],
//     desc:
//       "Improves structural and bone strength | Builds healthy muscles | Reduces stress and improves immunity | Improves appetite and body weight gain",
//   },
//    {
//     category: "Medicine",
//     name: "DO OXY",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/do-oxy-1.jpg",
//     size: ["1 KG"],
//     price: ["1037.00"],
//     desc:
//       "Solves oxygen deficiency in high density fish culture | Maintains dissolved oxygen levels | Improves fish survival rate",
//   },
//     {
//     category: "Medicine",
//     name: "YEAST EA",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/YEASTEA-1.jpg",
//     size: ["1 KG"],
//     price: ["314.50"],
//     desc:
//       "Improves growth performance | Boosts immunity | Improves water quality | Reduces bacterial load",
//   },

// ]












// export default function Preventive() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const { cart, addToCart } = useCart();

//   const isInCart = (item) => {
//     return cart.some((c) => c.product.name === item.name);
//   };

//   const filteredData = data.filter((p) => {
//     const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
//     const matchFilter = filter === "All" ? true : p.category === filter;
//     return matchSearch && matchFilter;
//   });

//   return (
//     <div className="shop-product-page">
//       <div className="container py-5">

//         {/* TITLE */}
//         <h2 className="shop-main-title mt-4">
//           Pond Probiotics <span>Products</span>
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
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           {/* FILTER */}
//           {/* <div className="shop-filter-btns">
//             <button onClick={() => setFilter("All")}>All</button>
//             <button onClick={() => setFilter("Medicine")}>Medicine</button>
//             <button onClick={() => setFilter("Feed")}>Feed</button>
//           </div> */}

//         </div>

//         {/* PRODUCTS */}
//         <div className="row mt-4 g-4">
//           {filteredData.map((p, i) => (
//             <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
//               <div className="shop-product-card">

//                 {/* CATEGORY */}
//                 <div className="shop-category-label">
//                   {p.category}
//                 </div>

//                 {/* IMAGE */}
//                 <img src={p.image} alt={p.name} />

//                 {/* NAME */}
//                 <h5 className="mt-2">{p.name}</h5>

//                 {/* DESCRIPTION */}
//                 <p className="shop-desc">
//                   {openIndex === i
//                     ? p.desc
//                     : p.desc.substring(0, 90) + "..."}
//                 </p>

//                 {/* READ MORE */}
//                 <button
//                   className="shop-read-btn"
//                   onClick={() =>
//                     setOpenIndex(openIndex === i ? null : i)
//                   }
//                 >
//                   {openIndex === i ? "Read Less" : "Read More"}
//                 </button>

//                 {/* SIZE */}
//                 <p>
//                   <b>Size:</b> {p.size.join(" | ")}
//                 </p>

//                 {/* PRICE */}
//                 <p className="shop-price">
//                   <b>Price:</b> {p.price.join(" | Rs. ")}
//                 </p>

//                 {/* ADD TO CART */}
//                 <button
//                   className="shop-cart-btn"
//                   onClick={() =>
//                     addToCart({
//                       product: p,
//                       selectedSizeIndex: 0,
//                     })
//                   }
//                   disabled={isInCart(p)}
//                 >
//                   {isInCart(p) ? "Added ✔" : "🛒 Add"}
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
// import "./Shop.css";
// import { useCart } from "../components/CartContext";

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
//     name: "YEAST EA",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/YEASTEA-1.jpg",
//     size: ["1 KG"],
//     price: ["314.50"],
//     desc:
//       "Improves growth performance | Boosts immunity | Improves water quality | Reduces bacterial load",
//   },
// ];

// export default function  PondProbiotics() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [offers, setOffers] = useState({});

//   const { cart, addToCart } = useCart();

//   useEffect(() => {
//     const saved =
//       JSON.parse(localStorage.getItem("adminOffers")) || {};
//     setOffers(saved);
//   }, []);

//   const isInCart = (item) => {
//     return cart.some((c) => c.product.name === item.name);
//   };

//   const getDiscountedPrice = (price, productName) => {
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

//   return (
//     <div className="shop-product-page">
//       <div className="container py-5">

//         <h2 className="shop-main-title mt-4">
//           Pond Probiotics <span>Products</span>
//         </h2>

//         <p className="shop-sub-text">
//           Scientifically backed products for inland aquaculture.
//         </p>

//         {/* SEARCH */}
//         <div className="shop-top-bar">

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

//         </div>

//         {/* PRODUCTS */}
//         <div className="row mt-4 g-4">

//           {filteredData.map((p, i) => (
//             <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
//               <div className="shop-product-card">

//                 <div className="shop-category-label">
//                   {offers[p.name]
//                     ? `${offers[p.name]}% OFF`
//                     : p.category}
//                 </div>

//                 <img src={p.image} alt={p.name} />

//                 <h5 className="mt-2">{p.name}</h5>

//                 <p className="shop-desc">
//                   {openIndex === i
//                     ? p.desc
//                     : p.desc.substring(0, 90) + "..."}
//                 </p>

//                 <button
//                   className="shop-read-btn"
//                   onClick={() =>
//                     setOpenIndex(
//                       openIndex === i ? null : i
//                     )
//                   }
//                 >
//                   {openIndex === i
//                     ? "Read Less"
//                     : "Read More"}
//                 </button>

//                 <p>
//                   <b>Size:</b>{" "}
//                   {p.size.join(" | ")}
//                 </p>

//                 <p className="shop-price">
//                   <b>Price:</b>{" "}
//                   {p.price.map((item, index) => (
//                     <span key={index}>
//                       {getDiscountedPrice(
//                         item,
//                         p.name
//                       )}
//                       {index !==
//                         p.price.length - 1 &&
//                         " | "}
//                     </span>
//                   ))}
//                 </p>

//                 <button
//                   className="shop-cart-btn"
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
// import "./Shop.css";
// import { useCart } from "../components/CartContext";
// import { getOffers } from "../api"; // 👈 ADDED

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
//     name: "YEAST EA",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/YEASTEA-1.jpg",
//     size: ["1 KG"],
//     price: ["314.50"],
//     desc:
//       "Improves growth performance | Boosts immunity | Improves water quality | Reduces bacterial load",
//   },
// ];

// export default function PondProbiotics() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [search, setSearch] = useState("");
//   const [offers, setOffers] = useState({}); // 👈 API OFFERS

//   const { cart, addToCart } = useCart();

//   // ================= FETCH OFFERS (API) =================
//   const fetchOffers = async () => {
//     try {
//       const res = await getOffers();

//       const formatted = {};
//       res.data.forEach((item) => {
//         formatted[item.product] = item.discount;
//       });

//       setOffers(formatted);
//     } catch (err) {
//       console.log("Offer API Error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchOffers();
//   }, []);

//   const isInCart = (item) =>
//     cart.some((c) => c.product.name === item.name);

//   const filteredData = data.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const getDiscountedPrice = (price, productName) => {
//     const offer = offers[productName];

//     if (!offer) return <span>₹{price}</span>;

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

//   return (
//     <div className="shop-product-page">
//       <div className="container py-5">

//         <h2 className="shop-main-title mt-4">
//           Pond Probiotics <span>Products</span>
//         </h2>

//         <p className="shop-sub-text">
//           Scientifically backed products for inland aquaculture.
//         </p>

//         {/* SEARCH */}
//         <div className="shop-top-bar">
//           <div className="shop-search-box">
//             <i className="fa fa-search"></i>

//             <input
//               type="text"
//               placeholder="Search Products"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* PRODUCTS */}
//         <div className="row mt-4 g-4">

//           {filteredData.map((p, i) => {
//             const discount = offers[p.name] || 0;

//             return (
//               <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
//                 <div className="shop-product-card">

//                   <div className="shop-category-label">
//                     {offers[p.name]
//                       ? `${offers[p.name]}% OFF`
//                       : p.category}
//                   </div>

//                   <img src={p.image} alt={p.name} />

//                   <h5 className="mt-2">{p.name}</h5>

//                   <p className="shop-desc">
//                     {openIndex === i
//                       ? p.desc
//                       : p.desc.substring(0, 90) + "..."}
//                   </p>

//                   <button
//                     className="shop-read-btn"
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

//                   <div className="shop-price">
//                     <b>Price:</b>{" "}
//                     {p.price.map((item, index) => (
//                       <span key={index}>
//                         {p.size[index]} :{" "}
//                         {getDiscountedPrice(item, p.name)}
//                         {index !== p.price.length - 1 && " | "}
//                       </span>
//                     ))}
//                   </div>

//                   <button
//                     className="shop-cart-btn"
//                     onClick={() =>
//                       addToCart({
//                         product: p,
//                         selectedSizeIndex: 0,
//                       })
//                     }
//                     disabled={isInCart(p)}
//                   >
//                     {isInCart(p) ? "Added ✔" : "🛒 Add"}
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
    name: "YEAST EA",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/YEASTEA-1.jpg",
    size: ["1 KG"],
    price: ["314.50"],
    desc:
      "Improves growth performance | Boosts immunity | Improves water quality | Reduces bacterial load",
  },
];

export default function PondProbiotics() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
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

  const filteredData = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // ================= SAME STYLE PRICE (FIXED) =================
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
    <div className="shop-product-page">
      <div className="container py-5">

        <h2 className="shop-main-title mt-4">
          Pond Probiotics <span>Products</span>
        </h2>

        <p className="shop-sub-text">
          Scientifically backed products for inland aquaculture.
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
        </div>

        {/* PRODUCTS */}
        <div className="row mt-4 g-4">

          {filteredData.map((p, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <div className="shop-product-card">

                <div className="shop-category-label">
                  {offers[p.name]
                    ? `${offers[p.name]}% OFF`
                    : p.category}
                </div>

                <img src={p.image} alt={p.name} />

                <h5 className="mt-2">{p.name}</h5>

                <p className="shop-desc">
                  {openIndex === i
                    ? p.desc
                    : p.desc.substring(0, 90) + "..."}
                </p>

                <button
                  className="shop-read-btn"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                >
                  {openIndex === i ? "Read Less" : "Read More"}
                </button>

                <p>
                  <b>Size:</b> {p.size.join(" | ")}
                </p>

                {/* PRICE BLOCK FIXED (SAME AS TRENDING) */}
                <div className="shop-price">
                  <b>Price:</b>{" "}
                  {p.price.map((item, index) => (
                    <div key={index}>
                      {p.size[index]} :{" "}
                      {calculatePrice(item, offers[p.name])}
                    </div>
                  ))}
                </div>

                <button
                  className="shop-cart-btn"
                  onClick={() =>
                    addToCart({
                      product: p,
                      selectedSizeIndex: 0,
                    })
                  }
                  disabled={isInCart(p)}
                >
                  {isInCart(p) ? "Added ✔" : "🛒 Add"}
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
