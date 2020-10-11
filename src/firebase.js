import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyB13PntUEDMkFbTt2psiHOZtQih83qrf88",
//     authDomain: "whatsapp-clone-fafc9.firebaseapp.com",
//     databaseURL: "https://whatsapp-clone-fafc9.firebaseio.com",
//     projectId: "whatsapp-clone-fafc9",
//     storageBucket: "whatsapp-clone-fafc9.appspot.com",
//     messagingSenderId: "1027981883218",
//     appId: "1:1027981883218:web:f62f32ffe8e5701f0f2c8b",
//     measurementId: "G-0YMF5ZZL8N"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyCtugd2wSyfj03n8nHmpPh9FnvdtsRQbxw",
  authDomain: "talk-ja-v3.firebaseapp.com",
  databaseURL: "https://talk-ja-v3.firebaseio.com",
  projectId: "talk-ja-v3",
  storageBucket: "talk-ja-v3.appspot.com",
  messagingSenderId: "274796102114",
  appId: "1:274796102114:web:fb4c81c11886b98baf39bb",
  measurementId: "G-7RWRW2YCZ7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const  provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;