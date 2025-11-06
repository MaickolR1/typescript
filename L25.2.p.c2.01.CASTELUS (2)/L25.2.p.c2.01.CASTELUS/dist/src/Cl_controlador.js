import Cl_mAlmuerzo from "./Cl_mAlmuerzo.js";
import Cl_mCena from "./Cl_mCena.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
        this.vista.controlador = this;
    }
    // **********************************
    // ** MÉTODOS PARA CARGA AUTOMÁTICA (Cl_index) **
    // **********************************
    procesarAlmuerzoAutomatico(data) {
        const llevaSopa = data.llevaSopa.toString().toLowerCase() === "si";
        const plato = new Cl_mAlmuerzo({ ...data, llevaSopa: llevaSopa });
        this.procesar(plato);
    }
    procesarCenaAutomatico(data) {
        const plato = new Cl_mCena({ ...data, especialidad: data.especialidad });
        this.procesar(plato);
    }
    // **********************************
    // ** MÉTODO PARA CARGA MANUAL (VISTA) **
    // **********************************
    procesarPlatoManual(dataDetalle) {
        // 1. Obtener datos comunes de la Vista base
        const vPlatoBase = this.vista.vPlato;
        const datosBase = {
            codigo: vPlatoBase.codigo,
            origen: vPlatoBase.origen,
            costo: vPlatoBase.costo,
        };
        // 2. Crear el objeto Modelo específico
        let plato;
        if (dataDetalle.tipo === 1) {
            // Es un Almuerzo
            const llevaSopa = dataDetalle.detalle.toString().toLowerCase() === "si";
            plato = new Cl_mAlmuerzo({ ...datosBase, llevaSopa: llevaSopa });
            this.vista.vAlmuerzo.limpiarInputs(); // Limpia solo el input específico
        }
        else if (dataDetalle.tipo === 2) {
            // Es una Cena
            const especialidad = +dataDetalle.detalle;
            plato = new Cl_mCena({ ...datosBase, especialidad: especialidad });
            this.vista.vCena.limpiarInputs(); // Limpia solo el input específico
        }
        else {
            return;
        }
        // 3. Procesar y Reportar
        vPlatoBase.limpiarInputsBase();
        this.procesar(plato);
    }
    // **********************************
    // ** MÉTODO CENTRAL DE PROCESAMIENTO **
    // **********************************
    procesar(plato) {
        this.modelo.procesarPlato(plato);
        this.vista.reportarPlato(plato);
        this.vista.reportarRestaurante({
            cntInternacionales: this.modelo.cntInternacionales,
            cntTotalPlatos: this.modelo.cntTotalPlatos,
            porcInternacionales: this.modelo.porcPlatosInternacionales(),
            acGananciaNacional: this.modelo.acGananciaNacional,
            acTotalPagado: this.modelo.acTotalPagado,
            porcGananciaNacional: this.modelo.porcGananciaNacional(),
        });
    }
}
