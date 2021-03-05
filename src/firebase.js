import firebase from 'firebase/app';

import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAY0n0HtBnczDxnLQmYQgMLKnOK2swLZbI",
  authDomain: "littlewins-92a66.firebaseapp.com",
  projectId: "littlewins-92a66",
  storageBucket: "littlewins-92a66.appspot.com",
  messagingSenderId: "148027672827",
  appId: "1:148027672827:web:bc5acee6583da5e565085e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;