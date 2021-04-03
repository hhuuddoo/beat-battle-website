import React from "react";
import { Link } from "react-router-dom";

export default function BattleCard({
  to,
  title,
  status,
  duration,
  ...restProps
}) {
  return (
    <>
      <Link to={to} {...restProps} className="battle-card__link">
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
      </Link>
    </>
  );
}
