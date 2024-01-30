/******************************************************************************
 * Función para crear un mapa.
 */
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
