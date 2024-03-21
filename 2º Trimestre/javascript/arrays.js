var furbo = ["L.Messi", "C.Ronaldo", "Rivaldo", "Luis Fabiano", "J.Navas", "S.Ramos", "Ronaldhino"]

function muestra(){
    document.getElementById("resultado").innerHTML = furbo
};

function cadenasus(){
    x = furbo.pop();
    document.getElementById("cajatexto").innerHTML = x
};


function cadenaadd(){
   furbo[furbo.length] = document.getElementById("cajatexto").value;
};

function ordenar(){
     
    document.getElementById("resultado").innerHTML = furbo.sort();
}
function reverse(){
    furbo.sort();
    document.getElementById("resultado").innerHTML = furbo.reverse();
}
function buscar(){
    elemento = document.getElementById("cajatexto").value;
    let position = furbo.lastIndexOf(elemento) + 1;
    document.getElementById("resultado").innerHTML = elemento+ " está en " + position;
}