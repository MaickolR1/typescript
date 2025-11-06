"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cl_mPoliza_js_1 = __importDefault(require("./Cl_mPoliza.js"));
class Cl_mVida extends Cl_mPoliza_js_1.default {
    constructor({ id, porcentajeCobertura, tipo, montoAsegurar, edad, }) {
        super({ id, porcentajeCobertura, tipo, montoAsegurar });
        this._edad = 0;
        this.edad = edad;
    }
    set edad(edad) {
        this.edad = +edad;
    }
    get edad() {
        return this._edad;
    }
    montoApagar() {
        return this.montoAsegurar * (this.edad < 18 ? 0.05 : 0.1);
    }
}
