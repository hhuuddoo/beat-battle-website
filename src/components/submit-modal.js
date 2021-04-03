import React from "react";
import { BattleContext } from "../context/battle-context";

export default function SubmitModal(props) {
  const { url, setUrl, setModalOpen, handleSubmit } = props;

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
