// Creación de un pequeño CRUD en memoria:
// Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. 
// Agrega funciones para:
    // Agregar una tarea.
    // Eliminar una tarea por id.
    // Marcar una tarea como completada.
let tareas = [ //Declaración de un array de tareas con las propiedades: id, descripción y completado.
    {
        id : 1,
        descripcion : "Hacer tarea de GPS",
        completado : true    
    },
    {
        id : 2,
        descripcion : "Hacer tarea de Servicios",
        completado : true    
    },
    {
        id : 3,
        descripcion : "Hacer tarea de LYA2",
        completado : false    
    },
    {
        id : 4,
        descripcion : "Hacer tarea de Estructrua de datos",
        completado : false    
    },
    {
        id : 5,
        descripcion : "Hacer tarea de NoSQL",
        completado : false    
    }
]

function agregar (descripcion){ //Declaración de la función agregar, se le pasa la descripción de la tarea y se asinga un ide automatico dependiento del ultimo id
    let ids = tareas.map((tarea)=> tarea.id); //Se recorre el array con map y se guarda en un array los id.
    let id = Math.max(...ids) //En el array de ids se busca el valor más alto de los pasados usando .max y se guarda. Pero como a .max() no se puede pasar un array sino muchos el mentos se usar el operador spread "..." para expandir el array.
    
    tareas.push( { //Al final del array se para el nuevo elemento 
        id: id+1, //del id encontrado se pone uno más para no repetirlos
        descripcion: descripcion, //se asigna la descripción que se paso
        completado: false
    });

}

function Eliminar (id){ //Función para eliminar tarea pasando el id
    let ids = tareas.map((tarea)=> tarea.id); //Se recorre el array con map y se guarda en un array los id.
    let IdResult = ids.filter(idCompara => idCompara == id) // Se busca el id de que se paso, en el arreglo para saber en que poscisión se encuentra
    
    tareas.splice(IdResult-1,1) //Ahora con splice se apartir de id del arreglo se elimina 1
}

function Terminar (id){ //Función para actualizar el estado de la tarea aparir del id
    let ids = tareas.map((tarea)=> tarea.id); //Se recorre el array con map y se guarda en un array los id.
    let IdResult = ids.indexOf(id) //Se busca el index de del id en arreglo y se guarda
    tareas[IdResult].completado=true //Se accede al objeto de forma lineal en el arreglo y se accede la propiedad con acceso de punto y se cambia el valor a true
}

console.log(tareas) //Se imprime el resultado

agregar("Leer todo el capitulo 10.") //Se llama a la función pasando un string

console.log(tareas) //Se imprime el resultado para ver los cambios

Eliminar(2) //Se llama la función para eliminar la tara con id 2

console.log(tareas) //Se imprime el resultado para ver los cambios

Terminar(3) //Se llama la función para marcar completada una tarea en este caso con el id 3

console.log(tareas) //Se imprime el resultado para ver los cambios