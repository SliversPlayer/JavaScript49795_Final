
const almacenamientoLocal = JSON.parse(localStorage.getItem('almacenamientoLocal')) || {};

// Transform 'almacenamientoLocal' undefined object in string object
var datosAlmacenados = localStorage.getItem('almacenamientoLocal');
// Parse converts string type data into array object JS type data
var arrayDatos = JSON.parse(datosAlmacenados);

// Query Parameters
const queryString = window.location.search;
//console.log(queryString);
const params = new URLSearchParams(queryString);
const idString = params.get('id');



// Verify if Local Storage has data in it
if (datosAlmacenados) {
    // Parse converts string type data into array object JS type data
    var datosParseados = JSON.parse(datosAlmacenados);

    // Print data by console
    console.log('Datos almacenados en el Local Storage:');
    console.log(datosParseados);
} else {
    console.log('No hay datos almacenados en el Local Storage.');
}

//document.getElementById('data-output').innerHTML = arrayDatos.name;

// localStorage.setItem('miDato', 'Hola, este es mi dato almacenado en localStorage');





usuarioData = (almacenamientoLocal[idString]);
nombre = (almacenamientoLocal[idString].nombre);
fecha = (almacenamientoLocal[idString].fecha);
tipoRendicion = (almacenamientoLocal[idString].tipoRendicion);

dato = (almacenamientoLocal[idString].rendiciones);

largo = (almacenamientoLocal[idString].rendiciones.length);
ulti = (dato[largo-1]);

// Muestra el valor en el contenedor HTML
var id = document.getElementById('id');
id.textContent = idString;

var nombreReport = document.getElementById('nombre');
nombreReport.textContent = nombre;

var fechaReport = document.getElementById('fecha');
fechaReport.textContent = fecha;

var tipoRendicionReport = document.getElementById('tipoRendicion');
tipoRendicionReport.textContent = tipoRendicion;

// Como revisar el array dentro del objeto local storage
// almacenamientoLocal[idString].rendiciones[3]

