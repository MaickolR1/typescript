import Cl_mPeaje from "./Cl_mPeaje.js";
import Cl_vPeaje from "./Cl_vPeaje.js";

export default class Cl_controlador {
  public modelo: Cl_mPeaje;
  public vista: Cl_vPeaje;
  constructor(modelo: Cl_mPeaje, vista: Cl_vPeaje) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarVehiculo() {
    this.modelo.procesarVehiculo(this.vista.procesarVehiculo());
    this.vista.reportarVehiculo({
      porcentajeTipo1: this.modelo.porcentajeTipo1(),
      porcentajeTipo2: this.modelo.porcentajeTipo2(),
      porcentajeTipo3: this.modelo.porcentajeTipo3(),
      montoMunicipio: this.modelo.montoMunicipio(),
    });
  }
}
