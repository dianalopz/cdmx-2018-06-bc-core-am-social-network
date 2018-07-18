
(function() {
// Initialize Firebase
  var config = {
   apiKey: "AIzaSyA3pDBsY2QsTHk1B3AsrOaqxlRQ5tAUNIk",
    authDomain: "redsocial-d4eaa.firebaseapp.com",
    databaseURL: "https://redsocial-d4eaa.firebaseio.com",
    projectId: "redsocial-d4eaa",
    storageBucket: "",
    messagingSenderId: "426801590412"
  };
  firebase.initializeApp(config);

const user = document.getElementById("user");
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");
//evento login
btnLogin.addEventListener("click", e => {
//get email and pass
const email = txtEmail.value;
const pass = txtPassword.value;
const auth = firebase.auth();
// entrar
const promise = auth.signInWithEmailAndPassword(email,pass);
promise
.catch (e => alert(e.message));
});

 //evento signup
btnSignUp.addEventListener("click", e => {
const email = txtEmail.value;
const pass = txtPassword.value;
const auth = firebase.auth();
user.style.display = "block";
btnLogin.style.display = "none";
// entrar
const promise = auth.createUserWithEmailAndPassword(email,pass);
promise
.catch (e => alert(e.message));
 });

//Cerrar sesion
btnLogout.addEventListener("click", e => {
	firebase.auth().signOut();
  //user.style.display = "none";
  user.innerHTML="hasta pronto";
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		console.log(firebaseUser.email);
user.innerHTML = "Bienvenido " + firebaseUser.email;
btnred.style.display = "block";
		btnLogout.classList.remove("hide");
	} else {
		console.log("not logged in");
		btnLogout.classList.add("hide");
	}
});

btnred.addEventListener("click", e => {
window.open('https://dianalopz.github.io/cdmx-2018-06-bc-core-am-social-network/src/views/Comentarios.html#');
}) ;
	 
}());



//login autenticacion con google
//var provider = new firebase.auth.GoogleAuthProvider();
//pegamos 1er linea del paso 5 firebase
//con jquery 
//$('#login').click(function(){
	//firebase.auth()
	//.signInWithPopup(provider)
	//.then(function(res){
		//console.log(res.user);
		//guardaDatos(res.user);
		//$('#login').hide();
		//$('#root').append("<img src='"+res.user.photoURL+"'/>")
	//});
////guardar los datos automaticamente
//function guardaDatos(user){
	//let usuario = {
		//uid:user.uid,
		//nombre:user.displayName,
		//email:user.email,
		//foto:user.photoURL
	//}
	//guardar en firebase
	//firebase.database().ref("cuenta/"+user.uid)
	//le pasa el objeto
	//.set(usuario)
//}
//$('#guardar').click(function(){
	//firebase.database().ref("datos")
	//creamos un objeto
	//.set({
		//nombre:"BlisS",
		//correo:"BlisS@gmail.com"
	//})
//});
//aqui lee de la BD
//firebase.database().ref("cuenta")
//.on("child_added", function(s){
// let user = s.val();
// $('#root').append("<img width='10px' src='"+user.foto+"' />")})