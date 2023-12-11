//Primera Entrega
//Algorito debe tener:
//Condicional (If-Else-Switch)
//Ciclo (For - Do-While)

// Simulador de Rendición de Gastos
// En la empresa donde me trabajo, muchos de los trabajadores tienen
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

// Requerimientos:
// librerias
// date-fns

// Identificación de la rendición

let tipoRendicion = 0;
const infoRendicion = [];
let nombre;
let fecha;
let id;

//Rendicion

let fechaRendicion;
let glosaRendicion;
let tipoDoc;
let centroCosto;
let monto;
let rendicion = [];
let totalMonto = 0;
let porRendir;
let numTarjeta;
let identificador;

const almacenamientoLocal = JSON.parse(localStorage.getItem('almacenamientoLocal')) || {};


function iniciarRendicion() {
    nombre = document.getElementById("nombre").value;
    id = document.getElementById("id").value;
    fecha = document.getElementById("fecha").value;
    tipoRendicion = document.getElementById("tipoRendicion").value;
    porRendir = document.getElementById("porRendir").value || null;
    numTarjeta = document.getElementById("numTarjeta").value || null;

    almacenamientoLocal[id] = {
        nombre,
        fecha,
        tipoRendicion,
        porRendir,
        numTarjeta,
        rendiciones:[]
    };

        // Construye la URL con el parámetro "id"
        var url = 'pages/rendicion.html?id=' + encodeURIComponent(id);

        // Redirige a la nueva página con el parámetro "id"
        window.location.href = url;
     

    localStorage.setItem('almacenamientoLocal', JSON.stringify(almacenamientoLocal));


}
identificador = identificador;

function mostrarNumTarjeta() {
    let tipoRendicion = document.getElementById("tipoRendicion").value;
        switch (tipoRendicion) {
            case "1":
                porRendirContainer.style.display = "none";
                numTarjetaContainer.style.display = "none";
                break;
            case "2":
                porRendirContainer.style.display = "block";
                numTarjetaContainer.style.display = "none";
                break;
            case "3":
                porRendirContainer.style.display = "none";
                numTarjetaContainer.style.display = "block";
                break;
            default:
                return "Tipo incorrecto"
                }
            }

function agregarRendicion(id) {
    fechaRendicion = document.getElementById("fechaRendicion").value;
    glosaRendicion = document.getElementById("glosaRendicion").value;
    tipoDoc = document.getElementById("tipoDoc").value;
    centroCosto = document.getElementById("centroCosto").value;
    monto = document.getElementById("monto").value;

    totalMonto += monto;

    const queryString = window.location.search;
    alert(queryString);
    const params = new URLSearchParams(queryString);
    alert(params);
    const idString = params.get('id');
    alert(idString);

    almacenamientoLocal[idString].rendiciones.push({
        fechaRendicion,
        glosaRendicion,
        centroCosto,
        tipoDoc,
        monto,
    });
}

// Convert the value to string for better identification
function funcTipo(tipoRendicion) {


    switch (tipoRendicion) {
        case "1":
            return `Fondo Fijo`;
            break;
        case "2":
            return `Fondo por Rendir  ${porRendir}`;
            break;
        case "3":
            return `Tarjeta de Crédito ${numTarjeta}`;
            break;
        default:
            console.error("Tipo incorrecto");
            return "Tipo incorrecto";
    }
}


// Clean the form
function limpiarFormulario() {
    document.getElementById("rendicionForm").reset();
    // Puedes ocultar los contenedores adicionales aquí si es necesario
    document.getElementById("porRendirContainer").style.display = "none";
    document.getElementById("numTarjetaContainer").style.display = "none";
}