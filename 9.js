// Manipulación de objetos:
// Agrega una nueva propiedad nacionalidad al objeto persona del ejercicio anterior y muéstrala en consola.
let persona = {
    nombre: "Miguel",
    edad: 21,
    profesión: "Estudiante"
}
persona = Object.assign(persona, {nacionalidad: "Mexicano"});

console.log("Altura: ",persona.altura)
