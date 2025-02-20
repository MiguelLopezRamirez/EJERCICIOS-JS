// Expresiones Regulares:
// Crea una función que valide si una cadena de texto es un correo electrónico válido

let expresion = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;  //Expresión regular para correos electrónicos
function validacionCorreo(str) {      //función para validar correos electronicos se le pasa un string
    
    if (str.match(expresion)){ //Con .match() devulver true si es valido la expresión regular y false si lo rechaza
        console.log("Correo valido"); //Imprime si es valido
    }else{
        console.log("Correo invalido"); //Imprime si no es valido
    }

}

validacionCorreo("correo@google.com") //Llama a la función con un string valido
validacionCorreo("cor.reo@google.com") //Llama a la función con un string invalido