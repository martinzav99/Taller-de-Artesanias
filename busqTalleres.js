let talleresDisponibles = [
    {
        "id": 1,
        "nombre": "Gardel del pueblo",
        "descripcion": "es un taller de baile",
        "direccion": "Mozart 2319",
        "horarios": "Lun. a Vie. de 8hs a 20hs",
        "telefono": "1138252694",
        "actividad": "bailar tango",
        "img": "https://s3-us-west-2.amazonaws.com/minisitios/revistaamigapl/wp-content/uploads/2019/08/tango-3-min.jpg",
        "categoria": "baile",
        "lat": -34.521891,
        "lon": -58.706121
    },
    {
        "id": 2,
        "nombre": "zapateos alegres",
        "descripcion": "es un taller de baile",
        "direccion": "Sarratea 900-602",
        "horarios": "Lun. a Sab. de 8hs a 12hs",
        "telefono": "1198534595",
        "actividad": "bailar chacarera",
        "img": "http://www.noticias.unsl.edu.ar/wp-content/uploads/2018/05/festival-de-folclore-saravia-1-1000x600.jpg",
        "categoria": "baile",
        "lat": -34.525780,
        "lon": -58.702806
    },
    {
        "id": 3,
        "nombre": "La caricatura",
        "descripcion": "es un taller de dibujo",
        "direccion": "Dr. Juan A. Mazza 2395",
        "horarios": "Mie. y Vie. de 12hs a 18hs",
        "telefono": "1163538795",
        "actividad": "dibujar al agua",
        "img": "https://elcuboarte.com/wp-content/uploads/2019/01/dibujo-y-pintura.png",
        "categoria": "dibujo",
        "lat": -34.519177,
        "lon": -58.704448
    },
    {
        "id": 4,
        "nombre": "caravaggio moderno",
        "descripcion": "es un taller de pintura",
        "direccion": "Carlos Pellegrini 393",
        "horarios": "Lun. de 10hs a 22hs",
        "telefono": "1161534511",
        "actividad": "pintar cuadros pequeños",
        "img": "https://www.gba.gob.ar/sites/default/files/museopettoruti/noticias/busquetsweb.jpg",
        "categoria": "dibujo",
        "lat": -34.524985,
        "lon": -58.707173
    },
    {
        "id": 5,
        "nombre": "vista de luz",
        "descripcion": "es un taller de turismo",
        "direccion": "Dante Alighieri 2305",
        "horarios": "Lun. a Vie. de 8hs a 20hs",
        "telefono": "1128994552",
        "actividad": "recorrido por pueblos",
        "img": "https://portaldeturismo.pe/wp-content/uploads/2019/09/Taller-URP-qhapaq-%C3%B1an.jpg",
        "categoria": "turismo",
        "lat": -34.523672,
        "lon": -58.709040
    },
    {
        "id": 6,
        "nombre": "La iluminada",
        "descripcion": "es un taller de turismo",
        "direccion": "Velazquéz 2308",
        "horarios": "Sab. y Dom. de 8hs a 12hs",
        "telefono": "1125538422",
        "actividad": "recorrido por ciudad",
        "img": "http://www.eldiariodeturismo.com.ar/wp-content/uploads/2021/09/17-09-Se-realizo-la-Jornada-Taller-Turistico.jpg",
        "categoria": "turismo",
        "lat": -34.522647,
        "lon": -58.707962
    },
    {
        "id": 7,
        "nombre": "El arca de los juguetes",
        "descripcion": "es un taller de juguetes",
        "direccion": "Velazquéz 1882",
        "horarios": "Lun. a Vie. de 6hs a 21hs",
        "telefono": "1139634542",
        "actividad": "hacer juguetes de madera",
        "img": "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2018/12/13/15447138637452.jpg",
        "categoria": "juguetes",
        "lat": -34.524517,
        "lon": -58.705398
    },
    {
        "id": 8,
        "nombre": "Tela jugaste",
        "descripcion": "es un taller de juguetes",
        "direccion": "Jose Uriburu 180",
        "horarios": "Lun. a Jue. de 8hs a 16hs",
        "telefono": "1148554696",
        "actividad": "hacer juguetes de tela",
        "img": "http://tiemponline.com/wp-content/uploads/2019/05/juguetes-de-tela.jpg",
        "categoria": "juguetes",
        "lat": -34.527771,
        "lon": -58.706342
    },
    {
        "id": 9,
        "nombre": "La cabaña",
        "descripcion": "es un taller de antiguedades",
        "direccion": "Eva Perón 735",
        "horarios": "Mar. a Dom. de 12hs a 00hs",
        "telefono": "1155532495",
        "actividad": "mostrar objetos pequeños",
        "img": "https://heraldodemexico.com.mx/wp-content/uploads/2018/09/nc_luis_hernandez_relojero19.jpg",
        "categoria": "antiguedades",
        "lat": -34.522502,
        "lon": -58.706750
    },
    {
        "id": 10,
        "nombre": "Antiguedades Roman",
        "descripcion": "es un taller de antiguedades",
        "direccion": "Romain Rolland 1714",
        "horarios": "Mar. a Sab. de 12hs a 22hs",
        "telefono": "1138535322",
        "actividad": "mostrar objetos grandes",
        "img": "https://photo620x400.mnstatic.com/c31dda5f5cc7c366689f701866573ce4/tiendas-de-antiguedades.jpg",
        "categoria": "antiguedades",
        "lat": -34.523899,
        "lon": -58.702040
    }
];
let layer;

