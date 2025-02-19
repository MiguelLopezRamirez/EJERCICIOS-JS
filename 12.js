// Reducir un array:
// Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.

let precios = [10, 20, 30, 40]
precios = precios.reduce((precio, x) => precio + x)
console.log(precios)