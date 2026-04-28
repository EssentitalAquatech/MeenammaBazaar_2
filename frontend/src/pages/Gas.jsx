
// import React, { useState } from "react";
// import "./Shop.css";
// import { useCart } from "../components/CartContext";


// const data = [
 
//    {
//     category: "Medicine",
//     name: "BOTTOM SEAF",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Bottom-Seaf-1.jpg",
//     size: ["1 KG"],
//     price: ["1062.50"],
//     desc:
//       "Keep pond bottom healthy by treating sludge, removing ammonia, H2S, and other toxic gases | Reduce algal bloom and keep pond healthy | Improve beneficial bacteria | Reduce stress, improve immunity & appetite | Balance pH and dissolved oxygen | Improve natural feed and FCR",
//   },
//     {
//     category: "Medicine",
//     name: "CLEAR POND",
//     image:
//       "https://essentialaquatech.com/wp-content/uploads/2024/09/Clear-Pond.webp",
//     size: ["250mL", "1 L"],
//     price: ["382.50", "1232.50"],
//     desc:
//       "Absorbs ammonia, hydrogen sulphide and toxic gases | Reduces bacterial load | Removes bad odour | Improves ecosystem | Increases growth and immunity",
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












// export default function Gas() {
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
//          Sludge & Toxic Gas Control <span>Products</span>
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
    name: "ZEA G",
    image:
      "https://essentialaquatech.com/wp-content/uploads/2024/09/ZEA-G-1.jpg",
    size: ["10 KG"],
    price: ["1317.50"],
    desc:
      "Removes toxic gases like ammonia & hydrogen sulfide | Improves pond bottom condition | Balances pH | Improves oxygen and immunity",
  },
];

export default function Gas() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
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

  const getOffer = (productName) => {
    return Number(offers[productName.trim()]) || 0;
  };

  /* SAME WORKING OFFER LOGIC */
  const getDiscountedPrice = (price, productName) => {
    const offer = getOffer(productName);
    const basePrice = Number(price);

    if (!offer || offer <= 0) {
      return <>₹{basePrice.toFixed(2)}</>;
    }

    const finalPrice =
      basePrice - (basePrice * offer) / 100;

    return (
      <>
        <span className="old-price">
          ₹{basePrice.toFixed(2)}
        </span>{" "}
        <span className="new-price">
          ₹{finalPrice.toFixed(2)}
        </span>
      </>
    );
  };

  const filteredData = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop-product-page">
      <div className="container py-5">

        <h2 className="shop-main-title mt-4">
          Sludge & Toxic Gas Control
          <span> Products</span>
        </h2>

        <p className="shop-sub-text">
          Scientifically backed products for inland aquaculture.
        </p>

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

        <div className="row mt-4 g-4">
          {filteredData.map((p, i) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              key={i}
            >
              <div className="shop-product-card">

                {/* OFFER */}
                <div className="shop-category-label">
                  {getOffer(p.name) > 0
                    ? `${getOffer(p.name)}% OFF`
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
                    setOpenIndex(
                      openIndex === i ? null : i
                    )
                  }
                >
                  {openIndex === i
                    ? "Read Less"
                    : "Read More"}
                </button>

                <p>
                  <b>Size:</b>{" "}
                  {p.size.join(" | ")}
                </p>

                <p className="shop-price">
                  <b>Price:</b>{" "}
                  {p.price.map((item, index) => (
                    <span key={index}>
                      {getDiscountedPrice(
                        item,
                        p.name
                      )}
                      {index !==
                        p.price.length - 1 &&
                        " | "}
                    </span>
                  ))}
                </p>

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