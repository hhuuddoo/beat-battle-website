import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// Get information on all battles
function useBattles() {
  const [battles, setBattles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const battleRef = firebase.firestore().collection("battles");
    battleRef
      .orderBy("submissionCloseTime", "asc")
      .get()
      .then((battle) => {
        const allBattles = battle.docs.map((battleObj) => {
          return { ...battleObj.data(), battleID: battleObj.id };
        });
        setLoading(false);
        setError(null);
        setBattles(allBattles);
      })
      .catch(() => {
        setError(
          "There was an issue retrieving battles. Please try again later."
        );
        setLoading(false);
      });
  }, [firebase]);

  return { battles, loading, error };
}

export { useBattles };
