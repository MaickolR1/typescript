"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cl_mPoliza_js_1 = __importDefault(require("./Cl_mPoliza.js"));
class Cl_mVehiculo extends Cl_mPoliza_js_1.default {
    constructor({ id, porcentajeCobertura, tipo, montoAsegurar, anio = 0, }) {
        super({ id, porcentajeCobertura, tipo, montoAsegurar });
        this._anio = 0;
        this.anio = anio;
    }
    set anio(anio) {
        this.anio = +anio;
    }
    get anio() {
        return this._anio;
    }
    montoAPagar() {
        return this.montoAsegurar * (this.anio < 2000 ? 0.07 : 0.12);
    }
}
