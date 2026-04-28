// import React, { useEffect, useRef } from "react";
// import "./TradingFooter.css";

// const items = [
//   {
//     icon: "bi bi-truck",
//     title: "Pan-India Delivery",
//     desc: "Free above ₹999",
//     anim: "from-left",
//   },
//   {
//     icon: "bi bi-patch-check-fill",
//     title: "100% Genuine",
//     desc: "From Essential Aquatech",
//     anim: "from-top",
//   },
//   {
//     icon: "bi bi-headset",
//     title: "Aqua Expert Support",
//     desc: "Mon–Sat, 8am–8pm",
//     anim: "from-bottom",
//   },
//   {
//     icon: "bi bi-award-fill",
//     title: "Lab-Tested Quality",
//     desc: "ISO certified",
//     anim: "from-right",
//   },
// ];

// const TradingFooter = () => {
//   const cardsRef = useRef([]);

//   useEffect(() => {
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

//     cardsRef.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="trading-footer container">
//       <div className="row g-4">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="col-12 col-sm-6 col-md-6 col-lg-3"
//           >
//             <div
//               ref={(el) => (cardsRef.current[index] = el)}
//               className={`trading-card d-flex align-items-center gap-3 ${item.anim}`}
//             >
//               <div className="icon-box">
//                 <i className={`${item.icon}`}></i>
//               </div>

//               <div>
//                 <h6 className="title mb-1">{item.title}</h6>
//                 <p className="desc mb-0">{item.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TradingFooter;












import React, { useEffect, useRef } from "react";
import "./TradingFooter.css";
import { useTranslation } from "react-i18next";

const items = [
  {
    icon: "bi bi-truck",
    titleKey: "footer.delivery.title",
    descKey: "footer.delivery.desc",
    anim: "from-left",
  },
  {
    icon: "bi bi-patch-check-fill",
    titleKey: "footer.genuine.title",
    descKey: "footer.genuine.desc",
    anim: "from-top",
  },
  {
    icon: "bi bi-headset",
    titleKey: "footer.support.title",
    descKey: "footer.support.desc",
    anim: "from-bottom",
  },
  {
    icon: "bi bi-award-fill",
    titleKey: "footer.quality.title",
    descKey: "footer.quality.desc",
    anim: "from-right",
  },
];

const TradingFooter = () => {
  const cardsRef = useRef([]);
  const { t } = useTranslation();

  useEffect(() => {
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

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="trading-footer container">
      <div className="row g-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-6 col-lg-3"
          >
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className={`trading-card d-flex align-items-center gap-3 ${item.anim}`}
            >
              <div className="icon-box">
                <i className={`${item.icon}`}></i>
              </div>

              <div>
                <h6 className="title mb-1">{t(item.titleKey)}</h6>
                <p className="desc mb-0">{t(item.descKey)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TradingFooter;