import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWSTNFtNfQJXH8YMzv-EAAgsbwSOczDy0",
    authDomain: "clone-ec8fa.firebaseapp.com",
    projectId: "clone-ec8fa",
    storageBucket: "clone-ec8fa.appspot.com",
    messagingSenderId: "694785694182",
    appId: "1:694785694182:web:d688307c7807fe5a35de27",
    measurementId: "G-BMZ09HF6RL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };