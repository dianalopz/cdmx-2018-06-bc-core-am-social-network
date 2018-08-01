//Agregando configuracion de firebase en js actual
window.petips.iniciaFirebase();

//Evento registro nuevo usuario con correo y contraseña
btnSignUp.addEventListener('click', e => {
  const emailSignUp = document.getElementById('txtEmailSignUp').value;
  const passwordSignUp = document.getElementById('txtPasswordSignUp').value;
  //Envia parametros a funcion de registro
  window.petips.newUser(emailSignUp, passwordSignUp);
});

//Evento login con correo y contraseña
btnLogin.addEventListener('click', e => {
  const emailLogin = document.getElementById('txtEmailLogin').value;
  const passLogin = document.getElementById('txtPasswordLogin').value;
  //Envia parametros a funcion de logeo
  window.petips.loginWithEmail(emailLogin, passLogin);
});

//Evento login con Google
btnLoginGoogle.addEventListener('click', e => {
  window.petips.authenticationWithGoogle();
});

//Evento SignUp Google
btnSignUpGoogle.addEventListener('click', e => {
  window.petips.authenticationWithGoogle();
});

//Evento login con Facebook
btnLoginFB.addEventListener('click', e => {
  window.petips.authenticationWithFacebook();
});

//Evento SignUp Facebook
btnSignUpFB.addEventListener('click', e => {
  window.petips.authenticationWithFacebook();
});
