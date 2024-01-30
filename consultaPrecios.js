$(document).ready(function() 
{   
	var url = Config.url;
	const HTMLResponse = document.querySelector("#recomendacion"); 

    $("#SDP").click(function() 
    {
    	var nombreProducto = $("#producto").val();
    	fetch(url + nombreProducto)
     	.then(datos => datos.json())
     	.then(datos =>datos['results'])
     	.then(datos =>
		{
			const formato = datos.map(data => `<li style="color:#FFFFFF"> ${data.title}, ${data.currency_id} ${data.price}. <img src=${data.thumbnail} width="90" height="90"> </li>`);
			HTMLResponse.innerHTML = `<ul> ${formato} </ul>`;	
		});

    });
});
