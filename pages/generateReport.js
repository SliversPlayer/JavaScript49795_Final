const almacenamientoLocal = JSON.parse(localStorage.getItem('almacenamientoLocal')) || {};

// Custom currency format
const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',   
    }
);

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

*/

var container3 = document.getElementById("resultado");

var html = '<table>';
html += '<tr><th>Fecha</th><th>Glosa</th><th>Centro de Costo</th><th>Tipo de Documento</th><th>Tipo de Gasto</th><th>Monto</th></tr>';

var totalMonto = 0;

// Recorre las subrendiciones
for (var i = 0; i < almacenamientoLocal[idString].rendiciones.length; i++) {
    var subrendicion = almacenamientoLocal[idString].rendiciones[i];

    
    html += '<td>'+ subrendicion.fechaRendicion +'</td>';
    html += '<td>'+ subrendicion.glosaRendicion  +'</td>';
    html += '<td>'+ subrendicion.centroCosto +'</td>';
    html += '<td>'+ subrendicion.tipoDoc +'</td>';
    html += '<td>'+ subrendicion.tipoGasto +'</td>';
    html += '<td>'+ formatter.format(subrendicion.monto) +'</td>';
    totalMonto += parseInt(subrendicion.monto);
    html += '</tr>';

}
html +='</table>';


var totalMontoReport = document.getElementById('totalMonto');
totalMontoReport.textContent = formatter.format(totalMonto);

container3.innerHTML += html;

