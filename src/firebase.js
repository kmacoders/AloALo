import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAp1ZgspFLkKonzGkJ3oL7iuRXSfMg68gY",
  authDomain: "aloalo-afe55.firebaseapp.com",
  databaseURL: "https://aloalo-afe55.firebaseio.com",
  projectId: "aloalo-afe55",
  storageBucket: "aloalo-afe55.appspot.com",
  messagingSenderId: "374791761463",
  appId: "1:374791761463:web:e8d0d3a41e5333dc34d9b2",
  measurementId: "G-K7QE1X6PTK"
};
firebase.initializeApp(config);

export default firebase;
