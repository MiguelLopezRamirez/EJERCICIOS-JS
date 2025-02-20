// Transformación de texto:
// Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.

let str = "Hola, cómo estás?"; //De declara el string
str = str.toUpperCase(), //El string se hace mayúsculas
str = str.split(',').join('') //Con .split() se separa el string en un array por comas que tiene y se une el array con .join()
console.log(str) //El resultado se imprime por consola