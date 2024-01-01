const almacenamientoLocal = JSON.parse(localStorage.getItem('almacenamientoLocal')) || {};

// Custom currency format to be used in 'monto' and 'montoTotal' var
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
/* BLOQUEADO PARA REVISAR SU USO
dato = (almacenamientoLocal[idString].rendiciones);
largo = (almacenamientoLocal[idString].rendiciones.length);
ulti = (dato[largo-1]);
*/
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
/* COMENTADO PARA REVISAR SI ES NECESARIO
objectRendiciones = almacenamientoLocal[idString].rendiciones

var arrayRendiciones = Object.keys(objectRendiciones).map(function(key) {
    return objectRendiciones[key];
  });

test = Object.values(almacenamientoLocal[idString].rendiciones[0]);
*/

// the JSON are in the JS script to avoide the use of Jquery in the code
var tipoDocJSON = [
    {"value":"6", "text": "Boleta"},
    {"value":"22", "text": "Factura"},
    {"value":"30", "text": "Factura Exenta"},
    {"value":"7", "text": "Boleta de Honorarios"},
    {"value":"23", "text": "Nota de Crédito"},
    {"value":"9", "text": "Otros"}
];

var centroCostoJSON= [
    {"value": "725", "text": "Adquisiciones"},
    {"value": "726", "text": "Adquisiciones COMEX"},
    {"value": "520", "text": "Andina"},
    {"value": "744", "text": "Bodega"},
    {"value": "720", "text": "Gerencia de Administración"},
    {"value": "715", "text": "Gerencia de Operaciones"},
    {"value": "710", "text": "Gerencia General"},
    {"value": "610", "text": "Investigación y Desarrollo"},
    {"value": "115", "text": "Laboratorio"},
    {"value": "118", "text": "Post Ventas"},
    {"value": "320", "text": "Servicio Técnico"},
    {"value": "100", "text": "Ventas"}
];

var tipoGastoJSON= [
    {"value": "170", "text": "Arriendo de Vehiculos y Traslado"},
    {"value": "303", "text": "Articulos de Aseo"},
    {"value": "158", "text": "Bienestar del Personal y Recreación"},
    {"value": "173", "text": "Colación"},
    {"value": "171", "text": "Combustible"},
    {"value": "160", "text": "Consumo del Personal"},
    {"value": "212", "text": "Correspondencia"},
    {"value": "165", "text": "Despachos y Embalajes"},
    {"value": "1202002", "text": "Enseres"},
    {"value": "107", "text": "EPP Elemento de protección Personal"},
    {"value": "167", "text": "Fletes Nacionales"},
    {"value": "320", "text": "Gastos Bancarios"}
];

var container3 = document.getElementById("resultado");

var html = '<table>';
html += '<tr><th>Fecha</th><th>Glosa</th><th>Centro de Costo</th><th>Tipo de Documento</th><th>Tipo de Gasto</th><th>Monto</th></tr>';

var totalMonto = 0;

// Walk through the array "subrendicion"
for (var i = 0; i < almacenamientoLocal[idString].rendiciones.length; i++) {
    var subrendicion = almacenamientoLocal[idString].rendiciones[i];

    
    html += '<td>'+ subrendicion.fechaRendicion +'</td>';
    html += '<td>'+ subrendicion.glosaRendicion  +'</td>';

    var tipoDocText = valuetoStringJSON(subrendicion.centroCosto,centroCostoJSON);
    html += '<td>'+ tipoDocText +'</td>';

    var tipoDocText = valuetoStringJSON(subrendicion.tipoDoc,tipoDocJSON);
    html += '<td>'+ tipoDocText +'</td>';

    var tipoDocText = valuetoStringJSON(subrendicion.tipoGasto,tipoGastoJSON);
    html += '<td>'+ tipoDocText +'</td>';

    html += '<td>'+ formatter.format(subrendicion.monto) +'</td>';
    totalMonto += parseInt(subrendicion.monto);
    html += '</tr>';

}
html +='</table>';


var totalMontoReport = document.getElementById('totalMonto');
totalMontoReport.textContent = formatter.format(totalMonto);

container3.innerHTML += html;



// Function to convert the KEY of the JSON into VALUE
function valuetoStringJSON(valor,jsonTable) {
    for (var j = 0; j < jsonTable.length; j++) {
        if (jsonTable[j].value == valor) {
            return jsonTable[j].text;
        }
    }
    return valor; // if it not found, it will return the key value
}

