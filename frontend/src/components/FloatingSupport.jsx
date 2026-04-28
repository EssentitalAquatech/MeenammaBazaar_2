import React, { useState } from "react";
import "./FloatingSupport.css";
import { FaHeadphones, FaTimes, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingSupport = () => {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "919046226703";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleMissedCall = () => {
    window.location.href = "tel:18001234567";
  };

  return (
    <div className="floating-wrapper">

      {/* Menu */}
      {open && (
        <div className="floating-menu">
          <button className="menu-item call" onClick={handleMissedCall}>
            <FaPhoneAlt /> Missed Call
          </button>

          <button className="menu-item whatsapp" onClick={openWhatsApp}>
            <FaWhatsapp /> Chat with Meenamma
          </button>
        </div>
      )}

      {/* Fixed Floating Button */}
      <button
        className={`floating-btn ${open ? "no-float" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes size={22} /> : <FaHeadphones size={22} />}
      </button>

    </div>
  );
};

export default FloatingSupport;