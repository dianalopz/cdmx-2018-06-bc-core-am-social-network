
firebase.initializeApp({
  apiKey: "AIzaSyAg0nsOtgWJ7bfS5dnQwljQTkJEI-ih3nQ",
    authDomain: "perfil-usuario-45d37.firebaseapp.com",
  projectId: "perfil-usuario-45d37"
});

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

boton1.addEventListener("click", e => {
//crear variable para cada elemento
//crear variables para cada elemento
let nombrep = document.getElementById("nombrep").value;
let nombrem = document.getElementById("nombrem").value;
let mascota = document.getElementById("mascota").value;
let sexo = document.getElementById("sexo").value;
let edad = document.getElementById("edad").value;
let descrip = document.getElementById("descrip").value;
//agregar documentos
let boton1 = document.getElementById("boton1");

	//agregar documento y id
	db.collection("users").add({
    name1: nombrep,
    name2: nombrem,
    pet: mascota,
    sex: sexo,
    age: edad,
    descript: descrip
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);

    document.getElementById("nombrep").value = " ";
    document.getElementById("nombrem").value = " ";
	document.getElementById("mascota").value = " ";
	document.getElementById("sexo").value = " ";
	document.getElementById("edad").value = " ";
	document.getElementById("descrip").value = " ";

})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
});
//crear variable de tabla
let tabla = document.getElementById("tabla");
//leer documentos
db.collection("users").onSnapshot((querySnapshot) => {
	//limpiar la tabla
    	tabla.innerHTML = " ";
    	querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name1}`);
        tabla. innerHTML += `
        <tr>
      <th scope="row">${doc.id}</th>
      <th scope="col">${doc.data().name1}</th>
      <th scope="col">${doc.data().name2}</th>
      <th scope="col">${doc.data().pet}</th>
      <th scope="col">${doc.data().sex}</th>
      <th scope="col">${doc.data().age}</th>
      <th scope="col">${doc.data().descript}</th>
      <th scope="col"><button class = "btn btn-danger" onclick = "eliminar('${doc.id}')">Eliminar</button></th>
      <th scope="col"><button class = "btn btn-warning" onclick = "editar('${doc.id}','${doc.data().name1}', '${doc.data().name2}', '${doc.data().pet}', '${doc.data().sex}','${doc.data().age}','${doc.data().descript}')">Editar</button></th>
    </tr>`
    });
});
//borrar datos
function eliminar(id){
	db.collection("users").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}
//editar datos
//crear funcion editar
const editar = (id,nombrep,nombrem,mascota,sexo,edad,descrip) => {

document.getElementById("nombrep").value = nombrep;
document.getElementById("nombrem").value = nombrem;
document.getElementById("mascota").value = mascota;
document.getElementById("sexo").value = sexo;
document.getElementById("edad").value = edad;
document.getElementById("descrip").value = descrip;
let boton = document.getElementById("boton");
//crear evento onclick
boton.onclick = function (){
	let washingtonRef = db.collection("users").doc(id);
	//crear una variable para cada elemento que cambiara

	let nombrep = document.getElementById("nombrep").value;
	let nombrem = document.getElementById("nombrem").value;
	let mascota = document.getElementById("mascota").value;
	let sexo = document.getElementById("sexo").value;
	let edad = document.getElementById("edad").value;
	let descrip = document.getElementById("descrip").value;

	// hacer un update
return washingtonRef.update({
    name1: nombrep,
    name2: nombrem,
    pet: mascota,
    sex: sexo,
    age: edad,
    descript: descrip
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

}
}
