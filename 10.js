// Filtrar elementos de un array:
// Dado el arreglo let edades = [12, 18, 25, 10, 30, 16], usa filter() para crear un nuevo arreglo solo con los mayores de edad.

let edades = [12, 18, 25, 10, 30, 16] //Array de edades
let edadesMayores = edades.filter(edad => edad >= 18) //Se aplica el método filter al array para que solamente de las edades mayores o igual a 18, recorre todo el array y devulve los elementos que cumplan con su condición, no modifica el array original

console.log("Edades mayor de edad:", edadesMayores) //Se imprime el resultado de las personas mayor de edad