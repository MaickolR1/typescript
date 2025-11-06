import Cl_vPoliza from "./Cl_vPoliza.js";
export default class Cl_vVehiculo extends Cl_vPoliza {
    constructor() {
        super();
        this.divInAnio = this.crearHTMLElement({ elementName: "divInAnio" });
        this.inAnio = this.crearHTMLInputElement({ elementName: "inAnio" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarVehiculo",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarPolizaVehiculo({
                    id: this.id,
                    montoAsegurar: this.montoAsegurar,
                    porcentajeCobertura: this.porcentajeCobertura,
                    anio: this.anio
                });
            },
        });
    }
    get anio() {
        return +this.inAnio.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Vehículo" });
        this.inAnio.value = "";
        this.divInAnio.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
