import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      {cardInfo.image ? (
        <div className="certificate-image-div">
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Card Thumbnail"}
            className="card-image"
          />
        </div>
      ) : (
        <div className="certificate-icon-div">
          <svg
            className="certificate-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        </div>
      )}
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      {cardInfo.footer && cardInfo.footer.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => {
            return (
              <span
                key={i}
                className={
                  isDark ? "dark-mode certificate-tag" : "certificate-tag"
                }
                onClick={() => openUrlInNewTab(v.url, v.name)}
              >
                {v.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
