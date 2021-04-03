import React from "react";
import { BattleGrid, SubmissionCard, Content, Header } from "../components";

export default function Battle() {
  return (
    <>
      <Header />
      <Content>
        <BattleGrid>
          <h2 className="battle-title">Title</h2>
          <span className="samples-button">Samples</span>
          <span className="submit-button">Submit</span>
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
