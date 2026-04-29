import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Offer from "./Offer";
import Order from "./Order";

function AdminMain() {
  const [activeTab, setActiveTab] = useState("offer");

  return (
    <>
      <AdminNavbar setActiveTab={setActiveTab} />

      <div className="admin-content">
        {activeTab === "offer" && <Offer />}
        {activeTab === "order" && <Order />}
      </div>
    </>
  );
}

export default AdminMain;