import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBclDHHr37gPBxbMB0uyS_6dqw_mOOyGRk",
    authDomain: "fir-20a81.firebaseapp.com",
    databaseURL: "https://fir-20a81.firebaseio.com",
    projectId: "fir-20a81",
    storageBucket: "fir-20a81.appspot.com",
    messagingSenderId: "429105425259",
    appId: "1:429105425259:web:3d6d6e71ffe93b432dba2e",
}

const db = firebase.initializeApp(config);
export default db;
