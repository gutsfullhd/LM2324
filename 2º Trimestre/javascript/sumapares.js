var numbers = [];


function add(){
    numbers[numbers.length] = document.getElementById("caja").value
    document.getElementById("resultado").innerHTML = numbers;
}

function suma(){
    
    var suma = 0;
    for (var i = 0; i < numbers.length; i++) {
        if ( numbers[i] % 2 === 0)
        suma += parseFloat(numbers[i])

        document.getElementById("resultado").innerHTML = suma;




}
}
