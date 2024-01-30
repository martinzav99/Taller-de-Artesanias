let publicacionesDisponibles = [
    {
        "titulo": "mate",
        "precio": 2000,
        "descripcion": "Muy lindos mates",
        "img":"https://d3ugyf2ht6aenh.cloudfront.net/stores/872/997/products/mate-botanico-21-c2e962a5bb9ddc388116181750683798-1024-1024.jpeg"
    },
    {
        "titulo": "bufanda",
        "precio": 300,
        "descripcion": "Muy linda bufanda",
        "img" : "https://d3ugyf2ht6aenh.cloudfront.net/stores/986/986/products/20200602_1524411-c41b1d5e1883859bc215911251692922-1024-1024.jpg"
    },
    {
        "titulo": "jarron",
        "precio": 0,
        "descripcion": "Muy lindo jarron, se vende en ACayuyo 2020",
        "img" : "https://thumbs.dreamstime.com/z/jarr%C3%B3n-artesanal-de-cer%C3%A1mica-pintada-color-aislado-en-blanco-incluido-el-camino-recorte-mano-colores-p%C3%A1lidos-ar%C3%A1bigos-kolla-184825260.jpg"
    }

];
    function filtrar(arreglo, busqueda){
        let devolucion = arreglo.filter(function(ele){
            return (ele.titulo.includes(busqueda));
        })
        return devolucion;
    }


function mostrarPublicaciones() {
    document.getElementById("contenedor-resultados").innerHTML = "";
    let publicacionesFiltradas = filtrar(publicacionesDisponibles,document.getElementById("busquedaIn").value);
    for (let i = 0; i < publicacionesFiltradas.length; i++) {
        let elementResults = document.getElementById("contenedor-resultados");
        let publicacion = document.createElement("div");
        publicacion.className = "publicacion";
        let imgsrc = publicacionesFiltradas[i].img;
        let titleV = document.createElement("h3");
        let precioV = document.createElement("h4");
        let descripcionV = document.createElement("small");
        let nombre = publicacionesFiltradas[i].titulo;//variable
        let precio = "$".concat(publicacionesFiltradas[i].precio); //variable
        let descripcion = publicacionesFiltradas[i].descripcion; //variable
        titleV.innerText = nombre;
        precioV.innerText = precio;
        descripcionV.innerText = descripcion;
        let img = document.createElement("img");
        img.src = imgsrc;
        publicacion.appendChild(img);
        publicacion.appendChild(titleV);
        publicacion.appendChild(precioV);
        publicacion.appendChild(descripcionV);
        elementResults.append(publicacion);
        console.log(elementResults);
    }
}
var createMap = function(nodeId) {
    // Ubicación de la UNGS.
    var ungsLocation = [-34.5221554, -58.7000067];

    // Creación del componente mapa de Leaflet.
    var map = L.map(nodeId).setView(ungsLocation, 15);

    // Agregamos los Layers de OpenStreetMap.
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
}
