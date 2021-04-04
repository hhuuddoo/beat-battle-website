import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// Get information on a single battle
function useBattle(battleID) {
  const [battle, setBattle] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection("battles")
      .doc(battleID)
      .get()
      .then((doc) => {
        const data = doc.data();
        setBattle({ ...data });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [battleID, firebase]);

  return { battle, loading };
}

export { useBattle };
