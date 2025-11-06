export default class Cl_mPoliza {
    constructor({ id, porcentajeCobertura, montoAsegurar, }) {
        this._id = 0;
        this._porcentajeCobertura = 0;
        this._montoAsegurar = 0;
        this.id = id;
        this.porcentajeCobertura = porcentajeCobertura;
        this.montoAsegurar = montoAsegurar;
    }
    set id(id) {
        this._id = +id;
    }
    get id() {
        return this._id;
    }
    set porcentajeCobertura(porcentajeCobertura) {
        this._porcentajeCobertura = +porcentajeCobertura;
    }
    get porcentajeCobertura() {
        return this._porcentajeCobertura;
    }
    set montoAsegurar(montoAsegurar) {
        this._montoAsegurar = +montoAsegurar;
    }
    get montoAsegurar() {
        return this._montoAsegurar;
    }
    montoCobertura() {
        return (this.montoAsegurar * this.porcentajeCobertura) / 100;
    }
    montoAPagar() {
        return 0;
    }
    toJSON() {
        return {
            id: this.id,
            porcentajeCobertura: this.porcentajeCobertura,
            montoAsegurar: this.montoAsegurar,
            montoCobertura: this.montoCobertura(),
            montoAPagar: this.montoAPagar(),
        };
    }
}
