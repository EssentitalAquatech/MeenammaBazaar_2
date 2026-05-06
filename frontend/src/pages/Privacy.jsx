import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacyPageWrapper">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="privacyTitle">
            <span className="privacyHighlight">Privacy Policy</span>
          </h1>
          <p className="privacySubtitle">
            We value your trust and protect your data.
          </p>
        </div>

        <div className="privacyCard">

          <div className="privacySection">
            <p>
              We value the trust you place in us. That's why we insist upon the highest standards for secure transactions and customer information privacy. Please read this statement carefully.
            </p>

            <p className="privacyNote">
              <strong>Note:</strong> Our privacy policy is subject to change at any time without notice. Please review it periodically. By using this website, you agree to this policy.
            </p>
          </div>

          <div className="privacySection">
            <h3>1. Collection of Information</h3>
            <p>
              We collect and store personal information that you provide from time to time. This helps us provide a safe, efficient, and customized experience.
              We may collect details like name, email, phone number, payment details, and browsing behavior.
              We also collect information such as IP address, browser type, and pages visited.
              Cookies are used to improve user experience and track usage patterns.
            </p>
          </div>

          <div className="privacySection">
            <h3>2. Use of Information</h3>
            <p>
              We use your information to provide services, improve user experience, troubleshoot problems, detect fraud, and send updates or offers.
              We may also use data for internal research and analytics.
              Your IP address may be used for system administration and security.
            </p>
          </div>

          <div className="privacySection">
            <h3>3. Sharing of Information</h3>
            <p>
              We do not sell your personal information.
              We may share data with affiliates for fraud prevention and service improvement.
              We may also disclose information if required by law or legal process.
              In case of merger or acquisition, data may be transferred to the new entity.
            </p>
          </div>

          <div className="privacySection">
            <h3>4. Security Precautions</h3>
            <p>
              We use strong security measures to protect your data against unauthorized access, loss, or misuse.
              Secure servers are used whenever sensitive information is accessed or updated.
            </p>
          </div>

          <div className="privacySection">
            <h3>5. Your Consent</h3>
            <p>
              By using this website, you consent to the collection and use of your information as per this Privacy Policy.
              We may update this policy from time to time and will post changes on this page.
              We also use tools like Microsoft Clarity and Microsoft Advertising for analytics and improvement of services.
            </p>
          </div>

          <div className="privacySection">
            <h3>6. Grievance Officer</h3>
            <p>
              Essential Aquatech Pvt. Ltd.<br />
              Canal Road, Porapara Road, Jalpaiguri, Kharia, West Bengal 725103<br />
              Phone: +91 90462 26703<br />
              Email: 24x7essentialaquatech.com<br />
              Timing: Monday to Friday (10:00 AM - 5:00 PM)
            </p>
          </div>

          <div className="privacySection">
            <h3>7. Questions?</h3>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us using the details above.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;