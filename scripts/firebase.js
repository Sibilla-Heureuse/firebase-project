const firebaseConfig = {
    apiKey: "AIzaSyB3w75qhCHH0f5JoZqGvZPTPlmMdkjpTm8",
    authDomain: "moonlight-85fb0.firebaseapp.com",
    projectId: "moonlight-85fb0",
    storageBucket: "moonlight-85fb0.appspot.com",
    messagingSenderId: "1072167233909",
    appId: "1:1072167233909:web:7c69598dbf37057c338b3c",
    measurementId: "G-PZ20Y136XH"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();