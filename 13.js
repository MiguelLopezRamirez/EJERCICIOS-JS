// Funciones asíncronas (setTimeout):
// Escribe una función que imprima "Hola después de 3 segundos" utilizando setTimeout().

function imprimir(){ //Función que se llama para imprimir
    setTimeout(()=>console.log("Hola después de 3 segundos"),3000) //Se usar setTimeout para ejecutar lo que se le pide en su primer parametro despues de la cantidad de millisegundos asignasa
}
console.log("Inicio"); //Primera impresión para que se note el tiempo que tarda

imprimir() //Llamada a la función