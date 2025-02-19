// Condicionales (if-else):
// Escribe un programa que pregunte al usuario su edad y le diga si es mayor de edad (18 años o más) o no.

console.log("Escribe tu edad: ");
const edad = process.openStdin();

edad.addListener("data", (data) => {
    if (data >= 18){
        console.log("Es mayor de edad.")
    }else{
        console.log("Es menor de edad.")
    }
    process.exit();
})
