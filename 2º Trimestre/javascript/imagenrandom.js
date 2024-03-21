let escudos=["lakers.png","miami.png","nets.png", "celtics.png","cavaliers.png"]

function random(min,max){ return Math.floor((Math.random()*(max - min +1)) + min);}
   



 function randomescudo(){ let shield = random(0,escudos.length - 1)
document.getElementById("escudo").src = "../images/" + escudos[shield];

}

/*si tengo la carpeta de imagenes en otro lado tenfo que poner ../ para subir la imagenes */