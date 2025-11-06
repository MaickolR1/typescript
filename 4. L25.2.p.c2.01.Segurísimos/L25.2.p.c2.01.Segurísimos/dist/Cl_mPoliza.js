"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cl_mPoliza {
    constructor({ id, porcentajeCobertura, tipo, montoAsegurar, }) {
        this._id = 0;
        this._tipo = 0;
        this._porcentajeCobertura = 0;
        this._montoAsegurar = 0;
        this.id = id;
        this.porcentajeCobertura = porcentajeCobertura;
        this.tipo = tipo;
        this.montoAsegurar = montoAsegurar;
    }
    set id(id) {
        this.id = +id;
    }
    get id() {
        return this.id;
    }
    set porcentajeCobertura(porcentajeCobertura) {
        this._porcentajeCobertura = +porcentajeCobertura;
    }
    get porcentajeCobertura() {
        return this._porcentajeCobertura;
    }
    set tipo(tipo) {
        this._tipo = +tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set montoAsegurar(montoAsegurar) {
        this._montoAsegurar = +montoAsegurar;
    }
    get montoAsegurar() {
        return this._montoAsegurar;
    }
    montoCobertura() {
        return this.montoAsegurar * this.porcentajeCobertura;
    }
}
exports.default = Cl_mPoliza;
