$(document).ready(function () {
	var url = Config2.url2;
	const HTMLResponse = document.querySelector("#validarDireccion");

	var map = createMap('mapid');

	$("#NDD").click(function () {
		var direccion = $("#dir").val();
		fetch(url + direccion)
			.then(datos => datos.json())
			.then(datos => datos['direccionesNormalizadas'])

			.then(datos => {

				var tamano = Object.keys(datos).length;
				if (tamano == 1) {

					HTMLResponse.innerHTML = `direccion valida`;

					var longitud = Number(datos.map(data => `${data.coordenadas.y}`));
					var latitud = Number(datos.map(data => `${data.coordenadas.x}`));
					

					var direccionUnica = [longitud, latitud];
					map.flyTo(direccionUnica, 15);

					var marcador = L.marker(direccionUnica);
					marcador.addTo(map);
				}
				else if (tamano > 1) {
					const tp1 = datos.map(data => `<option>${data.direccion}</option>`);
					HTMLResponse.innerHTML = `direccion incompleta, por favor seleccionar una opcion: <br> <select>${tp1}</select>`;
					var aux = document.getElementById("validarDireccion");


				}
				else {
					HTMLResponse.innerHTML = `direccion invalida,ingresar una direccion`; // direccion invalida,ingresar una direccion
				}
			});

	});

});