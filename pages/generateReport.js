// Transform 'almacenamientoLocal' undefined object in string object
var datosAlmacenados = localStorage.getItem('almacenamientoLocal');
// Parse converts string type data into array object JS type data
var arrayDatos = JSON.parse(datosAlmacenados);

// Query Parameters
const queryString = window.location.search;
//console.log(queryString);
const params = new URLSearchParams(queryString);
const idString = params.get('id');


/*
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

document.getElementById('data-output').innerHTML = arrayDatos.name;
*/
localStorage.setItem('miDato', 'Hola, este es mi dato almacenado en localStorage');

// Recupera el valor de localStorage
var miDato = localStorage.getItem('miDato');

// Muestra el valor en el contenedor HTML
var miDatoContainer = document.getElementById('miDatoContainer');


miDatoContainer.textContent = datosAlmacenados;

dato = (datosAlmacenados[idString].rendiciones);
/*
largo = (datosAlmacenados[idString].rendiciones.length);
ulti = (dato[largo-1]);
*/

