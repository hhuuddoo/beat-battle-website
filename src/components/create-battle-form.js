import React from "react";

export default function CreateBattleForm(props) {
  const {
    title,
    setTitle,
    description,
    setDescription,
    url,
    setUrl,
    duration,
    setDuration,
    voting,
    setVoting,
    handleSubmit,
  } = props;

  return (
    <>
      <div className="form-container">
        <h2 className="create-form-title">Create Battle</h2>
        <form className="create-form" onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Example"
            onFocus={({ target }) => (target.placeholder = "")}
            onBlur={({ target }) => (target.placeholder = "Example")}
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description:</label>
          <textarea
            maxLength={500}
            placeholder="Add description"
            onFocus={({ target }) => (target.placeholder = "")}
            onBlur={({ target }) => (target.placeholder = "Add description")}
            rows={3}
            wrap="soft"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Link to samples:</label>
          <input
            type="url"
            placeholder="e.g. YouTube or Dropbox link"
            onFocus={({ target }) => (target.placeholder = "")}
            onBlur={({ target }) =>
              (target.placeholder = "e.g. YouTube or Dropbox link")
            }
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
