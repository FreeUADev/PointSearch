import firebase from 'firebase/app'
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBkXV6i-PvMTLaC_cZM372bMgRWRFxk2dA",
    authDomain: "pointsearch-ua.firebaseapp.com",
    projectId: "pointsearch-ua",
    storageBucket: "pointsearch-ua.appspot.com",
    messagingSenderId: "1007779654393",
    appId: "1:1007779654393:web:abfd4032587b4d598f5028",
    measurementId: "G-M0DCVBY519"
};

try {
  firebase.initializeApp(firebaseConfig);
  console.log('Connected with Firebase')   
} catch (err) {
if (!/already exists/.test(err.message)) {
  console.error('Firebase initialization error', err.stack)}}

const auth = firebase.auth()

export { auth }