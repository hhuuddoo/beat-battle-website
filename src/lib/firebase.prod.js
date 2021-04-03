import Firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "beat-battle-website.firebaseapp.com",
  databaseURL: "https://beat-battle-website-default-rtdb.firebaseio.com",
  projectId: "beat-battle-website",
  storageBucket: "beat-battle-website.appspot.com",
  messagingSenderId: "336678364850",
  appId: "1:336678364850:web:f2ef1a95bc33362f658bab",
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
