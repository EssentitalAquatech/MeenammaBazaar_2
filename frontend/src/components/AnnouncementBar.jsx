// // AnnouncementBar.jsx

// import React from "react";
// import { Truck, ShieldCheck, Phone } from "lucide-react";
// import "./AnnouncementBar.css";

// const items = [
//   { icon: Truck, text: "Free delivery on orders above ₹999" },
//   { icon: ShieldCheck, text: "100% genuine products from Essential Aquatech" },
//   { icon: Phone, text: "Aqua expert helpline: 1800-123-FISH" },
//   { icon: Truck, text: "COD available across India" },
// ];

// function AnnouncementBar() {
//   return (
//     <>
//       <div className="announcement-space"></div>

//       <div className="announcement-bar container-fluid px-0">
//         <div className="marquee-wrapper">
//           <div className="marquee-content">
//             {[...items, ...items, ...items].map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <span className="announcement-item" key={index}>
//                   <Icon className="announcement-icon" />
//                   {item.text}
//                 </span>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AnnouncementBar;









import React from "react";
import { Truck, ShieldCheck, Phone } from "lucide-react";
import "./AnnouncementBar.css";
import { useTranslation } from "react-i18next";

const AnnouncementBar = () => {
  const { t } = useTranslation();

  const items = [
    { icon: Truck, textKey: "announcement.delivery" },
    { icon: ShieldCheck, textKey: "announcement.genuine" },
    { icon: Phone, textKey: "announcement.helpline" },
    { icon: Truck, textKey: "announcement.cod" },
  ];

  return (
    <>
      <div className="announcement-space"></div>

      <div className="announcement-bar container-fluid px-0">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...items, ...items, ...items].map((item, index) => {
              const Icon = item.icon;

              return (
                <span className="announcement-item" key={index}>
                  <Icon className="announcement-icon" />
                  {t(item.textKey)}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementBar;