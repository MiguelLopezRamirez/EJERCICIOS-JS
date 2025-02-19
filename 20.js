// Creación de un pequeño CRUD en memoria:
// Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. 
// Agrega funciones para:
    // Agregar una tarea.
    // Eliminar una tarea por id.
    // Marcar una tarea como completada.
let tareas = [
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

function agregar (descripcion){
    let ids = tareas.map((tarea)=> tarea.id);
    let id = Math.max(...ids)
    
    tareas.push( {
        id: id+1,
        descripcion: descripcion,
        completado: false
    });

}

function Eliminar (id){
    let ids = tareas.map((tarea)=> tarea.id);
    let IdResult = ids.filter(idCompara => idCompara == id)
    
    tareas.splice(IdResult-1,1)
}

function Terminar (id){
    let ids = tareas.map((tarea)=> tarea.id);
    let IdResult = ids.indexOf(id)
    tareas[IdResult].completado=true
    console.log(tareas[IdResult])
}

console.log(tareas)

agregar("Leer todo el capitulo 10.")

console.log(tareas)

Eliminar(2)

console.log(tareas)

Terminar(3)

console.log(tareas)