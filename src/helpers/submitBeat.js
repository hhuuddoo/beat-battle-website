function submitBeat(battleID, url, firebase) {
  console.log(firebase);
  const battleRef = firebase.firestore().collection("battles").doc(battleID);

  battleRef
    .update({
      submissions: firebase.firebase_.firestore.FieldValue.arrayUnion(url),
    })
    .catch((e) => alert(e.message));
}

export { submitBeat };
