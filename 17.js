// Transformación de texto:
// Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.

let str = "Hola, cómo estás?";
str = str.toUpperCase()
str = str.split(',').join('')
console.log(str)