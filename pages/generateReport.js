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

// User information
usuarioData = (almacenamientoLocal[idString]);
nombre = (almacenamientoLocal[idString].nombre);
fecha = (almacenamientoLocal[idString].fecha);
tipoRendicion = (almacenamientoLocal[idString].tipoRendicion);

dato = (almacenamientoLocal[idString].rendiciones);

largo = (almacenamientoLocal[idString].rendiciones.length);
ulti = (dato[largo-1]);

// textContent user Info
var id = document.getElementById('id');
id.textContent = idString;

var nombreReport = document.getElementById('nombre');
nombreReport.textContent = nombre;

var fechaReport = document.getElementById('fecha');
fechaReport.textContent = fecha;

var tipoRendicionReport = document.getElementById('tipoRendicion');
tipoRendicionReport.textContent = tipoRendicion;

// rendiciones array
objectRendiciones = almacenamientoLocal[idString].rendiciones

var arrayRendiciones = Object.keys(objectRendiciones).map(function(key) {
    return objectRendiciones[key];
  });

test = Object.values(almacenamientoLocal[idString].rendiciones[0]);
/*
// Itera sobre el array y agrega cada elemento al contenido HTML
for (var i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
    resultadoElement.innerHTML += miArray[i];
}

// Itera sobre el array y agrega cada elemento al contenido HTML
for (var i = 0; i < arrayRendiciones.length; i++) {
    resultadoElement.innerHTML += "<li>" + arrayRendiciones[i] + "</li>";
    }
*/

// IMPRImir ELEMENTOS EN HTML
// PENDIENTE FALTA RRECORRER EL OBJETO ADECuadAMENTE
var miObjeto = almacenamientoLocal[idString].rendiciones[0];


var resultadoElement = document.getElementById("resultado");

var mapeoClaves = {
    fechaRendicion: 'Fecha Rendición',
    glosaRendicion: 'Descripción',
    centroCosto: 'Centro de Costo',
    tipoDoc: 'Tipo de Documento',
    monto: 'Monto'
  };


for (var clave in miObjeto) {
if (miObjeto.hasOwnProperty(clave)) {
    // Obtener el nombre mapeado de la clave
    var nombreClave = mapeoClaves[clave] || clave;
    
    resultadoElement.innerHTML += "<li>" + nombreClave + ": " + miObjeto[clave] + "</li>";
}
}


// Como revisar el array dentro del objeto local storage
// almacenamientoLocal[idString].rendiciones[3]
// Cantidad de parámetros almacenados en el array
// almacenamientoLocal[idString].rendiciones.length-1
