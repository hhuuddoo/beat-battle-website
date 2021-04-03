import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { CreateBattleForm, Content, Header } from "../components";
import { createBattle } from "../helpers/createBattle";

export default function Create() {
  const { firebase } = useContext(FirebaseContext);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [duration, setDuration] = useState(1);
  const [voting, setVoting] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    createBattle(firebase, title, "none", url, duration, voting);

    alert(
      `Battle title: ${title}\nSubmission Link: ${url}\nDuration: ${duration} hr\nVoting Time: ${voting} hr\n`
    );
  };

  return (
    <>
      <Header />
      <Content>
        <CreateBattleForm
          title={title}
          setTitle={setTitle}
          url={url}
          setUrl={setUrl}
          duration={duration}
          setDuration={setDuration}
          voting={voting}
          setVoting={setVoting}
          handleSubmit={handleSubmit}
        />
      </Content>
    </>
  );
}
