





// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Category.css";

// // images
// import img1 from "../assets/images/prevention.png";
// import img2 from "../assets/images/root.png";
// import img3 from "../assets/images/bottom.png";
// import img4 from "../assets/images/oxygen.png";
// import img5 from "../assets/images/preparation.png";
// import img6 from "../assets/images/prevention.png";
// import img7 from "../assets/images/bottom.png";
// import img8 from "../assets/images/bottom.png";
// import img9 from "../assets/images/bottom.png";
// import img10 from "../assets/images/preparation.png";
// import img11 from "../assets/images/complete.png";
// import img12 from "../assets/images/bottom.png";
// import img13 from "../assets/images/recovery.png";
// import img14 from "../assets/images/prevention.png";

// const categoryData = [
//   "Preventive Solutions",
//   "Disease Treatment",
//   "Water Quality Management",
//   "Oxygen & Emergency Care",
//   "Pond Preparation & Conditioning",
//   "Growth & Feed Supplements",
//   "Probiotics",
//   "Sludge & Toxic Gas Control",
//   "Water Treatment & Sanitizers",
//   "Plankton & Natural Feed Boosters",
//   "Complete Pond Health Kit",
//   "Water Recovery & Stability Kit",
//   "Disease Control & Recovery Kit",
//   "Growth & Performance Booster Kit"
// ];

// const images = [
//   img1, img2, img3, img4,
//   img5, img6, img7, img8,
//   img9, img10, img11, img12,
//   img13, img14
// ];

// const colors = [
//   "rgb(205 152 255)",
//   "#45c8f4",
//   "#8ef66c",
//   "#ecd75f",
//   "#2aeda9",
//   "#e1a050",
//   "#df4588",
//   "#4e6de8",
//   "#eb50ba",
//   "#55eeee",
//   "#df9342",
//   "#65d842",
//   "#e08340",
//   "#3ab3db",
// ];

// // slug generator
// const slugify = (text) =>
//   text.toLowerCase().replace(/\s+/g, "-");

// // routes mapping (FIRST 2 FIXED as you asked)
// const getPath = (item, index) => {
//   if (index === 0) return "/pond-probiotics";
//   if (index === 1) return "/diseaseTreatment";
//   if (index === 2) return "/water-testing";
//    if (index === 3) return "/oxygen";
//       if (index === 4) return "/pondPreparation";
//       if (index === 5) return "/growth";
//       if (index === 6) return "/probiotics";
//       if (index === 7) return "/gas";
//     if (index === 8) return "/water-testing";
//       if (index === 9) return "/plankton";
//       if (index === 10) return "/complete";
//      if (index === 11) return "/water-testing";
//         if (index === 12) return "/recovery";
//       if (index === 13) return "/growth";
//   return `/category/${slugify(item)}`;
// };

// function Category() {

//   useEffect(() => {
//     const items = document.querySelectorAll(".catItem");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     items.forEach((item) => observer.observe(item));
//   }, []);

//   const directions = ["left", "right", "top", "bottom"];

//   return (
//     <div className="catWrapper">

//       <div className="catHeader">
//         <h1 className="catTitle">
//           Shop by <span>Category</span>
//         </h1>

//         <p className="catPara">
//           Everything your pond needs — in one place
//         </p>

//         <div className="catHeaderRight">
//           <Link to="/shop" className="viewAllBtn">
//             View All
//           </Link>
//         </div>
//       </div>

//       <div className="catGrid">
//         {categoryData.map((item, index) => {
//           const direction = directions[index % 4];

//           return (
//             <Link
//               to={getPath(item, index)}
//               key={index}
//               className={`catItem ${direction}`}
//               style={{ textDecoration: "none" }}
//             >
//               <div
//                 className="catCircle"
//                 style={{ backgroundColor: colors[index % colors.length] }}
//               >
//                 <img src={images[index]} alt={item} />
//               </div>

//               <p className="catName">{item}</p>
//             </Link>
//           );
//         })}
//       </div>

//     </div>
//   );
// }

// export default Category;











import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Category.css";

// images
import img1 from "../assets/images/prevention.png";
import img2 from "../assets/images/root.png";
import img3 from "../assets/images/bottom.png";
import img4 from "../assets/images/oxygen.png";
import img5 from "../assets/images/preparation.png";
import img6 from "../assets/images/prevention.png";
import img7 from "../assets/images/bottom.png";
import img8 from "../assets/images/bottom.png";
import img9 from "../assets/images/bottom.png";
import img10 from "../assets/images/preparation.png";
import img11 from "../assets/images/complete.png";
import img12 from "../assets/images/bottom.png";
import img13 from "../assets/images/recovery.png";
import img14 from "../assets/images/prevention.png";

const categoryData = [
  "Preventive Solutions",
  "Disease Treatment",
  "Water Quality Management",
  "Oxygen & Emergency Care",
  "Pond Preparation & Conditioning",
  "Growth & Feed Supplements",
  "Probiotics",
  "Sludge & Toxic Gas Control",
  "Water Treatment & Sanitizers",
  "Plankton & Natural Feed Boosters",
  "Complete Pond Health Kit",
  "Water Recovery & Stability Kit",
  "Disease Control & Recovery Kit",
  "Growth & Performance Booster Kit"
];

const images = [
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12,
  img13, img14
];

const colors = [
  "rgb(205 152 255)",
  "#45c8f4",
  "#8ef66c",
  "#ecd75f",
  "#2aeda9",
  "#e1a050",
  "#df4588",
  "#4e6de8",
  "#eb50ba",
  "#55eeee",
  "#df9342",
  "#65d842",
  "#e08340",
  "#3ab3db",
];

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");

const getPath = (item, index) => {
  if (index === 0) return "/pond-probiotics";
  if (index === 1) return "/diseaseTreatment";
  if (index === 2) return "/water-testing";
  if (index === 3) return "/oxygen";
  if (index === 4) return "/pondPreparation";
  if (index === 5) return "/growth";
  if (index === 6) return "/probiotics";
  if (index === 7) return "/gas";
  if (index === 8) return "/water-testing";
  if (index === 9) return "/plankton";
  if (index === 10) return "/complete";
  if (index === 11) return "/water-testing";
  if (index === 12) return "/recovery";
  if (index === 13) return "/growth";
  return `/category/${slugify(item)}`;
};

function Category() {
  const { t } = useTranslation();

  useEffect(() => {
    const items = document.querySelectorAll(".catItem");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  const directions = ["left", "right", "top", "bottom"];

  return (
    <div className="catWrapper">

      <div className="catHeader">
        <h1 className="catTitle">
          {t("category.shop_by")} <span>{t("category.category")}</span>
        </h1>

        <p className="catPara">
          {t("category.subtitle")}
        </p>

        <div className="catHeaderRight">
          <Link to="/shop" className="viewAllBtn">
            {t("category.view_all")}
          </Link>
        </div>
      </div>

      <div className="catGrid">
        {categoryData.map((item, index) => {
          const direction = directions[index % 4];

          return (
            <Link
              to={getPath(item, index)}
              key={index}
              className={`catItem ${direction}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="catCircle"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <img src={images[index]} alt={item} />
              </div>

              <p className="catName">{t(`category.items.${index}`)}</p>
            </Link>
          );
        })}
      </div>

    </div>
  );
}

export default Category;