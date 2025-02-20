// Manipulación de objetos:
// Agrega una nueva propiedad nacionalidad al objeto persona del ejercicio anterior y muéstrala en consola.
let persona = { // Se declara el objeto persona con sus propiedades
    nombre: "Miguel", 
    edad: 21,
    profesión: "Estudiante"
}
persona = Object.assign(persona, {nacionalidad: "Mexicano"}); //Se añade a sus propiedades la nacionalidad con object.assign, en la que se usa el objeto a añadir la propiedad y se pasa la propiedad agregar asignandola al mismo objeto original para guardar los cambios

console.log("Altura: ",persona.altura) //Se imprime solo la propiedad altura del objeto con la notación de punto
