// Cl_vAlmuerzo.ts (Vista de los detalles de Almuerzo)
import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vAlmuerzo extends Cl_vGeneral {
    constructor() {
        super({ formName: "almuerzoForm" });
        this.vista = this.crearHTMLElement({
            elementName: this.formName,
            isForm: true,
        });
        this.inSopa = this.crearHTMLInputElement({ elementName: "inDetalle" });
        const btProcesar = this.crearHTMLElement({ elementName: "btProcesar" });
        // El botón llama al controlador con los datos base y el tipo/detalle específico
        btProcesar.onclick = () => {
            if (!this.controlador)
                throw new Error("No hay controlador asignado");
            this.controlador.procesarPlatoManual({ tipo: 1, detalle: this.detalle }); // Tipo 1: Almuerzo
        };
        this.show({ ver: false });
    }
    get detalle() {
        return this.inSopa.value;
    }
    limpiarInputs() {
        this.inSopa.value = "";
    }
}
