//console.log("agregado");
firebase.initializeApp({
  apiKey: "AIzaSyCMYGoheuYje9VphBLadCAI8zqXLA5xCME",
  authDomain: "firestore-96f43.firebaseapp.com",
   projectId: "firestore-96f43"
});

//GUARDAR DATOS

publicar=document.getElementById("publicar");
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

//se crea evento "publicar"
publicar.addEventListener("click", e=>{
//console.log("funciona");
//se crean variables para cada elemento
var comentario = document.getElementById("comentario").value;
//console.log(comentario);
//agregar documentos
//agrega coleccion de usuarios y agrega con "add" un id automatico distito por cada uno 
//de los documentos agregados 
db.collection("listcoments").add({
	//crear una variable por cada uno de los elementos
    //first: comentario,
    //last: "Lovelace",
    comentario: comentario
})
//se crea otra coleccion "user" para el perfil de la mascota y crea un id distinto para cada documento creado
//db.collection("user").add({
	//crear una variable por cada uno de los elementos
    //name: ,
    //age : "Lovelace",
    //born: 
//})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    //una vez que se haya guardado cada uno de los elementos del formulario el dato se genera un string vacio
    document.getElementById("comentario").value="";
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

});

/////////////////////LEER DOCUMENTOS
//llama a db, llama a la coleccion, get y then cuando es exitoso
//el for each se repite por cada documento 
/////////CONFIGURAR EN TIEMPO REAL (CONSULTAR DATOS/OBTENER actualizaciones EN TIEMPO REAL)
//ocupar onSnapshot, un agente de escucha, cada vez que se haga un cambio lo va a reflejar en la pagina
var publicacion = document.getElementById("publicacion");
//esto seria para una tabla que muestra los datos del usuario
//var tabla = document.getElementById("tabla");
db.collection("listcoments").onSnapshot((querySnapshot) => {
    //limpiar o no limpiar con:
    
//o si es el caso tabla.innerHTML="";
//se repite para cada uno de los documentos, para cada ciclo se crea cada dato
    querySnapshot.forEach((doc) => {
    	//para acceder a cada elemento de la data se pone .comentario
        console.log(`${doc.id} => ${doc.data().comentario}`);
        //va pintando cada dato uno abajo del otro
        //se crea otro campo para eliminar y editar
        //se agrega un evento onclic en cada boton
        publicacion.innerHTML+=`<p>${doc.id}<b>${doc.data().comentario}</b></p>
        <p><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button</p>
        <p><button class="btn btn-warning boton" onclick = "editar('${doc.id}')">Editar</button</p>`
        /*esto seria para una tabla que muestra los datos del usuario
		tabla.innerHTML+=`<tr>
      <th scope="row">${doc.id}</th>
      <td>${doc.data().nombre}</td>
      <td>${doc.data().edad}</td>
      <td>${doc.data().tipo}</td>
    </tr>`
    */

    });
});
//BORRAR DATOS(SE COPIA LA DOCUMENTACION DE CLOUD FIRESTORE )
//creamos funcion eliminar
const eliminar = (id) => {
	if(confirm("¿está seguro que desea eliminar esta publicación?")){
			db.collection("listcoments").doc(id).delete().then(function() {
    		console.log("Document successfully deleted!");
    		publicacion.innerHTML="";
			}).catch(function(error) {
   			 console.error("Error removing document: ", error);
			});
	}
	//else { alert("operacion cancelada");}
};

//editar comentarios
const editar = (id, comentario) => {
	let boton = document.getElementsById("boton");
	boton.innerHTML = "editar"
console.log("hola")
var washingtonRef = db.collection("listcoments").doc(id);

// Set the "capital" field of the city 'DC'
return washingtonRef.update({
    comentario: comentario
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
}





