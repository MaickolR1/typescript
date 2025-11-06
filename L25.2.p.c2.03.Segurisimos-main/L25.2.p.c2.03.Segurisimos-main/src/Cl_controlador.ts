import Cl_mAseguradora from "./Cl_mAseguradora.js";
import Cl_mPoliza from "./Cl_mPoliza.js";
import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_mVida from "./Cl_mVida.js";
import Cl_vAseguradora from "./Cl_vAseguradora.js";
import { iVehiculo } from "./Cl_vVehiculo.js";
import { iVida } from "./Cl_vVida.js";

export default class Cl_controlador {
  public modelo: Cl_mAseguradora;
  public vista: Cl_vAseguradora;
  constructor(modelo: Cl_mAseguradora, vista: Cl_vAseguradora) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarPolizaVida(data: iVida) {
    let mVida = new Cl_mVida({
      id: data.id,
      montoAsegurar: data.montoAsegurar,
      porcentajeCobertura: data.porcentajeCobertura,
      edad: data.edad,
    });
    this.modelo.procesarPoliza(mVida);
    this.reportarPoliza({ mPoliza: mVida });
  }
  procesarPolizaVehiculo(data: iVehiculo) {
    let mVehiculo = new Cl_mVehiculo({
      id: data.id,
      montoAsegurar: data.montoAsegurar,
      porcentajeCobertura: data.porcentajeCobertura,
      anio: data.anio,
    });
    this.modelo.procesarPoliza(mVehiculo);
    this.reportarPoliza({ mPoliza: mVehiculo });
  }
  reportarPoliza({ mPoliza }: { mPoliza: Cl_mPoliza }) {
    this.vista.reportarPoliza({
      dataPoliza: mPoliza.toJSON(),
      totalPagado: this.modelo.totalPagado(),
      cantidadPolizas: this.modelo.cantidadPolizas(),
      promedioMontoPagado: this.modelo.promedioMontoPagado(),
    });
    this.vista.show();
  }
}
