
firebase.initializeApp({
  apiKey: "AIzaSyAg0nsOtgWJ7bfS5dnQwljQTkJEI-ih3nQ",
    authDomain: "perfil-usuario-45d37.firebaseapp.com",
  projectId: "perfil-usuario-45d37"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
//agregar documentos
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});