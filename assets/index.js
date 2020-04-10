require("dotenv").config();

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "rps-multiplayer-1eb1c.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-1eb1c.firebaseio.com",
  projectId: "rps-multiplayer-1eb1c",
  storageBucket: "rps-multiplayer-1eb1c.appspot.com",
  messagingSenderId: "1057382516358",
  appId: "1:1057382516358:web:3ef697ad1bc1954859b307",
  measurementId: "G-082FYT73KF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
