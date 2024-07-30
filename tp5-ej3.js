/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.
 */
const arrayTarea = [];
const Mensaje = document.createElement("p");
const Lista = document.createElement("ol");
Lista.innerHTML = "LISTA DE TAREAS:";
function mostrarLista() {
  Lista.innerHTML = "LISTA DE TAREAS:";
  arrayTarea.forEach((item) => (Lista.innerHTML += `<li>${item} </li>`));
  return document.querySelector("main").appendChild(Lista);
}
function comprobarTarea(tarea) {
  if (arrayTarea.includes(tarea)) {
    return true;
  } else {
    return false;
  }
}
mostrarLista();
function addTarea() {
  if (
    document.querySelector("input").value != null &&
    document.querySelector("input").value != undefined &&
    document.querySelector("input").value != ""
  ) {
    if (!comprobarTarea(document.querySelector("input").value)) {
      arrayTarea.push(document.querySelector("input").value);
      Mensaje.innerHTML = "La tarea fue añadida exitosamente!";

      document.querySelector("main").appendChild(Mensaje);
    } else {
      Mensaje.innerHTML = "La tarea ya existe";
      document.querySelector("main").appendChild(Mensaje);
    }
  } else {
    Mensaje.innerHTML = "no ingresó ninguna tarea";
    document.querySelector("main").appendChild(Mensaje);
  }
  mostrarLista();
}
function deleteTarea() {
  if (
    document.querySelector("input").value != null &&
    document.querySelector("input").value != undefined &&
    document.querySelector("input").value != ""
  ) {
    if (comprobarTarea(document.querySelector("input").value)) {
      for (let i = 0; i < arrayTarea.length; i++) {
        if (arrayTarea[i] == document.querySelector("input").value) {
          arrayTarea.splice(i, 1);
        }
      }
      Mensaje.innerHTML = "Tarea borrada exitosamente!";
      document.querySelector("main").appendChild(Mensaje);
    } else {
      Mensaje.innerHTML = "No existe esa tarea";
      document.querySelector("main").appendChild(Mensaje);
    }
  } else {
    Mensaje.innerHTML = "no ingresó ninguna tarea";
    document.querySelector("main").appendChild(Mensaje);
  }
  mostrarLista();
}
const formulario = document.querySelector("form");
const botonAddTarea = document.querySelector(".btn-info");
botonAddTarea.addEventListener("click", addTarea);
const botonDeleteTarea = document.querySelector(".btn-danger");
botonDeleteTarea.addEventListener("click", deleteTarea);
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
});
