import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var fbConfig = {
    apiKey: "AIzaSyAh5q8iFyW1vM6r6sw4oaRv-HAHOBz7LCs",
    authDomain: "team-diaries.firebaseapp.com",
    projectId: "team-diaries",
    storageBucket: "team-diaries.appspot.com",
    messagingSenderId: "933808486037",
    appId: "1:933808486037:web:e1a16e3d5262bccf03cd9c",
    measurementId: "G-C46VK0TV4N",
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    userProfile: "users"
  };
  
firebase.initializeApp(fbConfig);
firebase.firestore().settings({timestamsInSnapshots: true});

export { firebase, fbConfig } ;

