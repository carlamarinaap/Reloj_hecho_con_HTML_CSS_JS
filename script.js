function horero() {
	var canvas = document.getElementById("horero");
	var contexto3 = canvas.getContext("2d");	
	contexto3.beginPath()
	contexto3.fillStyle = 'white';
	contexto3.moveTo(195, 200); 
	contexto3.lineTo(200, 130);
	contexto3.lineTo(205, 200);
	contexto3.arc(200,200,5,0,Math.PI,false)
	contexto3.fill();
}

function minutero() {
	var canvas = document.getElementById("minutero");
	var contexto2 = canvas.getContext("2d");
	contexto2.beginPath()
	contexto2.fillStyle = 'white';
	contexto2.moveTo(196, 200); 
	contexto2.lineTo(200, 80);
	contexto2.lineTo(204, 200);
	contexto2.arc(200,200,4,0,Math.PI,false)
	contexto2.fill();
}

function segundero() {
	var canvas = document.getElementById("segundero");
	var contexto1 = canvas.getContext("2d");
	contexto1.beginPath();
	contexto1.fillStyle = 'red';
	contexto1.moveTo(197, 200); 
	contexto1.lineTo(200, 50);
	contexto1.lineTo(203, 200);
	contexto1.arc(200,200,3,0,Math.PI,false)
	contexto1.fill();
}
horero()
minutero()
segundero()

function moverReloj(){
	var tiempo = new Date();
	var hora = 	tiempo.getHours();
	var minutos = tiempo.getMinutes();
	var segundos = tiempo.getSeconds();
	document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;
	var porcentajeSegundos = Math.PI/180*6*segundos 
	var porcentajeMinutos = Math.PI/180*minutos*6
	if (hora>=12){
		var porcentajeHoras = Math.PI/180*30*hora
	} else {
		var porcentajeHoras = Math.PI/180*30*hora/2
	}
	document.getElementById('segundero').style.transform = `rotate(${porcentajeSegundos}rad)`
	document.getElementById('minutero').style.transform = `rotate(${porcentajeMinutos}rad)`
	document.getElementById('horero').style.transform = `rotate(${porcentajeHoras}rad)`
	document.getElementById('audio').play();
}
moverReloj()
setInterval(moverReloj,1000)
