// Cl_index.ts (Reemplaza a principal.ts)
import Cl_mRestaurante from "./Cl_mRestaurante.js";
import Cl_vRestaurante from "./Cl_vRestaurante.js";
import Cl_controlador from "./Cl_controlador.js";
import { platosAlmuerzo, platosCena } from "./_data.js";
/**
 * Clase principal encargada de inicializar la aplicación.
 * El constructor crea las instancias del Modelo, la Vista y el Controlador
 * y carga los datos de prueba automáticamente.
 */
export default class Cl_index {
    constructor() {
        const modelo = new Cl_mRestaurante();
        const vista = new Cl_vRestaurante();
        this.controlador = new Cl_controlador(modelo, vista);
        // Cargar datos de ejemplo automáticamente al inicio
        this.iniciarData();
    }
    /**
     * Procesa los datos de ejemplo definidos en _data.ts
     */
    iniciarData() {
        // Cargar Almuerzos
        platosAlmuerzo.forEach((data) => {
            this.controlador.procesarAlmuerzoAutomatico(data);
        });
        // Cargar Cenas
        platosCena.forEach((data) => {
            this.controlador.procesarCenaAutomatico(data);
        });
    }
}
// 5. Instanciar la clase principal para iniciar la aplicación cuando el script se carga
new Cl_index();
