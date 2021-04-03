import React from "react";

export default function BattleGrid({ children, ...restProps }) {
  return (
    <div className="battle-grid" {...restProps}>
      {children}
    </div>
  );
}
