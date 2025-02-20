// Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 y muestra el resultado en consola.

fetch('https://jsonplaceholder.typicode.com/todos/1') //Con fetch se llama a la API
  .then(respuesta => respuesta.json()) //Si tiene el resultado se convierte en .json para verlo mejor
  .then(datos => console.log(datos))//Se imprimen por consola los resultados.