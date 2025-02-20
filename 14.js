// Manejo de Promesas:
// Crea una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta".

const promesa = new Promise ( (resolve, reject) =>{ //declaración de promesa
    setTimeout(()=>{ //Se usa setTimeout para que da el mensaje de resolve de la promesa la función de su primer parametro
        resolve("Promesa resuelta") //Resultado bueno de la promesa
    },2000) //Tiempo de setTimeout
});
promesa.then((valor) => console.log(valor)) //Se tiene el resulatdo de la promesa si es satisfactorio y lo imprime




