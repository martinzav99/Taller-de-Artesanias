function validar() {
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let actividades = document.getElementById("actividades").value;
    let direccion = document.getElementById("dir").value;
    let horarios = document.getElementById("horarios").value;
    let nroTelefono = document.getElementById("nroTelefono").value;

    if ((nombre == "") || (descripcion == "") || (actividades == "") || (direccion == "") ||
        (horarios == "") || (nroTelefono == "")) {
        alert("Faltan rellenar campos");
        return true;
    } else {
        window.location.href = "registerExitoso.html";
    }
}