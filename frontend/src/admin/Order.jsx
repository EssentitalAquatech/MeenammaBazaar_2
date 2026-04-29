// import React, { useEffect, useState } from "react";
// import {
//   getAllOrders,
//   updateOrderStatus,
// } from "../api";
// import "./Order.css";

// function Order() {
//   const [orders, setOrders] = useState([]);

//   const loadOrders = async () => {
//     try {
//       const res = await getAllOrders();
//       setOrders(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     loadOrders();
//   }, []);

//   const changeStatus = async (id, current) => {
//     const next =
//       current === "Pending"
//         ? "Delivered"
//         : "Pending";

//     await updateOrderStatus(id, next);
//     loadOrders();
//   };

//   return (
//     <div className="adminOrdersPage">

//       <h1>All Orders</h1>

//       {orders.length === 0 ? (
//         <p>No Orders Yet</p>
//       ) : (
//         <div className="ordersGrid">

//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="orderCard"
//             >

//               <h3>
//                 {order.customer.name}
//               </h3>

//               <p>
//                 📞 {order.customer.phone}
//               </p>

//               <p>
//                 📍 {order.customer.address}
//               </p>

//               <hr />

//               <h4>Items:</h4>

//               {order.items.map(
//                 (item, index) => (
//                   <div
//                     key={index}
//                     className="itemBox"
//                   >
//                     <p>
//                       {item.name}
//                     </p>

//                     <p>
//                       {item.size}
//                     </p>

//                     <p>
//                       ₹{item.price}
//                     </p>
//                   </div>
//                 )
//               )}

//               <hr />

//               <p>
//                 💰 Total:
//                 ₹{order.total}
//               </p>

//               <p>
//                 📅 {order.date}
//               </p>

//               <button
//                 className={
//                   order.status ===
//                   "Pending"
//                     ? "pendingBtn"
//                     : "doneBtn"
//                 }
//                 onClick={() =>
//                   changeStatus(
//                     order._id,
//                     order.status
//                   )
//                 }
//               >
//                 {order.status}
//               </button>

//             </div>
//           ))}

//         </div>
//       )}
//     </div>
//   );
// }

// export default Order;










import React, { useEffect, useState } from "react";
import {
  getAllOrders,
  updateOrderStatus,
} from "../api";
import "./Order.css";

function Order() {
  const [orders, setOrders] = useState([]);

  const statuses = [
    "Order Received",
    "Factory Se Nikal Gaya",
    "On The Way",
    "Out For Delivery Today",
    "Delivered",
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
    <div className="adminOrdersPage">
      <h1>All Orders</h1>

      <div className="ordersGrid">
        {orders.map((order) => (
          <div key={order._id} className="orderCard">

            <h3>{order.customer.name}</h3>
            <p>{order.customer.phone}</p>
            <p>{order.customer.address}</p>

            <hr />

            {order.items.map((item, i) => (
              <div key={i}>
                <p>{item.name}</p>
                <p>{item.size}</p>
                <p>₹{item.price}</p>
              </div>
            ))}

            <hr />

            <p>Total ₹{order.total}</p>

            <select
              value={order.status}
              onChange={(e) =>
                changeStatus(
                  order._id,
                  e.target.value
                )
              }
            >
              {statuses.map((s, i) => (
                <option key={i}>
                  {s}
                </option>
              ))}
            </select>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;