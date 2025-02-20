// Condicionales (if-else):
// Escribe un programa que pregunte al usuario su edad y le diga si es mayor de edad (18 años o más) o no.

console.log("Escribe tu edad: ");//Imprimir para que el usuario escriba su edad
const edad = process.openStdin(); //a la constante edad se le agrega un proceso de entrada

edad.addListener("data", (data) => { //a la constante edad se llama suproceso de entrada con un listener y se guarda en data
    if (data >= 18){ //se compara ei es mayor o igual a 18 años
        console.log("Es mayor de edad.") //Imprime si es mayor de edad
    }else{
        console.log("Es menor de edad.") //Imprime si es menor de edad 
    }
    process.exit(); //Cierra el proceso de escucha para que que no es cicle de forma especifica.
})
