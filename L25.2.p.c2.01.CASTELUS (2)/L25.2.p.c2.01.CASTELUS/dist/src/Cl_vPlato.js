// Cl_vPlato.ts (Base de la vista de datos - Refactorizada)
import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vPlato extends Cl_vGeneral {
    constructor() {
        super({ formName: "platoForm" });
        this.vista = this.crearHTMLElement({
            elementName: this.formName,
            isForm: true,
        });
        this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
        this.inOrigen = this.crearHTMLInputElement({ elementName: "inOrigen" });
        this.inCosto = this.crearHTMLInputElement({ elementName: "inCosto" });
        this.slTipo = this.crearHTMLElement({
            elementName: "slTipo",
        });
    }
    get codigo() {
        return this.inCodigo.value;
    }
    get origen() {
        return +this.inOrigen.value;
    }
    get costo() {
        return +this.inCosto.value;
    }
    get tipo() {
        return +this.slTipo.value;
    }
    limpiarInputsBase() {
        this.inCodigo.value = "";
        this.inOrigen.value = "";
        this.inCosto.value = "";
        this.slTipo.value = "1";
        this.inCodigo.focus();
    }
}
