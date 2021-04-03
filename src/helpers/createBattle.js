import { getUUID } from "./getUUID";

function createBattle(
  firebase,
  title,
  description,
  link,
  submissionCloseTime,
  votingCloseTime
) {
  let submissionClose = new Date();
  submissionClose.setHours(
    submissionClose.getHours() + parseInt(submissionCloseTime)
  );

  console.log(firebase.firebase_.firestore.Timestamp);

  let votingClose = new Date(submissionClose);
  votingClose.setHours(votingClose.getHours() + parseInt(votingCloseTime));

  firebase
    .firestore()
    .collection("battles")
    .add({
      id: getUUID(),
      title: title,
      description:
        "THIS IS A DEFAULT DESCRIPTION. ADD DESCRIPTION INPUT BOX TO CREATE BATTLE FORM",
      link: link,
      submissionCloseTime: firebase.firebase_.firestore.Timestamp.fromDate(
        submissionClose
      ),
      votingCloseTime: firebase.firebase_.firestore.Timestamp.fromDate(
        votingClose
      ),
      submissions: [],
    });
}

export { createBattle };
