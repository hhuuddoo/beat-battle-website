import React, { useEffect, useState, useContext } from "react";
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
  Footer,
} from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import * as STATUS from "../constants/status";
import { isEmpty } from "../helpers/isEmpty";
import { useBattle } from "../hooks/useBattle";
import { submitBeat } from "../helpers/submitBeat";
import { getBattleStatus } from "../helpers/getBattleStatus";

export default function Battle() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newSubmissionUrl, setNewSubmissionUrl] = useState("");
  const [sampleLink, setSampleLink] = useState("");
  const [battleDescription, setBattleDescription] = useState("");
  const [battleTitle, setBattleTitle] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [canSubmit, setCanSubmit] = useState(false);

  const { firebase } = useContext(FirebaseContext);
  const { battleID } = useParams();
  const { battle, loading, error } = useBattle(battleID);

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

      const { status } = getBattleStatus(
        submissionCloseTime.seconds,
        votingCloseTime.seconds
      );
      setCanSubmit(status === STATUS.OPEN);

      // Set state
      setSampleLink(link);
      setBattleDescription(description);
      setBattleTitle(title);
      setSubmissions(submissions);
    }
  }, [battle]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    submitBeat(battleID, newSubmissionUrl, firebase);
    setNewSubmissionUrl("");
    setModalOpen(false);
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
          {error} <Link to={ROUTES.BROWSE}>Go Back</Link>
        </Error>
      ) : (
        <Content>
          {modalOpen && (
            <SubmitModal
              url={newSubmissionUrl}
              setUrl={setNewSubmissionUrl}
              setModalOpen={setModalOpen}
              handleSubmit={HandleSubmit}
            />
          )}
          <BattleGrid>
            <h2 className="battle-title">{battleTitle}</h2>
            <a
              className={`samples-button${canSubmit ? `` : ` battle-closed`}`}
              target="_blank"
              rel="noreferrer"
              href={sampleLink}
            >
              Samples
            </a>
            {canSubmit && (
              <span
                className="submit-button"
                onClick={() => setModalOpen(true)}
              >
                Submit
              </span>
            )}
            <div className="battle-description">
              <p>{battleDescription || "No description"}</p>
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
      <Footer />
    </>
  );
}
