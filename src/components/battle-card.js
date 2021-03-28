import React from "react";

export default function BattleCard({ title, status, duration, ...restProps }) {
  return (
    <>
      <a {...restProps} className="battle-card__link">
        <div className="battle-card">
          <div className="battle-card__title">
            <p>{title}</p>
          </div>
          <div className="battle-card__status">
            <span>{status}</span>
          </div>
          <div className="battle-card__duration">
            <span>{duration} remaining</span>
          </div>
        </div>
      </a>
    </>
  );
}
