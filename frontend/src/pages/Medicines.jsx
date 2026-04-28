import React, { useState } from "react";
import "./Medicines.css";
import { useCart } from "../components/CartContext";

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
];

export default function Medicines() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const { cart, addToCart } = useCart();

  const isInCart = (item) => {
    return cart.some((c) => c.product.name === item.name);
  };

  const filteredData = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="med-product-page">
      <div className="container py-5">

        {/* TITLE */}
        <h2 className="med-main-title mt-4">
          Our <span>Medicines</span>
        </h2>

        {/* SUB TEXT */}
        <p className="med-sub-text">
          Scientifically backed products for inland aquaculture.
        </p>

        {/* SEARCH */}
        <div className="med-top-bar">
          <div className="med-search-box">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Search Medicines"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="row mt-4 g-4">
          {filteredData.map((p, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <div className="med-product-card">

                <div className="med-category-label">
                  {p.category}
                </div>

                <img src={p.image} alt={p.name} />

                <h5 className="mt-2">{p.name}</h5>

                <p className="med-desc">
                  {openIndex === i
                    ? p.desc
                    : p.desc.substring(0, 90) + "..."}
                </p>

                <button
                  className="med-read-btn"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                >
                  {openIndex === i ? "Read Less" : "Read More"}
                </button>

                <p>
                  <b>Size:</b> {p.size.join(" | ")}
                </p>

                <p className="med-price">
                  <b>Price:</b> {p.price.join(" | Rs. ")}
                </p>

                {/* CART BUTTON */}
                <button
                  className="med-cart-btn"
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