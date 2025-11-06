import Cl_mPoliza from "./Cl_mPoliza.js";

export default class Cl_mAseguradora {
  private acMontoPagado: number = 0;
  private cntPolizas: number = 0;

  procesarPoliza(poliza: Cl_mPoliza) {
    this.cntPolizas++;
    this.acMontoPagado += poliza.montoAPagar();
  }
  totalPagado(): number {
    return this.acMontoPagado;
  }
  cantidadPolizas(): number {
    return this.cntPolizas;
  }
  promedioMontoPagado(): number {
    if (this.cntPolizas) return this.acMontoPagado / this.cntPolizas;
    return 0;
  }
}
