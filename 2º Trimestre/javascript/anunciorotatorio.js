let anuncios = ["banner0.png","banner1.png","banner3.png","banner4.png","banner5.png"]
let enlaces = ["https://store.dsautomobiles.es/configurable","https://www.elcorteingles.es/supermercado/","https://www.elcorteingles.es/daitsu/electrodomesticos/aire-acondicionado/","https://www.madridhifi.com","https://launidad.movistarplus.es/?dis_c=331187589&dclid=CL-Lt9zx4_YCFdZEHQkdLpkExQ","https://www.tikamoon.es"]

function random(min,max){ return Math.floor((Math.random()*(max - min +1)) + min);}





setInterval(function rotatorio(){
 let anuncio = random(0,anuncios.length -1)
 document.getElementById("anuncio").src = "../images/" + anuncios[anuncio]

} ,3000);
 