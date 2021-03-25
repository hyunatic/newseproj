import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const config = {
    apiKey: "AIzaSyDgUKSulrYq50m8_Tle1uvLsH_LZV7Mlss",
    authDomain: "secondlove-cc51b.firebaseapp.com",
    projectId: "secondlove-cc51b",
    storageBucket: "secondlove-cc51b.appspot.com",
    messagingSenderId: "1046105738786",
    appId: "1:1046105738786:web:e8dbd8bc929024205f447b",
    measurementId: "G-EXKKW36RRM"
  };

firebase.initializeApp(config)
firebase.firestore()

export default firebase
