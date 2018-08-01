//Agregando configuracion de firebase en js actual
window.petips.iniciaFirebase();

//Cerrar sesión
btnLogout.addEventListener('click', e => {
  window.petips.signOut();
});

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

//Inicia CRUD
//CREATE
sendComent.addEventListener('click', e => {
    let msj = document.getElementById('myTextarea').value;
    if (msj != '') {
        db.collection("comentarios").add({
            coment: msj
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    } else {
        alert('Agrega un comentario para empezar a interactuar con la comunidad ☺');
    }
});

//READ
//crear variable de tabla
let seccionComentarios = document.getElementById("seccionComentarios");
//leer documentos
db.collection("comentarios").onSnapshot((querySnapshot) => {
  //limpiar la tabla
  seccionComentarios.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().coment}`);
    seccionComentarios.innerHTML += `<div class="mcard card">
                                       <div class="card-header">
                                         <img src="../images/user.png" alt="user">
                                         <h5 id="user">Usuario</h5>
                                      </div>
                                      <h6 class="coment">${doc.data().coment}</h6>
                                      <div class="footer">
                                        <button type="button" class="btn btn-outline-light"><img src="../images/love.png" alt="like"></button>
                                        <button type="button" class="btn btn-outline-light" onclick="funEdit('${doc.id}','${doc.data().coment}')"><img src="../images/edit.png" alt="Edit"></button>
                                        <button type="button" class="btn btn-outline-light" onclick="funDelete('${doc.id}')"><img src="../images/delete.png" alt="Delete"></button>
                                    </div>
                                  </div>`;
    });
});

//UPDATE
/*const editar = (id,mje) => {

document.getElementById("mje").value = mje;
let guardar = document.getElementById("guardar");
//crear evento onclick
guardar.onclick = function (){
  let washingtonRef = db.collection("comentarios").doc(id);
  //crear una variable para cada elemento que cambiara

  let mje = document.getElementById("mje").value;
  // hacer un update
return washingtonRef.update({
    coment: mje,
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

}
}*/

//DELETE
const funDelete = (comentId) => {
  const resp = confirm("¿Estas seguro de borrar este comentario?");
  if (resp === true) {
    db.collection("comentarios").doc(comentId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  } else {
    alert('Tranquilo aun no se borra ;)');
  }
}
