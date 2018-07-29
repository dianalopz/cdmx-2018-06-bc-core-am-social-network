window.petips = {
  //Initialize Firebase
  firebase: () => {
    //Apis firebase
    var config = {
      apiKey: 'AIzaSyCf9mU0KwvA6Yz49EbBIu8LFKQqVVqZTxw',
      authDomain: 'petips-bb746.firebaseapp.com',
      databaseURL: 'https://petips-bb746.firebaseio.com',
      projectId: 'petips-bb746',
      storageBucket: 'petips-bb746.appspot.com',
      messagingSenderId: '907345959081'
    };
    //Agregando apis a configuracion incial
    firebase.initializeApp(config);
  },

  //Registro de nuevo usuario mail
  newUser: (emailSignUp, passwordSignUp) => {
    firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
      .then(result => {
        const user = firebase.auth().currentUser;
        alert('Bienvenido a Petips');
        location.href = ('views/Comentarios.html');
      })
      .catch (e => alert(e.message))
  },

  //Login con mail
  loginWithEmail: (emailLogin, passLogin) => {
    if(emailLogin != '' && passLogin != '') {
      firebase.auth().signInWithEmailAndPassword(emailLogin, passLogin)
        .then(result => {
          location.href = ('views/Comentarios.html');
        })
        .catch (e => alert(e.message));
    } else {
      alert('Ingresa tu correo y contraseña para continuar');
    }
  },

  //Login con Google
  loginWithGoogle: () => {
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
  },

  //Login con Facebook
  loginWithFacebook: () => {
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
  },

  //Cerrar sesión
  signOut: () => {
    firebase.auth().signOut()
      .then(result => {
        alert('Hasta pronto Petlover ♥')
        location.href = ('../index.html');
      })
      .catch (e => alert(e.message));
  }
};
