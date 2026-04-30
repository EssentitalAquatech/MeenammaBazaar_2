




import React, { useRef, useState } from "react";
import app from "../assets/images/scanner.jpeg";
import videoFile from "../assets/images/meenamma_video.mp4";
import "./AppPromo.css";
import { useTranslation } from "react-i18next";

const AppPromo = () => {
  const { t } = useTranslation();

  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const updateProgress = () => {
    const video = videoRef.current;
    const progress = progressRef.current;
    if (!video || !progress) return;

    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = percent + "%";
  };

  const seekVideo = (e) => {
    const video = videoRef.current;
    const bar = e.currentTarget;
    if (!video) return;

    const clickPos = e.nativeEvent.offsetX;
    const width = bar.clientWidth;

    video.currentTime = (clickPos / width) * video.duration;
  };

  return (
    <section className="container py-5">

      <div className="app-promo-wrapper row align-items-center position-relative overflow-hidden">

        {/* background glow circles */}
        <div className="glow-circle circle-1"></div>
        <div className="glow-circle circle-2"></div>

        {/* LEFT CONTENT (FULL RESTORED) */}
        <div className="col-md-6 text-white position-relative z-2">

          <div className="badge-custom mb-3">
            📱 {t("app.badge")}
          </div>

          <h2 className="fw-bold display-6">
            {t("app.title1")} <span className="text-warning">{t("app.highlight")}</span>
          </h2>

          <p className="mt-3 fs-5 text-light opacity-75">
            {t("app.desc")}
          </p>

          <ul className="mt-4 list-unstyled text-light">
            <li>✓ {t("app.point1")}</li>
            <li>✓ {t("app.point2")}</li>
            <li>✓ {t("app.point3")}</li>
          </ul>

          {/* <div className="d-flex flex-wrap gap-3 mt-4"> */}
          <div className="d-flex flex-wrap gap-3 mt-4 wa-btn-wrapper">
            <a href="https://wa.me/919046226703" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-light fw-semibold px-4 py-2 shadow">
                {t("app.button")}
              </button>
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="col-md-6 text-center position-relative z-2 mt-4 mt-md-0">
          <img src={app} alt="App Preview" className="img-fluid app-image" />
        </div>

        {/* VIDEO SECTION */}
        <div className="col-12 mt-5 row align-items-center position-relative z-2">

          <div className="col-md-4 text-white">
            <h3 className="about-title">
              About <span className="text-warning">Meenamma</span>
            </h3>
            
          </div>

          <div className="col-md-8 video-player">

            <video
              ref={videoRef}
              src={videoFile}
              className="promo-video"
              onClick={togglePlay}
              onTimeUpdate={updateProgress}
            />

            {/* ONLY PROGRESS BAR */}
            <div className="progress-bar" onClick={seekVideo}>
              <div className="progress-fill" ref={progressRef}></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppPromo;