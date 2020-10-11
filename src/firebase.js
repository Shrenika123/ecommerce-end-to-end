// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDQAHr_BX6XVSvAmtW8AgfFD0b4zxie4LY",
    authDomain: "ecommerce-d8c84.firebaseapp.com",
    databaseURL: "https://ecommerce-d8c84.firebaseio.com",
    projectId: "ecommerce-d8c84",
    storageBucket: "ecommerce-d8c84.appspot.com",
    messagingSenderId: "407827947850",
    appId: "1:407827947850:web:06f127db4a1cb0ee53a1b3",
    measurementId: "G-271NKYS8KK"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()

  export {db,auth}


  