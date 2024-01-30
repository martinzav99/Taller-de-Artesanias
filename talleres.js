let map;
$(document).ready(function () {
    map = createMap('mapa');
    var talleres = talleresDisponibles;
    $("#localizartaller").click(function () {
        if (layer){
            layer.clearLayers();
        }
        var markers = []
        for (let i = 0; i < talleres.length; i++) {
            markers.push(L.marker([talleres[i].lat, talleres[i].lon]));
        }
        layer = L.layerGroup(markers);
        layer.addTo(map);
    });
});
