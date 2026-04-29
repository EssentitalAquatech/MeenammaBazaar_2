
// import React, { useState } from "react";
// import "./Shop.css";
// import { useCart } from "../components/CartContext";


// const data = [
 
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
//     name: "PHYTO PRO FS",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/phyto-pro-1.jpg",
//     size: ["1 KG"],
//     price: ["1889.00"],
//     desc:
//       "Creates phytoplankton (green water) | Produces natural feed | Improves FCR | Enhances pond ecosystem",
//   },
//     {
//     category: "Medicine",
//     name: "ZEA G",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/ZEA-G-1.jpg",
//     size: ["10 KG"],
//     price: ["1317.50"],
//     desc:
//       "Removes toxic gases like ammonia & hydrogen sulfide | Improves pond bottom condition | Balances pH | Improves oxygen and immunity",
//   },
 

// ]












// export default function PondPreparation() {
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
//           Pond Preparation & Conditioning <span>Products</span>
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





import React, { useState, useEffect } from "react";
import "./Shop.css";
import { useCart } from "../components/CartContext";
import { getOffers } from "../api";

const data = [
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
    name: "ZEA G",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/ZEA-G-1.jpg",
    size: ["10 KG"],
    price: ["1317.50"],
    desc:
      "Removes toxic gases like ammonia & hydrogen sulfide | Improves pond bottom condition | Balances pH | Improves oxygen and immunity",
  },
];

export default function PondPreparation() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [offers, setOffers] = useState({});

  const { cart, addToCart } = useCart();

  // ================= OFFERS API =================
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

  // ================= UNIFIED PRICE SYSTEM =================
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
          Pond Preparation & Conditioning <span>Products</span>
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

          {filteredData.map((p, i) => {
            const discount = offers[p.name] || 0;

            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                <div className="shop-product-card">

                  {/* TOP BAR */}
                  <div className="shop-card-top">
                    <div className="shop-category-label">
                      {p.category}
                    </div>

                    {discount > 0 && (
                      <div className="shop-offer-badge">
                        {discount}% OFF
                      </div>
                    )}
                  </div>

                  {/* IMAGE */}
                  <img src={p.image} alt={p.name} />

                  {/* NAME */}
                  <h5 className="mt-2">{p.name}</h5>

                  {/* DESCRIPTION */}
                  <p className="shop-desc">
                    {openIndex === i
                      ? p.desc
                      : p.desc.substring(0, 90) + "..."}
                  </p>

                  {/* READ MORE */}
                  <button
                    className="shop-read-btn"
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                  >
                    {openIndex === i ? "Read Less" : "Read More"}
                  </button>

                  {/* SIZE */}
                  <p>
                    <b>Size:</b> {p.size.join(" | ")}
                  </p>

                  {/* PRICE (UNIFIED DESIGN FIXED) */}
                  <div className="shop-price">
                    <b>Price:</b>{" "}
                    {p.price.map((price, index) => (
                      <div key={index} style={{ marginTop: "5px" }}>
                        {p.size[index]} :{" "}
                        {calculatePrice(price, discount)}
                      </div>
                    ))}
                  </div>

                  {/* CART */}
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
            );
          })}

        </div>

      </div>
    </div>
  );
}