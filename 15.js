// Uso de async/await:
// Modifica la función del ejercicio anterior para que use async y await.

async function resultado() {
    const promesa = new Promise ( (resolve, reject) =>{
        setTimeout(()=>{
            resolve("Promesa resuelta")
        },2000)
    });
    await promesa.then((valor)=> console.log(valor)); 
    
}
resultado();