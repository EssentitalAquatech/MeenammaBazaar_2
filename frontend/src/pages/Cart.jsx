



import React, { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    setSelectedSizes(
      cart.map((item) => item.selectedSizeIndex || 0)
    );
  }, [cart]);

  const handleSizeChange = (index, sizeIndex) => {
    const updated = [...selectedSizes];
    updated[index] = sizeIndex;
    setSelectedSizes(updated);
  };

  const getTotal = () => {
    return cart.reduce((total, item, index) => {
      const price = parseFloat(
        item.product.price[selectedSizes[index]]
      );
      return total + (isNaN(price) ? 0 : price);
    }, 0);
  };

  const handleInput = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const placeFinalOrder = () => {
    if (
      !customer.name ||
      !customer.phone ||
      !customer.address
    ) {
      alert("Please fill all details");
      return;
    }

    const orderData = {
      customer,
      items: cart.map((item, index) => ({
        name: item.product.name,
        type: item.product.category,
        size: item.product.size[selectedSizes[index]],
        price:
          item.product.price[selectedSizes[index]],
      })),
      total: getTotal().toFixed(2),
      date: new Date().toLocaleString(),
    };

    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    oldOrders.push(orderData);

    localStorage.setItem(
      "orders",
      JSON.stringify(oldOrders)
    );

    setSuccessMsg("🎉 Order Placed Successfully!");
    setShowForm(false);

    setCustomer({
      name: "",
      phone: "",
      address: "",
    });

    clearCart();
  };

  return (
    <div className="mycart-wrapper-page">

      <div
        className={
          showForm
            ? "mycart-main-container blur-page"
            : "mycart-main-container"
        }
      >
        <h2 className="mycart-main-title">
          Your Cart 🛒
        </h2>

        {cart.length === 0 ? (
          <p className="mycart-empty-text">
            No items in cart
          </p>
        ) : (
          <>
            <div className="mycart-grid-box">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="mycart-product-card"
                >
                  <div className="mycart-image-box">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="mycart-product-image"
                    />
                  </div>

                  <div className="mycart-details-box">
                    <h3 className="mycart-product-name">
                      {item.product.name}
                    </h3>

                    <p className="mycart-info-text">
                      <span>Type:</span>{" "}
                      {item.product.category}
                    </p>

                    <p className="mycart-info-text">
                      <span>Select Size:</span>
                    </p>

                    <select
                      className="mycart-size-dropdown"
                      value={selectedSizes[index]}
                      onChange={(e) =>
                        handleSizeChange(
                          index,
                          Number(e.target.value)
                        )
                      }
                    >
                      {item.product.size.map(
                        (size, i) => (
                          <option
                            key={i}
                            value={i}
                          >
                            {size} - ₹
                            {
                              item.product.price[
                                i
                              ]
                            }
                          </option>
                        )
                      )}
                    </select>

                    <p className="mycart-price-text">
                      ₹
                      {
                        item.product.price[
                          selectedSizes[index]
                        ]
                      }
                    </p>

                    <button
                      className="mycart-remove-btn"
                      onClick={() =>
                        removeFromCart(
                          item.product.name
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mycart-summary-box">
              <h3 className="mycart-total-price">
                Total: ₹{" "}
                {getTotal().toFixed(2)}
              </h3>

              <button
                className="mycart-order-btn"
                onClick={() =>
                  setShowForm(true)
                }
              >
                Place Your Order
              </button>

              {successMsg && (
                <p className="mycart-success-msg">
                  {successMsg}
                </p>
              )}
            </div>
          </>
        )}
      </div>

      {/* POPUP FORM */}
      {showForm && (
        <div className="mycart-popup-overlay">
          <div className="mycart-order-form">

            <h3>Enter Delivery Details</h3>

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={customer.name}
              onChange={handleInput}
            />

            <input
              type="number"
              name="phone"
              placeholder="Enter Your Phone Number"
              value={customer.phone}
              onChange={handleInput}
            />

            <textarea
              name="address"
              placeholder="Enter Your School Address"
              value={customer.address}
              onChange={handleInput}
            />

            <button
              className="mycart-order-btn"
              onClick={placeFinalOrder}
            >
              Now Place Your Order
            </button>

            <button
              className="mycart-close-btn"
              onClick={() =>
                setShowForm(false)
              }
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;