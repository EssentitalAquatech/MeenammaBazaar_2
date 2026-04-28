
// import React, { useState } from "react";
// import "./Shop.css";
// import { useCart } from "../components/CartContext";


// const data = [
 
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
//     {
//     category: "Medicine",
//     name: "PREVENT 80",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/medisan-1.jpg",
//     size: ["0.5 L", "1 L", "5 L"],
//     price: ["586.50", "1011.50", "5519"],
//     desc:
//       "Controls bacterial & fungal infections | Kills viruses and harmful bacteria | Protects ecosystem | Prevents plankton bloom",
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
//     name: "ROT GUARD",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/rot-guard-1.jpg",
//     size: ["100 gm"],
//     price: ["357.00"],
//     desc:
//       "Controls rot diseases | Improves immunity | Reduces stress | Enhances appetite",
//   },

// ]












// export default function Recovery() {
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
//          Disease Control & Recovery Kit  <span>Products</span>
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

const data = [
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
    name: "ROT GUARD",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/rot-guard-1.jpg",
    size: ["100 gm"],
    price: ["357.00"],
    desc:
      "Controls rot diseases | Improves immunity | Reduces stress | Enhances appetite",
  },
];

export default function Recovery() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [offers, setOffers] = useState({});

  const { cart, addToCart } = useCart();

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("adminOffers")) || {};
    setOffers(saved);
  }, []);

  const isInCart = (item) => {
    return cart.some((c) => c.product.name === item.name);
  };

  const getDiscountedPrice = (price, productName) => {
    const offer = offers[productName];

    if (!offer) return `₹${price}`;

    const finalPrice =
      Number(price) - (Number(price) * offer) / 100;

    return (
      <>
        <span className="old-price">₹{price}</span>{" "}
        <span className="new-price">
          ₹{finalPrice.toFixed(2)}
        </span>
      </>
    );
  };

  const filteredData = data.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All"
        ? true
        : p.category === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="shop-product-page">
      <div className="container py-5">

        {/* TITLE */}
        <h2 className="shop-main-title mt-4">
          Disease Control & Recovery Kit{" "}
          <span>Products</span>
        </h2>

        {/* DESCRIPTION */}
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
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="row mt-4 g-4">
          {filteredData.map((p, i) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              key={i}
            >
              <div className="shop-product-card">

                {/* CATEGORY / OFFER */}
                <div className="shop-category-label">
                  {offers[p.name]
                    ? `${offers[p.name]}% OFF`
                    : p.category}
                </div>

                {/* IMAGE */}
                <img
                  src={p.image}
                  alt={p.name}
                />

                {/* NAME */}
                <h5 className="mt-2">
                  {p.name}
                </h5>

                {/* DESCRIPTION */}
                <p className="shop-desc">
                  {openIndex === i
                    ? p.desc
                    : p.desc.substring(0, 90) +
                      "..."}
                </p>

                {/* READ MORE */}
                <button
                  className="shop-read-btn"
                  onClick={() =>
                    setOpenIndex(
                      openIndex === i
                        ? null
                        : i
                    )
                  }
                >
                  {openIndex === i
                    ? "Read Less"
                    : "Read More"}
                </button>

                {/* SIZE */}
                <p>
                  <b>Size:</b>{" "}
                  {p.size.join(" | ")}
                </p>

                {/* PRICE */}
                <p className="shop-price">
                  <b>Price:</b>{" "}
                  {p.price.map(
                    (item, index) => (
                      <span key={index}>
                        {getDiscountedPrice(
                          item,
                          p.name
                        )}
                        {index !==
                          p.price.length -
                            1 && " | "}
                      </span>
                    )
                  )}
                </p>

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
                  {isInCart(p)
                    ? "Added ✔"
                    : "🛒 Add"}
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}