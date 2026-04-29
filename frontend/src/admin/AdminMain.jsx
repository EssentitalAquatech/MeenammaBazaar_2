// import React, { useState } from "react";
// import AdminNavbar from "./AdminNavbar";
// import Offer from "./Offer";
// import Order from "./Order";


// function AdminMain() {
//   const [activeTab, setActiveTab] = useState("offer");

//   return (
//     <>
//       <AdminNavbar setActiveTab={setActiveTab} />

//       <div className="admin-content">
//         {activeTab === "offer" && <Offer />}
//         {activeTab === "order" && <Order />}
         
//       </div>
//     </>
//   );
// }

// export default AdminMain;









import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Offer from "./Offer";
import Order from "./Order";
import ContactMessages from "./ContactMessages"; // ✅ NEW

function AdminMain() {
  const [activeTab, setActiveTab] = useState("offer");

  return (
    <>
      <AdminNavbar setActiveTab={setActiveTab} />

      <div className="admin-content">
        {activeTab === "offer" && <Offer />}
        {activeTab === "order" && <Order />}

        {/* ✅ NEW CONTACT TAB */}
        {activeTab === "contact" && <ContactMessages />}
      </div>
    </>
  );
}

export default AdminMain;