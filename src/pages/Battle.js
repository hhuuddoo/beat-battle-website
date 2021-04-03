import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BattleGrid,
  SubmissionCard,
  Content,
  Header,
  SubmitModal,
  SoundcloudPlayer,
  HorizontalScrollDiv,
  Error,
} from "../components";

import data from "../testFirstbaseData.json";

export default function Battle() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newSubmissionUrl, setNewSubmissionUrl] = useState("");
  const [sampleLink, setSampleLink] = useState("");
  const [submissionClose, setSubmissionClose] = useState(null);
  const [battleDescription, setBattleDescription] = useState("");
  const [votingClose, setVotingClose] = useState(null);
  const [battleTitle, setBattleTitle] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState("");

  const { battleID } = useParams();

  // Store data from database as state variables
  useEffect(() => {
    // Get data for this battle only
    const newData = data.battles.filter(
      (battle) => battle.id === parseInt(battleID)
    );

    if (newData.length > 0) {
      // Destructure data object
      const {
        link,
        submissionCloseTime,
        description,
        votingCloseTime,
        title,
        submissions,
      } = newData[0];

      // Set state
      setSampleLink(link);
      setBattleDescription(description);
      setSubmissionClose(submissionCloseTime);
      setVotingClose(votingCloseTime);
      setBattleTitle(title);
      setSubmissions(submissions);
    } else {
      setError("Invalid Battle");
    }
  }, []);

  // Redirect user to website where sample or samples are being hosted
  const handleSampleClick = () => {
    alert(`Redirect to ${sampleLink}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Link at ${newSubmissionUrl}`);
    // CLOSE MODAL HERE
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", modalOpen);
  }, [modalOpen]);

  return (
    <>
      <Header onBrowse={true} />
      {error ? (
        <Error>{error}</Error>
      ) : (
        <Content>
          {modalOpen && (
            <SubmitModal
              url={newSubmissionUrl}
              setUrl={setNewSubmissionUrl}
              setModalOpen={setModalOpen}
              handleSubmit={handleSubmit}
            />
          )}
          <BattleGrid>
            <h2 className="battle-title">{"Loading..." && battleTitle}</h2>
            <span className="samples-button" onClick={handleSampleClick}>
              Samples
            </span>
            <span className="submit-button" onClick={() => setModalOpen(true)}>
              Submit
            </span>
            <div className="battle-description">
              <p>{"Loading..." && battleDescription}</p>
            </div>
            <h3>Submissions</h3>
            <HorizontalScrollDiv>
              {submissions && submissions.length > 0 ? (
                submissions.map((submissionURL, idx) => {
                  return (
                    <SubmissionCard key={idx}>
                      <SoundcloudPlayer url={submissionURL} color="3d748f" />
                    </SubmissionCard>
                  );
                })
              ) : (
                <span className="no-submissions">
                  No submissions have been made
                </span>
              )}
            </HorizontalScrollDiv>
          </BattleGrid>
        </Content>
      )}
    </>
  );
}
