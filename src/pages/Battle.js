import React from "react";
import { BattleGrid, SubmissionCard, Content, Header } from "../components";

export default function Battle() {
  const handleSampleClick = () => {
    alert(
      "Redirect to place where samples are being stored (e.g. Dropbox, YouTube)."
    );
  };

  const handleSubmitPress = () => {
    alert("Open Modal");
  };

  return (
    <>
      <Header />
      <Content>
        <BattleGrid>
          <h2 className="battle-title">Title</h2>
          <span className="samples-button" onClick={handleSampleClick}>
            Samples
          </span>
          <span className="submit-button" onClick={handleSubmitPress}>
            Submit
          </span>
          <div className="battle-description">
            <p>
              to nobis sunt repellat quaerat facilis qui tempore aperiam sit
              maiores! Ea, voluptates.
            </p>
          </div>
          <h3>Submissions</h3>
          <SubmissionCard>1</SubmissionCard>
          <SubmissionCard>2</SubmissionCard>
          <SubmissionCard>3</SubmissionCard>
        </BattleGrid>
      </Content>
    </>
  );
}
