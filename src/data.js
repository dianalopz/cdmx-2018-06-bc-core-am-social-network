//login
var provider = new firebase.auth.GoogleAuthProvider();
//pegamos 1er linea del paso 5 firebase
//con jquery 
$('#login').click(function(){
	firebase.auth()
	.signInWithPopup(provider)
	.then(function(res){
		console.log(res.user);
		//guardaDatos(res.user);
		$('#login').hide();
		$('#root').append("<img src='"+res.user.photoURL+"'/>")
	});
});
//guardar los datos automaticamente
function guardaDatos(user){
	let usuario = {
		uid:user.uid,
		nombre:user.displayName,
		email:user.email,
		foto:user.photoURL
	}
	guardar en firebase
	firebase.database().ref("cuenta/"+user.uid)
	le pasa el objeto
	.set(usuario)
}
$('#guardar').click(function(){
	firebase.database().ref("datos")
	creamos un objeto
	.set({
		nombre:"BlisS",
		correo:"BlisS@gmail.com"
	})
});
aqui lee de la BD
firebase.database().ref("cuenta")
.on("child_added", function(s){
 let user = s.val();
 $('#root').append("<img width='10px' src='"+user.foto+"' />")})