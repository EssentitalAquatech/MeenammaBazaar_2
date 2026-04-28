


// // src/components/Footer.jsx

// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/EssentitalLogo.png";
// import {
//   FaFacebookF,
//   FaYoutube,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import "./Footer.css";

// const socials = [
//   { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
//   { icon: <FaYoutube />, url: "https://www.youtube.com/@essentialaquatech", label: "YouTube" },
//   { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/essential-aquatech-private-limited/", label: "LinkedIn" },
//   { icon: <FaInstagram />, url: "https://www.instagram.com/essentialaquatech?igsh=MW8wdDFtcXo3ODlmMQ==", label: "Instagram" },
//   { icon: <FaXTwitter />, url: "https://x.com", label: "X" },
// ];

// function Footer() {
//   return (
//     <footer className="ea-footer">
//       <div className="container">
//         <div className="row gy-4">

//           {/* Brand */}
//           <div className="col-12 col-md-6 col-lg-4">
//             <div className="ea-brand">
//               <img
//                 src={logo}
//                 alt="Minima Shop Logo"
//                 className="ea-logo-img"
//               />

//               <h3 className="ea-title">Meenamma Bazaar</h3>
//             </div>

//             <p className="ea-desc">
//               Trusted online store for quality fish feed, medicines and farming
//               essentials with fast delivery service.
//             </p>

//             <div className="ea-socials">
//               {socials.map((s) => (
//                 <a
//                   key={s.label}
//                   href={s.url}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="ea-social"
//                   aria-label={s.label}
//                 >
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="col-6 col-md-3 col-lg-2">
//             <h6 className="ea-heading">Navigation</h6>

//             <ul className="ea-links">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/login">Login</Link></li>
//               <li><Link to="/cart">Cart</Link></li>
//               <li><Link to="/blog">Blog</Link></li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div className="col-6 col-md-3 col-lg-2">
//             <h6 className="ea-heading">Product</h6>

//             <ul className="ea-links">
//               <li><Link to="/shop">Shop</Link></li>
//               <li><Link to="/medicines">Medicines</Link></li>
//                 <li><Link to="/fish-feed">Fish Feed</Link></li>
//                  <li><Link to="/water-testing">Water Testing</Link></li>
//                  <li><Link to="/pond-probiotics">Pond Probiotics</Link></li>
                 
//             </ul>
//           </div>

//           {/* Legal */}
//           <div className="col-6 col-md-3 col-lg-2">
//             <h6 className="ea-heading">Legal</h6>

//             <ul className="ea-links">
//               <li><Link to="/privacy-policy">Privacy Policy</Link></li>
//               <li><Link to="/return-policy">Return Policy</Link></li>
//                  <li><Link to="/adminDashboard">AdminDashboard</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="ea-bottom">
//           <p>©2026 Meenamma Bazaar — Powered by Essential Aquatech.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;











import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/EssentitalLogo.png";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const socials = [
  { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/@essentialaquatech", label: "YouTube" },
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/essential-aquatech-private-limited/", label: "LinkedIn" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/essentialaquatech?igsh=MW8wdDFtcXo3ODlmMQ==", label: "Instagram" },
  { icon: <FaXTwitter />, url: "https://x.com", label: "X" },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="ea-footer">
      <div className="container">
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="ea-brand">
              <img src={logo} alt="Logo" className="ea-logo-img" />
              <h3 className="ea-title">{t("footer1.brand")}</h3>
            </div>

            <p className="ea-desc">
              {t("footer1.desc")}
            </p>

            <div className="ea-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ea-social"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="ea-heading">{t("footer1.navigation")}</h6>
            <ul className="ea-links">
              <li><Link to="/">{t("footer1.home")}</Link></li>
              <li><Link to="/login">{t("footer1.login")}</Link></li>
              <li><Link to="/cart">{t("footer1.cart")}</Link></li>
              <li><Link to="/blog">{t("footer1.blog")}</Link></li>
            </ul>
          </div>

          {/* Product */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="ea-heading">{t("footer1.product")}</h6>
            <ul className="ea-links">
              <li><Link to="/shop">{t("footer1.shop")}</Link></li>
              <li><Link to="/medicines">{t("footer1.medicines")}</Link></li>
              <li><Link to="/fish-feed">{t("footer1.fish_feed")}</Link></li>
              <li><Link to="/water-testing">{t("footer1.water_testing")}</Link></li>
              <li><Link to="/pond-probiotics">{t("footer1.pond_probiotics")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="ea-heading">{t("footer1.legal")}</h6>
            <ul className="ea-links">
              <li><Link to="/privacy-policy">{t("footer1.privacy")}</Link></li>
              <li><Link to="/return-policy">{t("footer1.return")}</Link></li>
              <li><Link to="/adminDashboard">{t("footer1.admin")}</Link></li>
            </ul>
          </div>

        </div>

        <div className="ea-bottom">
          <p>{t("footer1.bottom")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;