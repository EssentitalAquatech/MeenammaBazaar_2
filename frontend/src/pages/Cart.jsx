

import React, { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";
import {
  getMe,
  placeOrder,
  getMyOrders,
} from "../api";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } =
    useCart();

  const [selectedSizes, setSelectedSizes] =
    useState([]);

  const [showForm, setShowForm] =
    useState(false);

  const [successMsg, setSuccessMsg] =
    useState("");

  const [showHistory, setShowHistory] =
    useState(false);

  const [history, setHistory] = useState([]);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // ===========================
  // Auto size select
  // ===========================
  useEffect(() => {
    setSelectedSizes(
      cart.map(
        (item) =>
          item.selectedSizeIndex || 0
      )
    );
  }, [cart]);

  // ===========================
  // Open order popup
  // ===========================
  const openOrderForm = async () => {
    const token =
      localStorage.getItem("token");

    if (token) {
      try {
        const res = await getMe(token);

        setCustomer({
          name: res.data.name || "",
          phone:
            res.data.phone || "",
          address:
            res.data.address || "",
        });
      } catch (error) {
        console.log(error);
      }
    }

    setShowForm(true);
  };

  // ===========================
  // Load History
  // ===========================
  const loadHistory = async () => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const user =
        await getMe(token);

      const res =
        await getMyOrders(
          user.data.phone
        );

      setHistory(res.data);
      setShowHistory(true);
    } catch (error) {
      console.log(error);
    }
  };

  // ===========================
  // Input
  // ===========================
  const handleInput = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]:
        e.target.value,
    });
  };

  // ===========================
  // Size Change
  // ===========================
  const handleSizeChange = (
    index,
    sizeIndex
  ) => {
    const updated = [
      ...selectedSizes,
    ];

    updated[index] = sizeIndex;

    setSelectedSizes(updated);
  };

  // ===========================
  // Price Safe
  // ===========================
  const getPrice = (value) => {
    const num =
      parseFloat(value);

    return isNaN(num) ? 0 : num;
  };

  // ===========================
  // Total
  // ===========================
  const getTotal = () => {
    return cart.reduce(
      (total, item, index) => {
        const price = getPrice(
          item.product.price[
            selectedSizes[index]
          ]
        );

        return total + price;
      },
      0
    );
  };

  // ===========================
  // Place Final Order
  // ===========================
  const placeFinalOrder =
    async () => {
      if (
        !customer.name ||
        !customer.phone ||
        !customer.address
      ) {
        alert(
          "Please fill all details"
        );
        return;
      }

      const orderData = {
        customer,

        items: cart.map(
          (item, index) => ({
            name:
              item.product.name,

            type:
              item.product
                .category,

            size:
              item.product.size[
                selectedSizes[
                  index
                ]
              ],

            price: getPrice(
              item.product.price[
                selectedSizes[
                  index
                ]
              ]
            ),
          })
        ),

        total: getTotal(),

        date: new Date().toLocaleString(),
      };

      try {
        await placeOrder(
          orderData
        );

        setSuccessMsg(
          "🎉 Order Placed Successfully!"
        );

        setShowForm(false);

        clearCart();

        setCustomer({
          name: "",
          phone: "",
          address: "",
        });
      } catch (error) {
        console.log(error);

        alert(
          "Order Failed"
        );
      }
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
        {/* <h2 className="mycart-main-title">
          Your Cart 🛒
        </h2> */}

        <h2 className="mycart-main-title">
  Your <span className="cart-highlight">Cart</span> 🛒
</h2>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <button
            className="mycart-order-btn"
            onClick={loadHistory}
          >
            Order History
          </button>
        </div>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <div className="mycart-grid-box">

              {cart.map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={index}
                    className="mycart-product-card"
                  >
                    <img
                      src={
                        item.product
                          .image
                      }
                      alt=""
                      className="mycart-product-image"
                    />

                    <h3>
                      {
                        item
                          .product
                          .name
                      }
                    </h3>

                    <p>
                      {
                        item
                          .product
                          .category
                      }
                    </p>

                    <select
                      value={
                        selectedSizes[
                          index
                        ]
                      }
                      onChange={(
                        e
                      ) =>
                        handleSizeChange(
                          index,
                          Number(
                            e
                              .target
                              .value
                          )
                        )
                      }
                    >
                      {item.product.size.map(
                        (
                          size,
                          i
                        ) => (
                          <option
                            key={i}
                            value={
                              i
                            }
                          >
                            {size}
                            {" - ₹"}
                            {
                              item
                                .product
                                .price[
                                i
                              ]
                            }
                          </option>
                        )
                      )}
                    </select>

                    <p>
                      ₹
                      {
                        item
                          .product
                          .price[
                          selectedSizes[
                            index
                          ]
                        ]
                      }
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(
                          item
                            .product
                            .name
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                )
              )}
            </div>

            <h3>
              Total: ₹
              {getTotal().toFixed(
                2
              )}
            </h3>

            <button
              className="mycart-order-btn"
              onClick={
                openOrderForm
              }
            >
              Place Your Order
            </button>

            {successMsg && (
              <p>
                {
                  successMsg
                }
              </p>
            )}
          </>
        )}
      </div>

      {/* History Popup */}
      {showHistory && (
        <div className="mycart-popup-overlay">
          <div className="mycart-order-form">
            <h2>
              Your Orders
            </h2>

            {history.length ===
            0 ? (
              <p>
                No Orders
              </p>
            ) : (
              history.map(
                (
                  order,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    style={{
                      border:
                        "1px solid #ddd",
                      padding:
                        "10px",
                      marginBottom:
                        "15px",
                    }}
                  >
                    <h4>
                      Status:{" "}
                      {
                        order.status
                      }
                    </h4>

                    {order.items.map(
                      (
                        item,
                        i
                      ) => (
                        <p
                          key={
                            i
                          }
                        >
                          {
                            item.name
                          }{" "}
                          -{" "}
                          {
                            item.size
                          }
                        </p>
                      )
                    )}

                    <p>
                      ₹
                      {
                        order.total
                      }
                    </p>
                  </div>
                )
              )
            )}

            <button
              className="mycart-close-btn"
              onClick={() =>
                setShowHistory(
                  false
                )
              }
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Order Popup */}
      {showForm && (
        <div className="mycart-popup-overlay">
          <div className="mycart-order-form">

            <h3>
              Delivery
              Details
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={
                customer.name
              }
              onChange={
                handleInput
              }
            />

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone"
              value={
                customer.phone
              }
              onChange={
                handleInput
              }
            />

            <textarea
              name="address"
              placeholder="Enter Address"
              value={
                customer.address
              }
              onChange={
                handleInput
              }
            />

            <button
              className="mycart-order-btn"
              onClick={
                placeFinalOrder
              }
            >
              Now Place
              Your Order
            </button>

            <button
              className="mycart-close-btn"
              onClick={() =>
                setShowForm(
                  false
                )
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