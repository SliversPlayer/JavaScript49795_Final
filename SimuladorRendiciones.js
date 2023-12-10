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

function iniciarRendicion() {
    const nombre = document.getElementById("nombre").value;
    const id = document.getElementById("id").value;
    const fecha = document.getElementById("fecha").value;
    const tipoRendicion = document.getElementById("tipoRendicion").value;
    porRendir = document.getElementById("porRendir").value || null;
    numTarjeta = document.getElementById("numTarjeta").value || null;

    const datosRendicion = {
        nombre,
        id,
        fecha,
        tipoRendicion,
        porRendir,
        numTarjeta
};
    infoRendicion.push(datosRendicion);
    alert(`Empleado: ${nombre}\n id: ${id}\nFecha Rendición: ${fecha}\nTipo Rendición: ${funcTipo(tipoRendicion)}`);

    limpiarFormulario();
}

// alert(`Empleado: ${nombre}\n id: ${id}\nFecha Rendición: ${fecha}\nTipo Rendición: ${funcTipo(tipoRendicion)}`);

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


// Constructor para representar una rendición
function Rendicion(fechaRendicion, glosaRendicion, tipoDoc, centroCosto, monto) {
    this.fechaRendicion = fechaRendicion;
    this.glosaRendicion = glosaRendicion;
    this.tipoDoc = tipoDoc;
    this.centroCosto = centroCosto;
    this.monto = monto;
}

// Función para capturar por prompt datos de rendiciones,
function obtenerDatosRendicion() {
    fechaRendicion = document.getElementById("fechaRendicion").value;
    glosaRendicion = document.getElementById("glosaRendicion").value;
    tipoDoc = document.getElementById("tipoDoc").value;
    centroCosto = document.getElementById("centroCosto").value;
    monto = document.getElementById("monto").value;

    const nuevaRendicion = new Rendicion(fechaRendicion, glosaRendicion, tipoDoc, centroCosto, monto);
    rendicion.push(nuevaRendicion);

    totalMonto += monto;

    alert(`Fecha Rendición: ${nuevaRendicion.fecha}\nDescripción: ${nuevaRendicion.glosa}\nTipo Documento: ${nuevaRendicion.tipoDoc}\nCentro de costo: ${nuevaRendicion.centroCosto}\nMonto: ${nuevaRendicion.monto}\nMonto Total: ${totalMonto.toFixed(0)}`);
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
            return "Tipo incorrecto"
    }
}


// Clean the form
function limpiarFormulario() {
    document.getElementById("rendicionForm").reset();
    // Puedes ocultar los contenedores adicionales aquí si es necesario
    document.getElementById("porRendirContainer").style.display = "none";
    document.getElementById("numTarjetaContainer").style.display = "none";
}