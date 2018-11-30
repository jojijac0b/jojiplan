import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDQwj4LMQPXhUCNji4EF3mqfFdSmmIUdes",
  authDomain: "jojiplan.firebaseapp.com",
  databaseURL: "https://jojiplan.firebaseio.com",
  projectId: "jojiplan",
  storageBucket: "jojiplan.appspot.com",
  messagingSenderId: "802566755793"
};
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase
