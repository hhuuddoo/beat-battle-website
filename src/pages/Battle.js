import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import * as ROUTES from "../constants/routes";
import { isEmpty } from "../helpers/isEmpty";
import { useBattle } from "../helpers/useBattle";

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

  const now = new Date();

  const { battleID } = useParams();
  const { battle, loading } = useBattle(battleID);

  // Store data from database as state variables
  useEffect(() => {
    if (!isEmpty(battle)) {
      // Destructure data object
      const {
        link,
        submissionCloseTime,
        description,
        votingCloseTime,
        title,
        submissions,
      } = battle;

      // Set state
      setSampleLink(link);
      setBattleDescription(description);
      setSubmissionClose(submissionCloseTime);
      setVotingClose(votingCloseTime);
      setBattleTitle(title);
      setSubmissions(submissions);
      setError("");
    } else {
      setError("Invalid Battle");
    }
  }, [battle]);

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

      {loading ? (
        <Content>
          <BattleGrid>
            <h2 className="battle-title">Loading...</h2>
          </BattleGrid>
        </Content>
      ) : error ? (
        <Error>
          {error}. <Link to={ROUTES.BROWSE}>Go Back</Link>
        </Error>
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
            <h2 className="battle-title">{battleTitle}</h2>
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
