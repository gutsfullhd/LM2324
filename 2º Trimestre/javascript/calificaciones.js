var notas =  []

function anadir(){
    var grades = parseFloat(document.getElementById("caja").value);
    if (isNaN(grades)){
        document.getElementById("resultado").innerHTML = "No valido debe ser una cifra"
    }
    else{
            if (grades > 10 || grades < 0){ 
                document.getElementById("resultado").innerHTML = "No valido"
            }
            else{
                notas[notas.length] = parseFloat(document.getElementById("caja").value)
                document.getElementById("resultado").innerHTML = notas
            }
        }        
}


function borrar(){
    for (i in notas+1){
        notas.pop()
    }
    document.getElementById("resultado").innerHTML = notas
    document.getElementById("media").innerHTML = notas

}


function media(){
    
   let total = 0.0;
   for(var i=0; i<notas.length; i++) {
    total += notas[i];
   }
   total = total/notas.length;
   document.getElementById("media").innerHTML = total.toFixed(2);
}

 