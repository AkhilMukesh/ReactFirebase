import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD6V5TxcZ5Si7sWTZyN4eLJl7KvSCcZDgg",
    authDomain: "sign-in-and-sign-out-daf56.firebaseapp.com",
    databaseURL: "https://sign-in-and-sign-out-daf56.firebaseio.com",
    projectId: "sign-in-and-sign-out-daf56",
    storageBucket: "sign-in-and-sign-out-daf56.appspot.com",
    messagingSenderId: "1038865382160",
    appId: "1:1038865382160:web:e1ef0d93f01ce773df8395",
    measurementId: "G-VD1C2R27EW"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fire;

