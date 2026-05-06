import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Privacy.css";

const Refund = () => {
  return (
    <div className="privacyPageWrapper">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="privacyTitle">
            <span className="privacyHighlight">Refund Policy</span>
          </h1>
          <p className="privacySubtitle">
            Return, exchange and refund guidelines
          </p>
        </div>

        <div className="privacyCard">

          <div className="privacySection">
            <p>
              Meenamma Bazzar.com’s Return and Exchange Policy offers no return of goods once delivered.
              If you receive a defective, expired, or incorrect product, we will provide a replacement free of cost (subject to stock availability).
            </p>
          </div>

          <div className="privacySection">
            <h3>1. Return & Exchange Rules</h3>
            <p>
              • Items must be unused and in original condition with packaging intact.<br />
              • Items should not be broken or tampered with.<br />
              • Exchange is available only in serviceable areas.<br />
              • Perishable goods cannot be returned once opened or damaged.<br />
              • Return must be initiated within 7 days of delivery.<br />
              • Proof of purchase is required for all returns.
            </p>
          </div>

          <div className="privacySection">
            <h3>2. Special Conditions</h3>
            <p>
              • Gift/offer items must also be returned if applicable, otherwise refund value will be adjusted.<br />
              • Self-ship returns must be securely packed using a reliable courier service.<br />
              • Complaints require unboxing video sent to +91-9046226705.
            </p>
          </div>

          <div className="privacySection">
            <h3>3. Refund Process</h3>
            <p>
              Once the returned item is received and inspected, you will be notified via email.
              Approved refunds are processed within 7–10 working days and credited to the original payment method.
            </p>
          </div>

          <div className="privacySection">
            <h3>4. Order Cancellation</h3>
            <p>
              Essential Aquatech reserves the right to cancel orders due to product unavailability,
              force majeure, fraud suspicion, policy violation, or logistical issues.
              Refunds (if applicable) will be processed as per policy.
            </p>
          </div>

          <div className="privacySection">
            <h3>5. Late or Missing Refunds</h3>
            <p>
              • Check bank account again.<br />
              • Contact credit card company (processing delay possible).<br />
              • Contact your bank for confirmation.<br />
              • If still not received, email: info@meenammabazaar.com
            </p>
          </div>

          <div className="privacySection">
            <h3>6. Exchanges</h3>
            <p>
              We replace items only if they are defective or damaged.
              For exchange, email info@meenamma.com and send item to:<br /><br />
              Essential Aquatech Pvt. Ltd.<br />
              Canal Road, Porapara Road, Jalpaiguri, Kharia, West Bengal 725103
            </p>
          </div>

          <div className="privacySection">
            <h3>7. Shipping</h3>
            <p>
              Return shipping costs are borne by the customer and are non-refundable.
              Delivery time for exchanged products may vary depending on location.
              Governing law: India, jurisdiction Jalpaiguri, West Bengal.
            </p>
          </div>

          <div className="privacySection">
            <h3>8. Contact</h3>
            <p>
              For any refund or return-related queries, contact customer care at 9046226703.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Refund;