function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";        
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
        
    }
    if (!validarEmail()){//Valido el correo
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    if (!validapassword()){
        document.getElementById("campo4").innerHTML = "La contraseña no cumple los requisitos de longitud o no coinciden"
        document.getElementsById("campo5").innerHTML = " La contraseña no cumple los requisitos de longitud o no coinciden"
    }
    if (!validaDNI()){
        document.getElementById("campo6").innerHTML = "Formato de DNI incorrecto"
    }
    return estanCorrectos;
}
/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
*/
function validarEmail(){              
	var valido;
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		valido=true;
	}else{
        valido=false;
	}
    return valido;

} 
function validapassword(){
    let clave1 = document.getElementById("password").value;
    let clave2 = document.getElementById("password2").value;
    let passwordOk = true //Cumple los requisitos establecidos//
    if (clave1.length<8 || (clave1!=clave2))
    passwordOk = false;
return passwordOk;
}
function validaDNI(){
var letra=('Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M');
var cadena = document.getElementById("dni").value
}