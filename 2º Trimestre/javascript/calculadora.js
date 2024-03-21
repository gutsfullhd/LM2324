var number = []

function muestra(){
    document.getElementById("resultado").innerHTML = number
};

function anadir(){
    number[number.length] = document.getElementById("caja").value
};

function sumar(){

    var suma = 0;
    for (var i = 0; i < number.length; i++) {
      suma += parseFloat(number[i]);

}

document.getElementById("resultado").innerHTML = suma;

}
 
    
function multiplicar(){

var multiplicacion = 1
for(var i = 0; i < number.length; i++){
    multiplicacion *= parseFloat(number[i]);
}
document.getElementById("resultado").innerHTML = multiplicacion;


}
