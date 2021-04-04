import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// Get information on all battles
function useBattles(targetBattleID = null) {
  const [battles, setBattles] = useState([]);
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

        setBattles(allBattles);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return { battles };
}

export { useBattles };
