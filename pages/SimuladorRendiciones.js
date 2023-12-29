// User id


//Related var to expense report

let fechaRendicion;
let glosaRendicion;
let tipoDoc;
let centroCosto;
let monto;
let totalMonto = 0;
let numero = 0;

const almacenamientoLocal = JSON.parse(localStorage.getItem('almacenamientoLocal')) || {};


// Query Parameters
const queryString = window.location.search;
//console.log(queryString);
const params = new URLSearchParams(queryString);
const idString = params.get('id');


function ingresarRendicion() {
    fechaRendicion = document.getElementById("fechaRendicion").value;
    glosaRendicion = document.getElementById("glosaRendicion").value;
    tipoDoc = document.getElementById("tipoDoc").value;
    centroCosto = document.getElementById("centroCosto").value;
    monto = document.getElementById("monto").value;

    totalMonto += monto;

    almacenamientoLocal[idString].rendiciones.push({
        fechaRendicion,
        glosaRendicion,
        centroCosto,
        tipoDoc,
        monto,
    });

    localStorage.setItem('almacenamientoLocal', JSON.stringify(almacenamientoLocal));

    dato = (almacenamientoLocal[idString].rendiciones);
    largo = (almacenamientoLocal[idString].rendiciones.length);
    ulti = (dato[largo-1]);

}

setTodayDate()

function setTodayDate() {
    // Get date element by ID
    var fechaInput = document.getElementById('fechaRendicion');

    // Get current date
    var fechaActual = new Date();

    // Parse current date and set default value
    var ano = fechaActual.getFullYear();
    var mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // +1 porque los meses se indexan desde 0
    var dia = fechaActual.getDate().toString().padStart(2, '0');
    var fechaPorDefecto = ano + '-' + mes + '-' + dia;

    fechaInput.value = fechaPorDefecto;

}

function generateReport() {
    
    //console.log(idString);
    // concat with URL and suffix with ID parameter
    const url = './reporte.html?id=' + encodeURIComponent(idString);
    console.log(url)
    // Redirect using the URL
    window.location.href = url
}

// Clean the form
function limpiarFormulario() {
    document.getElementById("rendicionForm").reset();
    setTodayDate()
}
