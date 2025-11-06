import Cl_vPoliza from "./Cl_vPoliza.js";
export default class Cl_vVida extends Cl_vPoliza {
    constructor() {
        super();
        this.divInEdad = this.crearHTMLElement({ elementName: "divInEdad" });
        this.inEdad = this.crearHTMLInputElement({ elementName: "inEdad" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarVida",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarPolizaVida({
                    id: this.id,
                    montoAsegurar: this.montoAsegurar,
                    porcentajeCobertura: this.porcentajeCobertura,
                    edad: this.edad
                });
            },
        });
    }
    get edad() {
        return +this.inEdad.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Vida" });
        this.inEdad.value = "";
        this.divInEdad.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
