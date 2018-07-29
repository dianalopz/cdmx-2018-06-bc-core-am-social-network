//Agregando configuracion de firebase en js actual
window.petips.firebase();

//Cerrar sesión
btnLogout.addEventListener('click', e => {
  window.petips.signOut();
});

//nuevo comentario
const comentario = document.getElementById("myTextarea");
//boton publicar
const buttonPublicar = document.getElementsByTagName("button")[0];
//seccion donde se van acumulando los comentarios
const muro = document.getElementById("coments-card");
//crear nuevo comentario
const createNewComent = (comentString) => {
//crear nuevo elemento
const listComents = document.createElement("ul");
  let label = document.createElement("label");
  //crear area para editar comentario
  let editInput = document.createElement("input");
  //crear boton para editar comentario
  let editButton = document.createElement("button");
  //crear boton para eliminar comentario
  let deleteButton = document.createElement("button");
  //indicar que el elemento del area para editar es tipo texto
  editInput.type = "text";
  //declarar que el boton editar tenga la leyenda "Edit"
  editButton.innerText = "Edit";
  //establecer que tendra  class="edit"
  editButton.className = "edit";
  //declarar que el boton editar tenga la leyenda "Delete"
  deleteButton.innerText = "Delete";
  //establecer que tendra  class="delete"
  deleteButton.className = "delete";
  //agregar al elemento div, el texto ingresado en la textarea
  label.innerText = comentString;
 //se agrega a cada nuevo elemento div (nuevo comentario,boton de editar, y eliminar)
  listComents.appendChild(label);
  listComents.appendChild(editInput);
  listComents.appendChild(editButton);
  listComents.appendChild(deleteButton);
  //esta funcion retorna todos los comentarios hechos en el muro
  return listComents;
}
//funcion agregar nuevo comentario
let publicar = function() {
  //se crea un nuevo div con cada comentario ingresado en myTextarea
  let listComents = createNewComent(comentario .value);
  //agregar el div al muro
  muro.appendChild(listComents);
// se adjunta evento a elemento listcoments
guardarCambios(listComents);
  comentario.value = "";
}
//Editar comentario
let editarComentario = function() {
  //se añade el elemento de la lista de taresas a taresa completadas
  let listComents = this.parentNode;
  let editInput = listComents.querySelector("input[type=text]");
  let label = listComents.querySelector("label");
  let containsClass = listComents.classList.contains("editMode");
  let editButton = listComents.getElementsByTagName("button")[0];
  //si la clase del padre es .editMode
  if (containsClass) {
    // Cambiar de .editMode
    // el texto de la etiqueta se convierte en el valor de la entrada
    label.innerText = editInput.value;
    editButton.innerText = "Edit";
    //else
  } else {
    // Cambiar a .editMode
    // el valor de entrada se convierte en el texto de la etiqueta
    editInput.value = label.innerText;
    editButton.innerText = "save";
  }

// Alternar .editMode en el padre
  listComents.classList.toggle("editMode");
}
//Eliminar un comentario
let eliminaComentario = function() {
  let listComents = this.parentNode;
  let ul = listComents.parentNode;
  //eliminar el elemento del div padre
  ul.removeChild(listComents);
}

let guardarCambios = function(e) {

  let editButton = e.querySelector("button.edit");
  let deleteButton = e.querySelector("button.delete");
  //save editarComentario to edit button
  editButton.onclick = editarComentario;
  //save eliminaComentario to delete button
  deleteButton.onclick = eliminaComentario;
  //save checkBoxEventHandler to checkbox
  //checkBox.onchange = checkboxEventHandler;
}
buttonPublicar.addEventListener("click", publicar);
