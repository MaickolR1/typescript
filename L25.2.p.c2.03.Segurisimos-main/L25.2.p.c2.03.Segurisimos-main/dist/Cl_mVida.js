import Cl_mPoliza from "./Cl_mPoliza.js";
export default class Cl_mVida extends Cl_mPoliza {
    constructor({ id, porcentajeCobertura, montoAsegurar, edad, }) {
        super({ id, porcentajeCobertura, montoAsegurar });
        this._edad = 0;
        this.edad = edad;
    }
    set edad(edad) {
        this._edad = +edad;
    }
    get edad() {
        return this._edad;
    }
    montoAPagar() {
        return this.montoAsegurar * (this.edad < 18 ? 0.05 : 0.1);
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { edad: this.edad });
    }
}
