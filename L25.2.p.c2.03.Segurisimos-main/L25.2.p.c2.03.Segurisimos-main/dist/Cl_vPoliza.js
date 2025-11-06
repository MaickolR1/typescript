import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vPoliza extends Cl_vGeneral {
    constructor() {
        super({ formName: "polizaForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inId = this.crearHTMLInputElement({ elementName: "inId" });
        this.inMontoAsegurar = this.crearHTMLInputElement({
            elementName: "inMontoAsegurar",
        });
        this.inPorcentajeCobertura = this.crearHTMLInputElement({
            elementName: "inPorcentajeCobertura",
        });
        this.btCancelar = this.crearHTMLButtonElement({
            elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get id() {
        return +this.inId.value;
    }
    get montoAsegurar() {
        return +this.inMontoAsegurar.value;
    }
    get porcentajeCobertura() {
        return +this.inPorcentajeCobertura.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inId.value = "";
        this.inMontoAsegurar.value = "";
        this.inPorcentajeCobertura.value = "";
        this.inId.focus();
    }
}
