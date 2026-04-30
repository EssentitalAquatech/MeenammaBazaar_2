





import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logoImage from "../assets/images/EssentitalLogo.png";
import { useCart } from "./CartContext";

const navItems = [
  { label: "Login", path: "/login" },
];

/* CATEGORY SEARCH DATA */
const categorySearch = [
  { name: "Preventive Solutions", path: "/pond-probiotics" },
  { name: "Disease Treatment", path: "/diseaseTreatment" },
  { name: "Water Quality Management", path: "/water-testing" },
  { name: "Oxygen & Emergency Care", path: "/oxygen" },
  { name: "Pond Preparation & Conditioning", path: "/pondPreparation" },
  { name: "Growth & Feed Supplements", path: "/growth" },
  { name: "Probiotics", path: "/probiotics" },
  { name: "Sludge & Toxic Gas Control", path: "/gas" },
  { name: "Water Treatment & Sanitizers", path: "/water-testing" },
  { name: "Plankton & Natural Feed Boosters", path: "/plankton" },
  { name: "Complete Pond Health Kit", path: "/complete" },
  { name: "Water Recovery & Stability Kit", path: "/water-testing" },
  { name: "Disease Control & Recovery Kit", path: "/recovery" },
  { name: "Growth & Performance Booster Kit", path: "/growth" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { cart } = useCart();
  const cartCount = cart.length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  /* SEARCH FILTER (DESKTOP ONLY) */
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData([]);
    } else {
      const result = categorySearch.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(result);
    }
  }, [search]);

  const handleSearchClick = () => {
    if (filteredData.length > 0) {
      navigate(filteredData[0].path);
      setSearch("");
      setFilteredData([]);
    }
  };

  const handleSelect = (path) => {
    navigate(path);
    setSearch("");
    setFilteredData([]);
  };

  return (
    <header className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo-section">
          <img src={logoImage} alt="logo" className="logo-img" />

          <span className="logo-text">
            Meenamma
            <span className="brand">Bazaar</span>
            <span className="brand-tagline">by Essential Aquatech</span>
          </span>
        </Link>

        {/* Desktop Search Box */}
        <div className="search-box" style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search products here.."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="search-btn" onClick={handleSearchClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {/* SEARCH RESULT */}
          {filteredData.length > 0 && (
            <div className="search-dropdown">
              {filteredData.map((item, index) => (
                <div
                  key={index}
                  className="search-item"
                  onClick={() => handleSelect(item.path)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.label === "Login" ? (
                <>
                  <i className="fa-solid fa-user login-icon"></i>
                  {item.label}
                </>
              ) : (
                item.label
              )}
            </Link>
          ))}

          {/* CART */}
          <Link to="/cart" className="nav-cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>

            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu (NO SEARCH HERE NOW) */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        {navItems.map((item, i) => (
          <Link
            key={item.path}
            to={item.path}
            className="mobile-link"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {item.label === "Login" ? (
              <>
                <i className="fa-solid fa-user login-icon"></i>
                {item.label}
              </>
            ) : (
              item.label
            )}
          </Link>
        ))}

        {/* CART */}
        <Link to="/cart" className="mobile-link">
          <i className="fa-solid fa-cart-shopping"></i> Cart

          {cartCount > 0 && (
            <span className="cart-badge mobile-badge">{cartCount}</span>
          )}
        </Link>

      </div>
    </header>
  );
}

export default Navbar;