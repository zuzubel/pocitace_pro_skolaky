import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyBtnVel8o0pignThwJ_nKQLxiZNpABiwFM",
  authDomain: "pocitace-pro-skolaky.firebaseapp.com",
  databaseURL: "https://pocitace-pro-skolaky.firebaseio.com",
  projectId: "pocitace-pro-skolaky",
  storageBucket: "pocitace-pro-skolaky.appspot.com",
  messagingSenderId: "374007640596",
  appId: "1:374007640596:web:9e413597fa37beac7e2d01"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()