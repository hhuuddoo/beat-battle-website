import React, { useState } from "react";

export default function SubmitModal() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Beat Submitted");
  };

  return (
    <div className="submit-modal modal">
      <form className="modal__form" onSubmit={handleSubmit}>
        <h1 className="modal__form--title">Submit Beat</h1>
        <input
          type="url"
          placeholder="https://www.youtube.com or https://www.dropbox.com"
          pattern="https://.+"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="modal__form--input"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
