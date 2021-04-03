import React from "react";

export default function SubmissionCard({ children, ...restProps }) {
  return (
    <div className="submission-card" {...restProps}>
      {children}
    </div>
  );
}
