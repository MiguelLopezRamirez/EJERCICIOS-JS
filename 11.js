// Mapear un array:
// Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un nuevo array donde cada número esté elevado al cuadrado.
let numeros = [1, 2, 3, 4, 5] //Se declara el arrat
let numerosCuadrados = numeros.map(numero=> numero*numero) //Con el método .map() se recorre todo el arrego y dependiendo de las operaciones que dan se regresa el resultado

console.log("Numero al cuadrado", numerosCuadrados) //Se imprime el resultado