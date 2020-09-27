import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAbs72Tu2y1mMoC2wz0owLXbwtyh9jjb8M',
  authDomain: 'vc-steam.firebaseapp.com',
  databaseURL: 'https://vc-steam.firebaseio.com',
  projectId: 'vc-steam',
  storageBucket: 'vc-steam.appspot.com',
  messagingSenderId: '488962340943',
  appId: '1:488962340943:web:2750c50c8dd3672147d23a'
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
