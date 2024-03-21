/*
function ocultarrojo(){
document.getElementById("rojo").style.visibility = "hidden"
}
function ocultarazul(){
    document.getElementById("azul").style.visibility = "hidden"
}
function ocultarverde(){
    document.getElementById("verde").style.visibility = "hidden"
}
*/
/*
function ocultar(caja){
    document.getElementById(caja).style.visibility = "hidden";
}
function mostrar(caja){
    document.getElementById(caja).style.visibility = "visible";
}*/
/*Version con un solo boton*/

function ocultar_o_mostrar(caja){
    if(document.getElementById(caja).style.visibility=="visible" || document.getElementById(caja).style.visibility=="" )
    document.getElementById(caja).style.visibility = "hidden";
    else
    document.getElementById(caja).style.visibility = "visible";
}
