// Manipulación de objetos:
// Agrega una nueva propiedad nacionalidad al objeto persona del ejercicio anterior y muéstrala en consola.
let persona = {
    nombre: "Miguel",
    edad: 21,
    profesión: "Estudiante"
}
persona = Object.assign(persona, {altura: 1.70});

console.log("Altura: ",persona.altura)
