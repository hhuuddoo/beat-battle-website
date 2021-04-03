import React, { useEffect, useState } from "react";
import {
  BattleGrid,
  SubmissionCard,
  Content,
  Header,
  SubmitModal,
  SoundcloudPlayer,
  HorizontalScrollDiv,
} from "../components";

import urlData from "../data.json";

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
    // CLOSE MODAL HERE
  };

  useEffect(() => {
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
          <HorizontalScrollDiv>
            {urlData.length > 0 ? (
              urlData.map(({ url, id }) => {
                return (
                  <SubmissionCard key={id}>
                    <SoundcloudPlayer url={url} color="3d748f" />
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
    </>
  );
}
