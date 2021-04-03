import React, { useState } from "react";
import {
  BattleGrid,
  SubmissionCard,
  Content,
  Header,
  SubmitModal,
} from "../components";
import { BattleContext } from "../context/battle-context";

export default function Battle() {
  const [modalOpen, setModalOpen] = useState(false);

  // Redirect user to website where sample or samples are being hosted
  const handleSampleClick = () => {
    alert(
      "Redirect to place where samples are being stored (e.g. Dropbox, YouTube)."
    );
  };

  // Open modal that will allow for users to enter battle
  const handleSubmitPress = () => {
    alert("Open Modal");
  };

  return (
    <>
      <BattleContext.Provider value={{ setModalOpen }}>
        <Header />
        <Content>
          {modalOpen && <SubmitModal />}
          <BattleGrid>
            <h2 className="battle-title">Title</h2>
            <span className="samples-button" onClick={handleSampleClick}>
              Samples
            </span>
            <span className="submit-button" onClick={() => setModalOpen(true)}>
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
      </BattleContext.Provider>
    </>
  );
}
