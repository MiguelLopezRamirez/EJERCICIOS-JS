// Uso de async/await:
// Modifica la función del ejercicio anterior para que use async y await.

async function resultado() { //Se declara la función de con "async" para especificar que se pueda utilizar "await"
    const promesa = new Promise ( (resolve, reject) =>{ //se crea la promesa que puede ser resolve o reject
        setTimeout(()=>{ //Se usa setTimeout para su hacer la promesa asincrona para que espere un tiempo
            resolve("Promesa resuelta") //Se asinga el resolve en caso de que la promesa se resuelva
        },2000) //Se esperan 2 segundos aplicado en setTimeout
    });
    let valor = await promesa //Se espera a que la promesa se resulva
    console.log(valor); //Se imprime el resultado por consola
    
}
resultado(); //Llama a la función asyncrona. 