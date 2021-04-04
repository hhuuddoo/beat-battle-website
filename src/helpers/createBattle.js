function createBattle(
  firebase,
  title,
  description,
  link,
  submissionCloseTime,
  votingCloseTime
) {
  // Get submission close Date object
  let submissionClose = new Date();
  submissionClose.setHours(
    submissionClose.getHours() + parseInt(submissionCloseTime)
  );

  // Get voting close Date object
  let votingClose = new Date(submissionClose);
  votingClose.setHours(votingClose.getHours() + parseInt(votingCloseTime));

  // Add form entries to firebase
  firebase
    .firestore()
    .collection("battles")
    .add({
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
