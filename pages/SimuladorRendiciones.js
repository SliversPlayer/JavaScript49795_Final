
// Simulador de Rendición de Gastos
// En la empresa donde trabajo, muchos de los trabajadores tienen
// labores en terreno, y los gastos de alimentación, estadia, combustibles, etc.
// durante los servicios deben ser rendidos para que la empresa los reembolse al trabajor,
// actualmente se utiliza una planilla excel con multiples validaciones de datos,
// ademas se debe tomar una fotografia a cada boleta e ingresar los datos, haciendo
// la tarea lenta y tediosa.

// Existen 3 opciones de rendición, 
// Fondo fijo: El trabajdor utiliza sus propios recursos los cuales rinde por
// medio de comprobantes de pago.
// Fondo por rendir: La empresa le entrega un monto de dinero el cual el empleado
// debe rendir posteriormente, en caso de que sobre dinero, este debe devolverlo,
// en caso contrario, se paga la diferencia al trabajador.
// Tarjeta de crédito: La empresa dispone de varias tarjetas de crédito para
// realizar compras, es idéntico a fondo fijo, pero se debe indicar el número
// de la TC con la que se hace el pago.


// User id
let id;

//Related var to expense report

let fechaRendicion;
let glosaRendicion;
let tipoDoc;
let centroCosto;
let monto;
let totalMonto = 0;
let numero = 0;
let idString = 0;

const almacenamientoLocal = JSON.parse(localStorage.getItem('almacenamientoLocal')) || {};

/*
// Query Parameters
const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
var idString = parseInt(params.get('id'));
console.log(idString);
*/


function ingresarRendicion(id) {
    fechaRendicion = document.getElementById("fechaRendicion").value;
    glosaRendicion = document.getElementById("glosaRendicion").value;
    tipoDoc = document.getElementById("tipoDoc").value;
    centroCosto = document.getElementById("centroCosto").value;
    monto = document.getElementById("monto").value;

    totalMonto += monto;

// Query Parameters
    const queryString = window.location.search;
    //alert(queryString);
    const params = new URLSearchParams(queryString);
    //alert(params);
    const idString = parseInt(params.get('id'));
    console.log(idString);

    almacenamientoLocal[idString].rendiciones.push({
        fechaRendicion,
        glosaRendicion,
        centroCosto,
        tipoDoc,
        monto,
    });

    
    dato = (almacenamientoLocal[idString].rendiciones);
    largo = (almacenamientoLocal[idString].rendiciones);
    console.log(dato);

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

    // conmat with URL and suffix with ID parameter
    const url2 = './reporte.html?id=' + encodeURIComponent(idString);

    // Redirect using the URL
    window.location.href = url2;
}

// Clean the form
function limpiarFormulario() {
    document.getElementById("rendicionForm").reset();
    setTodayDate()
}

function test() {
    const arrayRecuperado = JSON.parse(localStorage.getItem('almacenamientoLocal'));

}