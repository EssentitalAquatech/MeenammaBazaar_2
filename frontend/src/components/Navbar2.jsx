



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Navbar2.css";

const menuItems = [
  { key: "nav.all_categories", path: "/" },
  { key: "nav.pond_probiotics", path: "/pond-probiotics" },
  { key: "nav.fish_feed", path: "/fish-feed" },
  { key: "nav.water_testing", path: "/water-testing" },
  { key: "nav.medicines", path: "/medicines" },
  { key: "nav.kit", path: "/kit" },
  { key: "nav.meenamma_community", path: "/blogs" },

  // ✅ NEW CONTACT BUTTON
  { key: "nav.contact_us", path: "/contact" },
  { key: "nav.bulk_order", path: "/contact" },
];

function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="navbar2">
      <div className="navbar2-container">

        {/* LEFT MENU */}
        <div className="navbar2-links">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "navbar2-link active" : "navbar2-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {t(item.key)}
            </NavLink>
          ))}
        </div>

        {/* LANGUAGE DROPDOWN */}
        <div className="navbar2-lang">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="lang-select"
            value={i18n.language}
          >
            <option value="en">🇬🇧 English</option>
            <option value="hi">🇮🇳 Hindi</option>
            <option value="bn">🇧🇩 Bengali</option>
            <option value="as">🇮🇳 Assamese</option>
          </select>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar2-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`navbar2-mobile ${menuOpen ? "show" : ""}`}>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "navbar2-mobile-link active"
                : "navbar2-mobile-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t(item.key)}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export default Navbar2;

