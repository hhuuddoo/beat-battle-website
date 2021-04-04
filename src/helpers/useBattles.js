import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// Get information on all battles
function useBattles() {
  const [battles, setBattles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection("battles")
      .get()
      .then((battle) => {
        const allBattles = battle.docs.map((battleObj) => {
          return { ...battleObj.data(), battleID: battleObj.id };
        });
        setLoading(false);
        setBattles(allBattles);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return { battles, loading };
}

export { useBattles };
