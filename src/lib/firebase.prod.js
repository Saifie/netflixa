import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // import {seedDatabase} from "../seed.js"

 const config={
 	  apiKey: "AIzaSyAaC0-d5LP31759X4tXoOd5yb1Z9D7KZL4",
    authDomain: "netflix-120c5.firebaseapp.com",
    projectId: "netflix-120c5",
    storageBucket: "netflix-120c5.appspot.com",
    messagingSenderId: "898615322379",
    appId: "1:898615322379:web:b250d2e5a2bb224088240e"
 }

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
 // seedDatabase(firebase);
// // 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };


