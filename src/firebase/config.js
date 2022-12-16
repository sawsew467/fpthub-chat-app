import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOH0E6sSSH-9jN39KAm-cY4mdZS9lHGxU",
  authDomain: "fpthub-chat-app.firebaseapp.com",
  projectId: "fpthub-chat-app",
  storageBucket: "fpthub-chat-app.appspot.com",
  messagingSenderId: "744752931933",
  appId: "1:744752931933:web:8a1567fb8a8ac4835919b4",
  measurementId: "G-33YL26K6PP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
