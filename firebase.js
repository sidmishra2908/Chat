import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCn7RBeg0MFcpHfnB4TIiNH1AhM1zxywpk",
  authDomain: "chat-4e5e2.firebaseapp.com",
  projectId: "chat-4e5e2",
  storageBucket: "chat-4e5e2.appspot.com",
  messagingSenderId: "283067062921",
  appId: "1:283067062921:web:ef6cb586d4f7c191b30458",
  measurementId: "G-PSD6J6TETZ"
};
let app;
if(firebase.apps.length ===0)
{
app=firebase.initializeApp(firebaseConfig)
}
else
{
  app=firebase.app();
}
const db = firebase.firestore();
const auth=firebase.auth();
export {db,auth};