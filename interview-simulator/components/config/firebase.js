// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNBzlXZu-cjLl3V4B6bTabz4DggrUvUFM",
  authDomain: "infinity-scroll-firebase.firebaseapp.com",
  projectId: "ftw-interview-simulator",
  storageBucket: "infinity-scroll-firebase.appspot.com",
  messagingSenderId: "397102120476",
  appId: "1:397102120476:web:0f7217e43e6d41ad7fe9d9"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}




export default firebase