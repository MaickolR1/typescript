"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * LA BODEGA
 * En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
 * Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
 * Ej. Costos varios artículos: 10, 20, 14, 6 y 4
 * La salida requerida presenta el siguiente formato:
 * La ganancia será de Bs.27
 */
const Cl_vAseguradora_js_1 = __importDefault(require("./Cl_vAseguradora.js"));
const Cl_mAseguradora_js_1 = __importDefault(require("./Cl_mAseguradora.js"));
const Cl_controlador_js_1 = __importDefault(require("./Cl_controlador.js"));
class Cl_principal {
  constructor() {
    let vista = new Cl_vAseguradora_js_1.default();
    let modelo = new Cl_mAseguradora_js_1.default();
    let controlador = new Cl_controlador_js_1.default(modelo, vista);
    vista.controlador = controlador;
  }
}
exports.default = Cl_principal;
