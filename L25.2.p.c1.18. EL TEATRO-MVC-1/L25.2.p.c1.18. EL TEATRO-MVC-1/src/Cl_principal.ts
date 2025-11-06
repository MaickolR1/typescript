// Archivo: Cl_principal.ts
import Cl_vFamilia from "./Cl_vFamilia.js";
import Cl_vTeatro from "./Cl_vTeatro.js"; // Se usará como vista principal
import Cl_mTeatro from "./Cl_mTeatro.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
  constructor() {
    // Inicialización de las Vistas y Modelo
    let vFamilia = new Cl_vFamilia(); // Vista del formulario
    let vTeatro = new Cl_vTeatro(); // Vista de la salida
    let modelo = new Cl_mTeatro(); // Modelo principal

    // Inicialización del Controlador con todas las dependencias
    let controlador = new Cl_controlador(modelo, vFamilia, vTeatro);

    // Asignación del controlador a las vistas para que puedan invocarlo
    vFamilia.controlador = controlador;
    vTeatro.controlador = controlador;

    // Opcional: Procesar el lote de datos del ejercicio al iniciar
    controlador.procesarLote();
  }
}
