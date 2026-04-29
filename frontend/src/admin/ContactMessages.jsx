import React, { useEffect, useState } from "react";
import { getContacts } from "../api";
import "./ContactMessage.css"

const ContactMessages = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);
return (
  <div className="contact-page">
    <h2 className="contact-title">📩 Contact Messages</h2>

    {contacts.length === 0 ? (
      <p className="no-message">No messages yet</p>
    ) : (
      <div className="contact-grid">
        {contacts.map((item) => (
          <div key={item._id} className="contact-card">

            <h3>{item.name}</h3>

            <p className="contact-phone">
              📞 {item.phone}
            </p>

            <p className="contact-desc">
              📝 {item.description}
            </p>

            <p className="contact-date">
              {new Date(item.createdAt).toLocaleString()}
            </p>

          </div>
        ))}
      </div>
    )}
  </div>
);
}
export default ContactMessages;