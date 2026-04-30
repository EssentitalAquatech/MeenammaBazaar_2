


// import React, { useEffect, useState } from "react";
// import {
//   getAllOrders,
//   updateOrderStatus,
// } from "../api";
// import "./Order.css";

// function Order() {
//   const [orders, setOrders] = useState([]);

//   const statuses = [
//     "Order Received",
//     "Factory Se Nikal Gaya",
//     "On The Way",
//     "Out For Delivery Today",
//     "Delivered",
//   ];

//   const loadOrders = async () => {
//     const res = await getAllOrders();
//     setOrders(res.data);
//   };

//   useEffect(() => {
//     loadOrders();
//   }, []);

//   const changeStatus = async (id, value) => {
//     await updateOrderStatus(id, value);
//     loadOrders();
//   };

//   return (
//     <div className="adminOrdersPage">
//       <h1>All Orders</h1>

//       <div className="ordersGrid">
//         {orders.map((order) => (
//           <div key={order._id} className="orderCard">

//             <h3>{order.customer.name}</h3>
//             <p>{order.customer.phone}</p>
//             <p>{order.customer.address}</p>

//             <hr />

//             {order.items.map((item, i) => (
//               <div key={i}>
//                 <p>{item.name}</p>
//                 <p>{item.size}</p>
//                 <p>₹{item.price}</p>
//               </div>
//             ))}

//             <hr />

//             <p>Total ₹{order.total}</p>

//             <select
//               value={order.status}
//               onChange={(e) =>
//                 changeStatus(
//                   order._id,
//                   e.target.value
//                 )
//               }
//             >
//               {statuses.map((s, i) => (
//                 <option key={i}>
//                   {s}
//                 </option>
//               ))}
//             </select>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Order;










import React, { useEffect, useState } from "react";
import { getAllOrders, updateOrderStatus } from "../api";
import "./Order.css";

function Order() {
  const [orders, setOrders] = useState([]);

const statuses = [
  "Order Placed",
  "Processing at Warehouse",
  "Shipped from Warehouse",
  "Out for Delivery",
  "Delivered Successfully",
];

  const loadOrders = async () => {
    const res = await getAllOrders();
    setOrders(res.data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const changeStatus = async (id, value) => {
    await updateOrderStatus(id, value);
    loadOrders();
  };

  return (
    <div className="orders-page">

      <h1 className="orders-title">📦 All Orders Dashboard</h1>

      <div className="orders-grid">

        {orders.map((order) => (
          <div key={order._id} className="order-card">

            {/* CUSTOMER */}
            <div className="customer-box">
              <h3>{order.customer.name}</h3>
              <p>📞 {order.customer.phone}</p>
              <p>📍 {order.customer.address}</p>
            </div>

            <div className="divider"></div>

            {/* ITEMS */}
            <div className="items-box">
              {order.items.map((item, i) => (
                <div key={i} className="item-row">
                  <span>{item.name}</span>
                  <span>{item.size}</span>
                  <span className="price">₹{item.price}</span>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            {/* TOTAL */}
            <div className="total-box">
              <strong>Total:</strong>
              <span>₹{order.total}</span>
            </div>

            {/* STATUS */}
            <select
              className="status-select"
              value={order.status}
              onChange={(e) => changeStatus(order._id, e.target.value)}
            >
              {statuses.map((s, i) => (
                <option key={i}>{s}</option>
              ))}
            </select>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Order;