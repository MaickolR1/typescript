import Cl_mPoliza from "./Cl_mPoliza.js";
export default class Cl_mVehiculo extends Cl_mPoliza {
    constructor({ id, porcentajeCobertura, montoAsegurar, anio = 0, }) {
        super({ id, porcentajeCobertura, montoAsegurar });
        this._anio = 0;
        this.anio = anio;
    }
    set anio(anio) {
        this._anio = +anio;
    }
    get anio() {
        return this._anio;
    }
    montoAPagar() {
        return this.montoAsegurar * (this.anio < 2000 ? 0.07 : 0.12);
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { anio: this.anio });
    }
}
