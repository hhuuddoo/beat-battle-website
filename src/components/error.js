import React from "react";

export default function Error({ children }) {
  return (
    <div className="container">
      <div className="main-content error-content">
        <p>{children}</p>
      </div>
    </div>
  );
}
