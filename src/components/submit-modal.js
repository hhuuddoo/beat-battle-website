import React, { useState, useContext } from "react";
import { BattleContext } from "../context/battle-context";

export default function SubmitModal() {
  const [url, setUrl] = useState("");
  const { setModalOpen } = useContext(BattleContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Beat Submitted");
    // CLOSE MODAL
  };

  return (
    <>
      <div className="overlay" onClick={() => setModalOpen(false)}></div>
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
          <input type="submit" value="Submit" className="modal__form--submit" />
        </form>
      </div>
    </>
  );
}
