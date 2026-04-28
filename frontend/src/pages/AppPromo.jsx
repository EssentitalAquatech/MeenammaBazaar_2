// import React from "react";
// import app from "../assets/images/scanner.jpeg";
// import "./AppPromo.css";

// const AppPromo = () => {
//   return (
//     <section className="container py-5">
//       <div className="app-promo-wrapper row align-items-center position-relative overflow-hidden">

//         {/* background glow circles */}
//         <div className="glow-circle circle-1"></div>
//         <div className="glow-circle circle-2"></div>

//         {/* LEFT CONTENT */}
//         <div className="col-md-6 text-white position-relative z-2">
          
//           <div className="badge-custom mb-3">
//             📱 Meenamma WhatsApp Chat Bot
//           </div>

//           <h2 className="fw-bold display-6">
//             Manage your pond from your <span className="text-warning">pocket</span>
//           </h2>

//           <p className="mt-3 fs-5 text-light opacity-75">
//            Grow smarter with Meenamma Chat Bot – your all-in-one solution for fish farming, pond care, and aquaculture insights. Ask anything, get instant answers
//           </p>

//           <ul className="mt-4 list-unstyled text-light">
//             <li>✓  Communicate with Meenamma Chat Bot in any language</li>
// <li>✓ Receive accurate answers and the best possible solutions</li>
// <li>✓ Available 24×7 – talk anytime, from anywhere</li>
//           </ul>

//           <div className="d-flex flex-wrap gap-3 mt-4">
//            <a href="https://wa.me/919046226703" target="_blank" rel="noopener noreferrer">
//   <button className="btn btn-light fw-semibold px-4 py-2 shadow">
//     Click & Chat Instantly
//   </button>
// </a>
//             {/* <button className="btn btn-light fw-semibold px-4 py-2 shadow">
//               App Store
//             </button> */}
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="col-md-6 text-center position-relative z-2 mt-4 mt-md-0">
//           <img
//             src={app}
//             alt="App Preview"
//             className="img-fluid app-image"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppPromo;









import React from "react";
import app from "../assets/images/scanner.jpeg";
import "./AppPromo.css";
import { useTranslation } from "react-i18next";

const AppPromo = () => {
  const { t } = useTranslation();

  return (
    <section className="container py-5">
      <div className="app-promo-wrapper row align-items-center position-relative overflow-hidden">

        {/* background glow circles */}
        <div className="glow-circle circle-1"></div>
        <div className="glow-circle circle-2"></div>

        {/* LEFT CONTENT */}
        <div className="col-md-6 text-white position-relative z-2">
          
          <div className="badge-custom mb-3">
            📱 {t("app.badge")}
          </div>

          <h2 className="fw-bold display-6">
            {t("app.title1")} <span className="text-warning">{t("app.highlight")}</span>
          </h2>

          <p className="mt-3 fs-5 text-light opacity-75">
            {t("app.desc")}
          </p>

          <ul className="mt-4 list-unstyled text-light">
            <li>✓ {t("app.point1")}</li>
            <li>✓ {t("app.point2")}</li>
            <li>✓ {t("app.point3")}</li>
          </ul>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <a href="https://wa.me/919046226703" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-light fw-semibold px-4 py-2 shadow">
                {t("app.button")}
              </button>
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="col-md-6 text-center position-relative z-2 mt-4 mt-md-0">
          <img
            src={app}
            alt="App Preview"
            className="img-fluid app-image"
          />
        </div>

      </div>
    </section>
  );
};

export default AppPromo;