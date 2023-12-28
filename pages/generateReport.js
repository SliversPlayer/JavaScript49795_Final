
var datosAlmacenados = localStorage.getItem('almacenamientoLocal');
var arrayDatos = JSON.parse(datosAlmacenados);

// Verificar si hay datos en el Local Storage
if (datosAlmacenados) {
    // Convertir los datos de cadena JSON a un objeto JavaScript
    var datosParseados = JSON.parse(datosAlmacenados);

    // Imprimir los datos por consola
    console.log('Datos almacenados en el Local Storage:');
    console.log(datosParseados);
    console.log(datosParseados[111]);
} else {
    console.log('No hay datos almacenados en el Local Storage.');
}

// Crear una tabla para mostrar los datos
var tabla = document.createElement('table');

var encabezado = tabla.createTHead();
