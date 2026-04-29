import React, {
  useEffect,
  useState,
} from "react";
import { getMyOrders } from "../api";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (user?.phone) {
      getMyOrders(user.phone).then((res) =>
        setOrders(res.data)
      );
    }
  }, []);

  return (
    <div>
      <h2>Your Orders</h2>

      {orders.map((order) => (
        <div key={order._id}>
          <h4>Status:</h4>
          <p>{order.status}</p>

          {order.items.map((item, i) => (
            <p key={i}>
              {item.name} - {item.size}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;