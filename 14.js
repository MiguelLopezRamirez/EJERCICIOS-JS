// Manejo de Promesas:
// Crea una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta".

const promesa = new Promise ( (resolve, reject) =>{
    setTimeout(()=>{
        resolve("Promesa resuelta")
    },2000)
});
promesa.then((valor) => console.log(valor))




