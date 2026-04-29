import React, { useState } from "react";
import { createContact } from "../api";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createContact({
        name,
        phone,
        description,
      });

      alert("Message Sent Successfully 🚀");

      setName("");
      setPhone("");
      setDescription("");
    } catch (error) {
      console.log(error);
      alert("Error sending message");
    }
  };

  return (
    <div className="contact-container">
      <h2>📩 Contact Us</h2>

      <form onSubmit={handleSubmit} className="contact-form">

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe Your Self"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
};

export default ContactUs;