function validar() {
    let producto = document.getElementById("producto").value;
    let descripcion = document.getElementById("descripcion").value;
    let nombreContacto = document.getElementById("nombreContacto").value;
    let email = document.getElementById("email").value;
    let precio = document.getElementById("precio").value;
    let nroTelefono = document.getElementById("nroTelefono").value;

    if ((producto == "") || (descripcion == "") || (nombreContacto == "") || (email == "") ||
        (nroTelefono == "")) {
        alert("Faltan rellenar campos");
        return true;
    } else {
        window.location.href = "publicacionExitosa.html";
    }
}