import React, { useEffect, useState } from "react";
import {
  BattleGrid,
  SubmissionCard,
  Content,
  Header,
  SubmitModal,
  SoundcloudPlayer,
} from "../components";

export default function Battle() {
  const [modalOpen, setModalOpen] = useState(false);
  const [url, setUrl] = useState("");

  // Redirect user to website where sample or samples are being hosted
  const handleSampleClick = () => {
    alert(
      "Redirect to place where samples are being stored (e.g. Dropbox, YouTube)."
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Link at ${url}`);
    // CLOSE MODAL
  };

  useEffect(() => {
    // document.body.classList.toggle('modal-open', isOpen);
    document.body.classList.toggle("no-scroll", modalOpen);
  }, [modalOpen]);

  return (
    <>
      <Header />
      <Content>
        {modalOpen && (
          <SubmitModal
            url={url}
            setUrl={setUrl}
            setModalOpen={setModalOpen}
            handleSubmit={handleSubmit}
          />
        )}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex
              doloremque pariatur excepturi maiores debitis aliquam quam et
              reprehenderit consequatur, enim, eum sint. Eveniet sapiente
              accusantium iusto inventore quos quia officiis aut minima ratione
              eius nulla recusandae nesciunt, amet beatae, labore deleniti
            </p>
          </div>
          <h3>Submissions</h3>
          <SubmissionCard>
            <SoundcloudPlayer
              url="https://soundcloud.com/jerryfolkmusic/sparks"
              visual={false}
              color="3d748f"
            />
          </SubmissionCard>
          <SubmissionCard>2</SubmissionCard>
          <SubmissionCard>3</SubmissionCard>
        </BattleGrid>
      </Content>
    </>
  );
}
