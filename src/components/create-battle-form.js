import React, { useState } from "react";

export default function CreateBattleForm() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [duration, setDuration] = useState(1);
  const [voting, setVoting] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Battle title: ${title}\nSubmission Link: ${url}\nDuration: ${duration} hr\nVoting Time: ${voting} hr`
    );
  };

  return (
    <>
      <div className="form-container">
        <h2 className="create-form-title">Create Battle</h2>
        <form className="create-form" onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Example"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Link to samples:</label>
          <input
            type="url"
            placeholder="https://www.youtube.com or https://www.dropbox.com"
            pattern="https://.+"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label>Submission Duration:</label>
          <div>
            <input
              type="range"
              min={1}
              max={24}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <span>{duration} hr</span>
          </div>
          <label>Voting Duration:</label>
          <div>
            <input
              type="range"
              min={1}
              max={24}
              value={voting}
              onChange={(e) => setVoting(e.target.value)}
            />
            <span>{voting} hr</span>
          </div>
          <input type="submit" value="Create Battle" />
        </form>
      </div>
    </>
  );
}
