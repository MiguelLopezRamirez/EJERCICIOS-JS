// Expresiones Regulares:
// Crea una función que valide si una cadena de texto es un correo electrónico válido

let expresion = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
function validacionCorreo(str) {     

    
    if (str.match(expresion)){
        console.log("Correo valido"); 
    }else{
        console.log("Correo invalido");
    }

}

validacionCorreo("correo@google.com")
validacionCorreo("cor.reo@google.com")