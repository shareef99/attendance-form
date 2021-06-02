import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBXDGGIFuBCCadJHTSbntQdf5wbeemQFY4",
    authDomain: "attandanceform.firebaseapp.com",
    projectId: "attandanceform",
    storageBucket: "attandanceform.appspot.com",
    messagingSenderId: "806034140037",
    appId: "1:806034140037:web:2eaf55545463aa1d4bf2ec",
    measurementId: "G-MQQZ8QSEW9",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.firestore();

export { db };
