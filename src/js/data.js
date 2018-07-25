(function() {
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCf9mU0KwvA6Yz49EbBIu8LFKQqVVqZTxw",
      authDomain: "petips-bb746.firebaseapp.com",
      databaseURL: "https://petips-bb746.firebaseio.com",
      projectId: "petips-bb746",
      storageBucket: "petips-bb746.appspot.com",
      messagingSenderId: "907345959081"
    };

    firebase.initializeApp(config);

//Evento login con correo y contraseña
btnLogin.addEventListener("click", e => {
//Obtiene email and password
const emailLogin = document.getElementById("txtEmailLogin").value;
const passLogin = document.getElementById("txtPasswordLogin").value;
//Pasa a la autenticacion de firebase
firebase.auth().signInWithEmailAndPassword(emailLogin,passLogin)
.then(result => {
       location.href = ("views/Comentarios.html");
     })
.catch (e => alert(e.message));
});

//Evento login Google
btnLoginGoogle.addEventListener("click", e => {
//Pasa a la autenticacion de firebase primero validando si ya existe un usuario
if (!firebase.auth().currentUser) {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithPopup(provider).then(result => {
    location.href = ("views/Comentarios.html");
  })
  .catch (e => alert(e.message));
} else {
      firebase.auth().signOut();
    }
});

//Evento login con Facebook
btnLoginFB.addEventListener("click", e => {
//Pasa a la autenticacion de firebase primero validando si ya existe un usuario
if (!firebase.auth().currentUser) {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile');
  firebase.auth().signInWithPopup(provider).then(result => {
    location.href = ("views/Comentarios.html");
  })
  .catch (e => alert(e.message));
} else {
      firebase.auth().signOut();
    }
});

}());
