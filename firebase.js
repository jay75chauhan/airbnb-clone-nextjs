import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDd2vpI5Sm7ySTlDprBx9iZptophAEs5Bc",
  authDomain: "airbnb-clone-nextjs.firebaseapp.com",
  projectId: "airbnb-clone-nextjs",
  storageBucket: "airbnb-clone-nextjs.appspot.com",
  messagingSenderId: "768224301599",
  appId: "1:768224301599:web:9a42e68e43eb49b07cfb2a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
