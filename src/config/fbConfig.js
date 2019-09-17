import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBKslWzHzcs-SdRRpptLa7Ecowby7lv2t4',
  authDomain: 'coderlust-project.firebaseapp.com',
  databaseURL: 'https://coderlust-project.firebaseio.com',
  projectId: 'coderlust-project',
  storageBucket: '',
  messagingSenderId: '810131254097',
  appId: '1:810131254097:web:5e4e9ddf4a64de66910170'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({
  timestampsInSnapshots: true
})

export default firebase
