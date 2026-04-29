


// import React, { useState, useEffect } from "react";
// import "./AdminDashboard.css";

// /* ALL PRODUCTS DATA */
// const products = [
//   { name: "AQUEAMINA", price: "1KG - ₹195.50 | 10KG - ₹1572.50 | 20KG - ₹2660.50" },
//   { name: "BOTTOM SEAF", price: "1KG - ₹1062.50" },
//   { name: "CALCI FISH", price: "5L - ₹892.50" },
//   { name: "CLEAR POND", price: "250mL - ₹382.50 | 1L - ₹1232.50" },
//   { name: "DO OXY", price: "1KG - ₹1037.00" },
//   { name: "EAZY CHUN", price: "1KG - ₹233.75" },
//   { name: "LIV ZYM", price: "5L - ₹1062.50" },
//   { name: "MEDISAN", price: "250mL - ₹331.50 | 1L - ₹892.50" },
//   { name: "PHYTO PRO FS", price: "1KG - ₹1889.00" },
//   { name: "PREVENT 80", price: "0.5L - ₹586.50 | 1L - ₹1011.50 | 5L - ₹5519" },
//   { name: "RENO FAST", price: "250mL - ₹722.50 | 1L - ₹2889.00" },
//   { name: "ROT GUARD", price: "100gm - ₹357.00" },
//   { name: "SANI FISH", price: "250mL - ₹408.00 | 1L - ₹1309.00" },
//   { name: "VITAMIN FS", price: "1KG - ₹331.50" },
//   { name: "WATER SOFT", price: "0.5KG - ₹297.50 | 5KG - ₹2389.00" },
//   { name: "YEAST EA", price: "1KG - ₹314.50" },
//   { name: "ZEA G", price: "10KG - ₹1317.50" },

//   { name: "Elaang Feed 42P1M", price: "25KG - Contact for Price" },
//   { name: "Elaang Feed 28P2M", price: "25KG - Contact for Price" },
//   { name: "Elaang Feed 24P3M", price: "25KG - Contact for Price" },
//   { name: "Elaang Feed 20P4M", price: "25KG - Contact for Price" },
// ];

// export default function Offer() {
//   const [selectedProduct, setSelectedProduct] = useState("");
//   const [discount, setDiscount] = useState("");
//   const [offers, setOffers] = useState({});

//   useEffect(() => {
//     const saved =
//       JSON.parse(localStorage.getItem("adminOffers")) || {};
//     setOffers(saved);
//   }, []);

//   const saveOffer = () => {
//     if (!selectedProduct || discount === "") {
//       alert("Please select product and enter offer");
//       return;
//     }

//     const newOffers = {
//       ...offers,
//       [selectedProduct]: Number(discount),
//     };

//     localStorage.setItem(
//       "adminOffers",
//       JSON.stringify(newOffers)
//     );

//     setOffers(newOffers);
//     setDiscount("");

//     alert("Offer Saved Successfully ✅");
//   };

//   const deleteOffer = (product) => {
//     const updated = { ...offers };

//     delete updated[product];

//     localStorage.setItem(
//       "adminOffers",
//       JSON.stringify(updated)
//     );

//     setOffers(updated);
//   };

//   return (
//     <div className="admin-page">
//       <div className="admin-box">

//         <h2 className="admin-title">
//           Admin Offer Dashboard
//         </h2>

//         {/* SELECT PRODUCT */}
//         <label className="admin-label">
//           Select Product
//         </label>

//         <select
//           className="admin-input"
//           value={selectedProduct}
//           onChange={(e) =>
//             setSelectedProduct(e.target.value)
//           }
//         >
//           <option value="">
//             -- Select Product --
//           </option>

//           {products.map((item, index) => (
//             <option key={index} value={item.name}>
//               {item.name} ({item.price})
//             </option>
//           ))}
//         </select>

//         {/* OFFER INPUT */}
//         <label className="admin-label">
//           Discount %
//         </label>

//         <input
//           type="number"
//           placeholder="Enter Offer %"
//           className="admin-input"
//           value={discount}
//           onChange={(e) =>
//             setDiscount(e.target.value)
//           }
//         />

//         {/* BUTTON */}
//         <button
//           className="admin-btn"
//           onClick={saveOffer}
//         >
//           Save Offer
//         </button>

//         {/* SAVED OFFERS */}
//         <div className="offer-list">

//           <h4>Saved Offers</h4>

//           {Object.keys(offers).length === 0 && (
//             <p>No Offer Added</p>
//           )}

//           {Object.entries(offers).map(
//             ([product, value], i) => (
//               <div
//                 className="offer-item"
//                 key={i}
//               >
//                 <span>
//                   {product} - {value}% OFF
//                 </span>

//                 <button
//                   className="delete-btn"
//                   onClick={() =>
//                     deleteOffer(product)
//                   }
//                 >
//                   Delete
//                 </button>
//               </div>
//             )
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }





















import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import { getOffers, createOffer, deleteOffer } from "../api";

const products = [
  { name: "AQUEAMINA", price: "1KG - ₹195.50 | 10KG - ₹1572.50 | 20KG - ₹2660.50" },
  { name: "BOTTOM SEAF", price: "1KG - ₹1062.50" },
  { name: "CALCI FISH", price: "5L - ₹892.50" },
  { name: "CLEAR POND", price: "250mL - ₹382.50 | 1L - ₹1232.50" },
  { name: "DO OXY", price: "1KG - ₹1037.00" },
  { name: "EAZY CHUN", price: "1KG - ₹233.75" },
  { name: "LIV ZYM", price: "5L - ₹1062.50" },
  { name: "MEDISAN", price: "250mL - ₹331.50 | 1L - ₹892.50" },
  { name: "PHYTO PRO FS", price: "1KG - ₹1889.00" },
  { name: "PREVENT 80", price: "0.5L - ₹586.50 | 1L - ₹1011.50 | 5L - ₹5519" },
  { name: "RENO FAST", price: "250mL - ₹722.50 | 1L - ₹2889.00" },
  { name: "ROT GUARD", price: "100gm - ₹357.00" },
  { name: "SANI FISH", price: "250mL - ₹408.00 | 1L - ₹1309.00" },
  { name: "VITAMIN FS", price: "1KG - ₹331.50" },
  { name: "WATER SOFT", price: "0.5KG - ₹297.50 | 5KG - ₹2389.00" },
  { name: "YEAST EA", price: "1KG - ₹314.50" },
  { name: "ZEA G", price: "10KG - ₹1317.50" },

  { name: "Elaang Feed 42P1M", price: "25KG - Contact for Price" },
  { name: "Elaang Feed 28P2M", price: "25KG - Contact for Price" },
  { name: "Elaang Feed 24P3M", price: "25KG - Contact for Price" },
  { name: "Elaang Feed 20P4M", price: "25KG - Contact for Price" },
];

export default function Offer() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [discount, setDiscount] = useState("");
  const [offers, setOffers] = useState({});

  // ================= FETCH =================
  const fetchOffers = async () => {
    try {
      const res = await getOffers();

      const map = {};
      res.data.forEach((o) => {
        map[o.product] = o.discount;
      });

      setOffers(map);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  // ================= SAVE =================
  const saveOffer = async () => {
    if (!selectedProduct || !discount) {
      alert("Fill all fields");
      return;
    }

    await createOffer({
      product: selectedProduct,
      discount: Number(discount),
    });

    setSelectedProduct("");
    setDiscount("");
    fetchOffers();
  };

  // ================= DELETE =================
  const removeOffer = async (product) => {
    await deleteOffer(product);
    fetchOffers();
  };

  return (
    <div className="admin-page">
      <div className="admin-box">

        <h2>Admin Offer Dashboard</h2>

        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="admin-input"
        >
          <option value="">Select Product</option>
          {products.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="Discount %"
          className="admin-input"
        />

        <button className="admin-btn" onClick={saveOffer}>
          Save Offer
        </button>

        <div className="offer-list">
          {Object.entries(offers).map(([p, d]) => (
            <div key={p} className="offer-item">
              <span>{p} - {d}% OFF</span>

              <button onClick={() => removeOffer(p)}>
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}