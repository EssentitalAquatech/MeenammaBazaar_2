import React from "react";
import "./AdminNavbar.css";

const AdminNavbar = ({ setActiveTab }) => {
  return (
    <nav className="admin-navbar">

      <div className="admin-navbar-left">
        <h2 className="admin-navbar-title">Welcome Admin</h2>
      </div>

      <div className="admin-navbar-right">

        <button
          className="admin-navbar-btn offer-btn"
          onClick={() => setActiveTab("offer")}
        >
          Offer
        </button>

        <button
          className="admin-navbar-btn order-btn"
          onClick={() => setActiveTab("order")}
        >
          Order
        </button>

        <button onClick={() => setActiveTab("contact")}>
  Contact
</button>

      </div>

    </nav>
  );
};

export default AdminNavbar;