function filtrar(arreglo, busqueda){
    let devolucion = arreglo.filter(function(ele){
        return ((((ele.nombre).toLowerCase()).includes(busqueda.toLowerCase()))&&
        ((ele.categoria==document.getElementById("categoria").value)||(document.getElementById("categoria").value=="cualquiera")));
    })
    return devolucion;
}

function mostrarPunto(num){
    let publicacion = talleresDisponibles.filter(ele =>{
        return ele.id===num;
    })
    if (layer){
        layer.clearLayers();
    }
    var marker = L.marker([publicacion[0].lat,publicacion[0].lon]);
    layer = L.layerGroup([marker]);
    layer.addTo(map);
    marker.bindPopup(publicacion[0].direccion).openPopup();
    map.flyTo([publicacion[0].lat,publicacion[0].lon],15);
}

function buscar() {
    let talleresFiltrados = filtrar(talleresDisponibles,document.getElementById("busqueda").value);
    document.getElementById("contenedor-resultados").innerHTML="";
    for (let i=0; i < talleresFiltrados.length; i++) {
        let elementResults = document.getElementById("contenedor-resultados");
        console.log(elementResults);
        let publicacion = document.createElement("div");
        publicacion.setAttribute("id", "publicacion".concat(talleresFiltrados[i].id+1));
        publicacion.setAttribute("onclick","mostrarPunto("+talleresFiltrados[i].id+")");
        publicacion.className = "publicacion";
        let imgsrc = talleresFiltrados[i].img;
        let nombreV = document.createElement("h3");
        let descripcionV = document.createElement("h4");
        let direccionV = document.createElement("small");
        let horariosV = document.createElement("small");
        let telefonoV = document.createElement("small");
        let actividadV = document.createElement("small");
        let categoriaV = document.createElement("small");
        let nombre = talleresFiltrados[i].nombre;//variable
        let descripcion = talleresFiltrados[i].descripcion; //variable
        let direccion = talleresFiltrados[i].direccion;
        let horarios = talleresFiltrados[i].horarios;
        let telefono = talleresFiltrados[i].telefono;
        let actividad = talleresFiltrados[i].actividad;
        let categoria = talleresFiltrados[i].categoria;
        nombreV.innerText = nombre;
        descripcionV.innerText = descripcion;
        direccionV.innerText = direccion;
        horariosV.innerText = horarios;
        telefonoV.innerText = telefono;
        actividadV.innerText = actividad;
        categoriaV.innerText = categoria;
        let img = document.createElement("img");
        img.src = imgsrc;
        publicacion.appendChild(img);
        publicacion.appendChild(nombreV);
        publicacion.appendChild(descripcionV);
        publicacion.appendChild(horariosV);
        publicacion.appendChild(telefonoV);
        publicacion.appendChild(actividadV);
        publicacion.appendChild(categoriaV);
        elementResults.append(publicacion);

    }
    
}
