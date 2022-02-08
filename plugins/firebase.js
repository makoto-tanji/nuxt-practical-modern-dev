import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyCn1RV9BKdl_EwzJlkVJLrxPdi5cx15YqU",
      authDomain: "practical-modern-dev-35378.firebaseapp.com",
      projectId: "practical-modern-dev-35378",
      storageBucket: "practical-modern-dev-35378.appspot.com",
      messagingSenderId: "525093460221",
      appId: "1:525093460221:web:779880c98dd60b94dbc694",
      measurementId: "G-LQ5HXD29FK"
    }
  )
  
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
}
export default firebase