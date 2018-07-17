window.funciones={
  inputNotEmpty: (str) => {
    if(str.length !==0)
    return true;
    else {
      return false;
    }
  },

};
module.exports=funciones;

function myFunction () {
  const comentario = document.getElementById("myTextarea").value;
  const lugaraimprimir = document.getElementById("coments-card");
  const nuevocoment = document.createElement('p');
  nuevocoment.innerHTML = comentario;
  lugaraimprimir.appendChild(nuevocoment);
}
