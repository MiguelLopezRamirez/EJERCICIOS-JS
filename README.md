# EJERCICIOS-JS
Ejercicios de JavaScript (De Básico a Avanzado)
📌 Nivel 1: Conceptos básicos
1️⃣ Variables y tipos de datos:
Crea una variable llamada nombre y asígnale tu nombre. Luego, imprime el valor en la consola.
    En este ejercicio se imprime el nombre, solo se usó una variable y se utilizó la función console.log() para imprimir el nombre.

2️⃣ Operaciones matemáticas:
Declara dos variables con números y realiza las operaciones básicas: suma, resta, multiplicación y división. Imprime los resultados.
    Aquí se realizaron operaciones básicas de suma, resta, multiplicación y división. Y para hacerlo se usaron asignación de variables y la función console.log() para mostrar las salidas.

3️⃣ Condicionales (if-else):
Escribe un programa que pregunte al usuario su edad y le diga si es mayor de edad (18 años o más) o no.
    En este programa se pide la edad del usuario, y una vez que la da por medio de la consola, se determina si la persona es mayor de edad (18 años o más). Para hacerlo se imprimen los mensajes por la función anteriormente mencionada console.log(), y para la entrada y salida se asignó a la constante con process.openStdin() y con addListener se habilita para escuchar eventos, en este caso de entrada. Se debe cerrar con process.exit(). Y para hacer la comparación se usó if.

4️⃣ Bucles (for-loop):
Escribe un programa que imprima los números del 1 al 10 en la consola.
    En este programa se imprimen por consola los números del uno al diez. Para realizarlo se usó un ciclo for, y console.log() para imprimir los números.

5️⃣ Funciones básicas:
Escribe una función llamada saludar(nombre) que reciba un nombre y devuelva un mensaje de saludo, por ejemplo: "Hola, Juan".
    En este programa se creó una función que, al llamarla, se pasa el nombre y dentro de la función se imprime el mensaje. Se usó console.log() para la salida por consola.

📌 Nivel 2: Arreglos y Objetos
6️⃣ Manipulación de arreglos:
Crea un array con los nombres de 5 ciudades y muestra la segunda ciudad en la consola.
    Para este programa se creó un array de 5 ciudades, donde se accedió al segundo elemento y se imprimió por consola. Se usó console.log() para imprimir por consola y acceso lineal para obtener el elemento.

7️⃣ Recorriendo arreglos con forEach:
Dado un arreglo let numeros = [2, 4, 6, 8, 10], usa forEach para imprimir cada número en la consola.
    Se usó un arreglo de números para imprimirlos en consola. Se utilizó forEach para recorrer el arreglo, y se usó console.log() para imprimir los números.

8️⃣ Uso de objetos:
Crea un objeto persona con propiedades nombre, edad y profesión. Imprime su nombre.
    Se creó un tipo de dato objeto que representa a una persona que tiene: nombre, edad y profesión. Se imprimió con console.log().

9️⃣ Manipulación de objetos:
Agrega una nueva propiedad nacionalidad al objeto persona del ejercicio anterior y muéstrala en consola.
    Aquí, con el ejercicio anterior, se añadió una nueva propiedad al objeto. Para añadir la propiedad se utilizó Object.assign() y se imprimió con console.log().

🔟 Filtrar elementos de un array:
Dado el arreglo let edades = [12, 18, 25, 10, 30, 16], usa filter() para crear un nuevo arreglo solo con los mayores de edad.
    Para este ejercicio, solo se mostraron las edades mayores de 18 años que se encontraban en el arreglo. Para hacerlo se usó filter() y console.log().

📌 Nivel 3: Funciones y Métodos Avanzados

1️⃣1️⃣ Mapear un array:
Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un nuevo array donde cada número esté elevado al cuadrado.
    Con el uso de map() se obtuvo un nuevo arreglo donde cada número se elevó al cuadrado. Para hacerlo se utilizó .map() y console.log().

1️⃣2️⃣ Reducir un array:
Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.
    En este ejercicio se sumaron los valores del arreglo. Para hacerlo se utilizó .reduce() para sumar todos sus elementos.

1️⃣3️⃣ Funciones asíncronas (setTimeout):
Escribe una función que imprima "Hola después de 3 segundos" utilizando setTimeout().
    Para este ejercicio se simuló una función asíncrona. Para esto se utilizó setTimeout() para hacer que tarde en realizarse la impresión por consola. La impresión se realizó con console.log().

1️⃣4️⃣ Manejo de Promesas:
Crea una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta".
    En este ejercicio se trabajaron las promesas, y se simuló que tardara 2 segundos en responder. Para eso se usó Promise con sus palabras resolve y reject para mostrar los resultados, y también se imprimió con console.log().

1️⃣5️⃣ Uso de async/await:
Modifica la función del ejercicio anterior para que use async y await.
    Para hacer este ejercicio se modificó el archivo anterior y se hizo la promesa dentro de una función, la cual sería async para funciones asíncronas y para esperar el resultado se utilizó await. Se usó Promise y console.log().

📌 Nivel 4: Manipulación de Strings y Objetos Complejos

1️⃣6️⃣ Expresiones Regulares:
Crea una función que valide si una cadena de texto es un correo electrónico válido.
    Este ejercicio presenta una función que valida correos electrónicos para ver si son válidos. Para esto, se realizó una constante para validar un correo electrónico por medio de expresiones regulares. Para hacer esta validación se tiene que utilizar .match para validar una cadena con la expresión regular. Todo esto se realizó por medio de una función y se imprime si es válido con console.log().

1️⃣7️⃣ Transformación de texto:
Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.
    Este ejercicio devuelve como resultado el string en mayúsculas y sin comas. Para esto se procesó el string en una variable y se convirtió a mayúsculas con .toUpperCase(), y para quitar la coma se usó .split() que separa el texto donde hay comas y luego se une con .join().

1️⃣8️⃣ Ordenamiento de un array:
Dado let palabras = ["banana", "manzana", "pera", "uva"], usa .sort() para ordenarlas alfabéticamente.
    Este ejercicio es para ordenar un arreglo de palabras en orden alfabético. Para esto, a la variable del arreglo se le aplicó el método .sort() para ordenar el arreglo y para imprimir se realizó por medio de console.log().

1️⃣9️⃣ Simulación de un endpoint con fetch (JSONPlaceholder):
Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 y muestra el resultado en consola.
    Aquí, en este ejercicio, se realizó un GET con fetch() para imprimir el resultado en consola. Para esto se usó fetch(), pasando el string de la API, se convirtió en JSON con .json() y se imprimió por consola con console.log().

2️⃣0️⃣ Creación de un pequeño CRUD en memoria:
Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. Agrega funciones para:
Agregar una tarea.
Eliminar una tarea por id.
Marcar una tarea como completada.
    Para este ejercicio se manejan operaciones para un arreglo de objetos de tareas, para agregar tareas, eliminarlas y marcarlas como completadas. Esto se hizo manipulando el objeto con diferentes funciones creadas para cada caso. Algunos de los métodos utilizados para la manipulación del arreglo de objetos fueron: .map(), .push(), .filter(), .indexOf(), y para imprimir los resultados se usó console.log().
