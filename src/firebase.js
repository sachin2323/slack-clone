import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD5kxDThaPTgkKY2pWdn3-CMN6sxx4Msm4",
    authDomain: "slack-clone-9f22d.firebaseapp.com",
    databaseURL: "https://slack-clone-9f22d.firebaseio.com",
    projectId: "slack-clone-9f22d",
    storageBucket: "slack-clone-9f22d.appspot.com",
    messagingSenderId: "78644490648",
    appId: "1:78644490648:web:ed4475933732f8ee313bed",
    measurementId: "G-DWW01RQ3HE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, provider };
export default db;