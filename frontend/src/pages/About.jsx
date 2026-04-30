




import React, { useEffect } from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const elements = document.querySelectorAll(".about-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about-container container py-5">

      {/* Heading */}
      <h1 className="about-main-title about-animate about-fade-down">
        {t("about.title")} <span className="about-highlight-yellow-text">{t("about.highlight")}</span>
      </h1>

      {/* Sub Heading */}
      <p className="about-sub-title about-animate about-fade-left">
        {t("about.subtitle1")}{" "}
        <span className="about-aquatech">{t("about.brand")}</span>
        <br />
        {t("about.subtitle2")}
      </p>

      {/* Cards */}
      <div className="row g-4 mt-4">

        <div className="col-md-3 col-sm-6 about-animate about-fade-up">
          <div className="about-custom-card about-card1">
            <i className="fa-solid fa-fish-fins about-card-icon"></i>
            <h5>{t("about.card1_title")}</h5>
            <p>{t("about.card1_desc")}</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 about-animate about-fade-right">
          <div className="about-custom-card about-card2">
            <i className="fa-solid fa-burst about-card-icon"></i>
            <h5>{t("about.card2_title")}</h5>
            <p>{t("about.card2_desc")}</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 about-animate about-fade-left">
          <div className="about-custom-card about-card3">
            <i className="fa-solid fa-user-group about-card-icon"></i>
            <h5>{t("about.card3_title")}</h5>
            <p>{t("about.card3_desc")}</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 about-animate about-fade-down">
          <div className="about-custom-card about-cta-card">
            <i className="fa-solid fa-shield-halved about-card-icon"></i>
            <h5>{t("about.card4_title")}</h5>
            <p>{t("about.card4_desc")}</p>
          </div>
        </div>

      </div>

      {/* CTA Section */}
      <div className="about-cta-box mt-5 about-animate about-fade-up">
        <h3>{t("about.cta_title")}</h3>
        <p>
          {t("about.cta_desc")}
        </p>
      </div>

    </div>
  );
};

export default About;