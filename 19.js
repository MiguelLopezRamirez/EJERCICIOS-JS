// Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 y muestra el resultado en consola.

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos))