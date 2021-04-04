import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { isEmpty } from "../helpers/isEmpty";

// Get information on a single battle
function useBattle(battleID) {
  const [battle, setBattle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const battleRef = firebase.firestore().collection("battles").doc(battleID);
    battleRef
      .get()
      .then((doc) => {
        const data = doc.data();
        setBattle({ ...data });
        if (isEmpty({ ...data })) {
          setError("Invalid Battle.");
        } else {
          setError(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("There was an issue retrieving the battle.");
        setLoading(false);
      });
  }, [firebase, battleID]);

  return { battle, loading, error };
}

export { useBattle };
