import firebase from 'firebase';
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOM,
    projectId: process.env.PROD_ID,
    storageBucket: process.env.STOR_BUCK,
    messagingSenderId: process.env.MESSAGE_SEND_ID,
    appId: process.env.APP_ID
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