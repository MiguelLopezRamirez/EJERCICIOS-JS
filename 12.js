// Reducir un array:
// Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.

let precios = [10, 20, 30, 40] //Array de precios
precios = precios.reduce((x, precio) => precio + x) //Al aplicar .reduce() se recorre todo el arreglo y se se reduce a un solo valor en este caso "x" es el acumulador y "precio" es un elmento de array 
console.log(precios) //Se imprime la suma total de precios