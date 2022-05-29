import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuDOswSAt5OZZtjYapeJXLO6iP5a4CLiU",
  authDomain: "super-8d709.firebaseapp.com",
  databaseURL: "https://super-8d709-default-rtdb.firebaseio.com",
  projectId: "super-8d709",
  storageBucket: "super-8d709.appspot.com",
  messagingSenderId: "752242807541",
  appId: "1:752242807541:web:685bfbf5d3c972c543ebbc"
};

export const firebase = initializeApp(firebaseConfig);

export default firebase;