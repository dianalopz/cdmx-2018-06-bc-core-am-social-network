//Comentarios
function myFunction () {
  const comentario = document.getElementById("myTextarea").value;
  const lugaraimprimir = document.getElementById("coments-card");
  const nuevocoment = document.createElement('p');
  nuevocoment.innerHTML = comentario;
  lugaraimprimir.appendChild(nuevocoment);
}
