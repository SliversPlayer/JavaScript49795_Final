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
let numTarjeta = 0;
let porRendir = 0;
let continuar;

//Rendicion

let fechaRendicion;
let glosaRendicion;
let tipoDoc;
let centroCosto;
let monto;
let rendicion = [];
let continuarRendicion;
let totalMonto = 0;

// Función para definir el tipo de rendición
function funcTipo(tipoRendicion) {
    switch (tipoRendicion) {
        case 1:
            return `Fondo Fijo`;
            break;
        case 2:
            return `Fondo por Rendir`;
            break;
        case 3:
            return `Tarjeta de Crédito`;
            break;
        default:
            return "Tipo incorrecto"
    }
}


function iniciarRendicion() {
    const nombre = document.getElementById("nombre").value;
    const id = document.getElementById("id").value;
    const fecha = document.getElementById("fecha").value;
    const tipoRendicion = parseInt(document.getElementById("tipoRendicion").value);

    }

// alert(`Empleado: ${nombre}\nid: ${id}\nFecha Rendición: ${fecha}\nTipo Rendición: ${funcTipo(tipoRendicion)}`);

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
                numTarjetaContainer.style.display = "block";
                porRendirContainer.style.display = "none";
                break;
            default:
               alert(`Tipo incorrecto`)
                }
            }


// Constructor para representar una rendición
function Rendicion(fecha, glosa, tipoDoc, centroCosto, monto) {
    this.fecha = format(new Date(fecha), 'dd-MM-yyyy');
    this.glosa = glosa;
    this.tipoDoc = tipoDoc;
    this.centroCosto = centroCosto;
    this.monto = monto;
}

// Función para capturar por prompt datos de rendiciones,
// queda pendiente separar la impresión del detalle e implementar libreria de fechas
function obtenerDatosRendicion() {

    do {
        fechaRendicion = document.getElementById("fechaRendicion").value;
        glosaRendicion = document.getElementById("glosaRendicion").value;
        tipoDoc = document.getElementById("tipoDoc").value;
        centroCosto = document.getElementById("centroCosto").value;
        monto = document.getElementById("monto").value;

        const nuevaRendicion = new Rendicion(fechaRendicion, glosaRendicion, tipoDoc, centroCosto, monto);
        rendicion.push(nuevaRendicion);

        totalMonto += monto;

        alert(`Fecha Rendición: ${nuevaRendicion.fecha}\nDescripción: ${nuevaRendicion.glosa}\nTipo Documento: ${nuevaRendicion.tipoDoc}\nCentro de costo: ${nuevaRendicion.centroCosto}\nMonto: ${nuevaRendicion.monto}\nMonto Total: ${totalMonto.toFixed(0)}`);
        
        continuarRendicion = prompt('¿Desea ingresar otra rendición? si/no');
        if (continuarRendicion == "no") {
            console.log('Datos concatenados:', rendicion);
            break;
        }

        } while (continuarRendicion.toLowerCase() !== "no");
    }

obtenerDatosRendicion();



