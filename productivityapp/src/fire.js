import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBObvVwEVlmIZEL_uGUcMgSnIBnhIwT71U",
    authDomain: "productivityapp-156c3.firebaseapp.com",
    projectId: "productivityapp-156c3",
    storageBucket: "productivityapp-156c3.appspot.com",
    messagingSenderId: "116791094393",
    appId: "1:116791094393:web:d77fa1693c0654cb8278a8"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;