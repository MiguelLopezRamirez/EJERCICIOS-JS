// Filtrar elementos de un array:
// Dado el arreglo let edades = [12, 18, 25, 10, 30, 16], usa filter() para crear un nuevo arreglo solo con los mayores de edad.

let edades = [12, 18, 25, 10, 30, 16]
edades = edades.filter(edad => edad >= 18)

console.log("Edades mayor de edad:", edades)