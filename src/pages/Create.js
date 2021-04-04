import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import history from "../helpers/history";
import { CreateBattleForm, Content, Header, Footer } from "../components";
import { createBattle } from "../helpers/createBattle";

export default function Create() {
  const { firebase } = useContext(FirebaseContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [duration, setDuration] = useState(1);
  const [voting, setVoting] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    createBattle(firebase, title, description, url, duration, voting);
    history.push(ROUTES.BROWSE);
  };

  return (
    <>
      <Header onCreate={true} />
      <Content>
        <CreateBattleForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          url={url}
          setUrl={setUrl}
          duration={duration}
          setDuration={setDuration}
          voting={voting}
          setVoting={setVoting}
          handleSubmit={handleSubmit}
        />
      </Content>
      <Footer />
    </>
  );
}
