function convertirTemperatura(grades){
    let valor = document.getElementById("grados").value;

    let resultado = 0;

    if (grades == "celcius"){

        resultado = (valor * 9/5) +32;
        document.getElementById("resultado").innerHTML = resultado + "ºC";

    }
    else{
        resultado = (valor -32) *5/9;
        document.getElementById("resultado").innerHTML = resultado + "ºF";
    }
    }