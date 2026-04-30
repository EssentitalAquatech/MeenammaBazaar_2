




import React, { useState } from "react";
import "./Feed.css";
import { useCart } from "../components/CartContext";

const data = [
 

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

export default function Feed() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const { cart, addToCart } = useCart();

  // check item already in cart
const isInCart = (item) => {
  return cart.some((c) => c.product.name === item.name);
};

  const filteredData = data.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" ? true : p.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="product-page">
      <div className="container py-5">

        {/* TITLE */}
        <h2 className="main-title mt-4">
          Fish <span>Feed</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="sub-text">
          Scientifically backed products for inland aquaculture.
        </p>

        {/* SEARCH + FILTER */}
        <div className="top-bar">

         
          <div className="feed-search-box">
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
              <div className="product-card">

                <div className="category-label">{p.category}</div>

                <img src={p.image} alt={p.name} />

                <h5 className="mt-2">{p.name}</h5>

                <p className="desc">
                  {openIndex === i
                    ? p.desc
                    : p.desc.substring(0, 90) + "..."}
                </p>

                <button
                  className="read-btn"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                >
                  {openIndex === i ? "Read Less" : "Read More"}
                </button>

                <p>
                  <b>Size:</b> {p.size.join(" | ")}
                </p>

                <p className="price">
                  <b>Price:</b> {p.price.join(" | Rs. ")}
                </p>

                {/* ADD TO CART BUTTON */}
                {/* <button
                  className="cart-btn"
                  onClick={() => addToCart(p)}
                  disabled={isInCart(p)}
                >
                  {isInCart(p) ? "Added ✔" : "🛒 Add"}
                </button> */}
                
<button
  className="cart-btn"
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