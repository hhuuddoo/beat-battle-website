function createBattle(
  firebase,
  title,
  description = "",
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

  const battleRef = firebase.firestore().collection("battles");

  // Add form entries to firebase
  battleRef.add({
    title: title,
    description: description,
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
