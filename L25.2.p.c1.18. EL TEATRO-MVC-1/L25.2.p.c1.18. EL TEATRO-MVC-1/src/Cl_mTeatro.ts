// Archivo: Cl_mTeatro.ts
import Cl_mFamilia from "./Cl_mFamilia.js";

export default class Cl_mTeatro {
  private acMontoTotal: number;

  constructor() {
    this.acMontoTotal = 0;
  }

  /**
   * Procesa una familia y acumula su pago al total del teatro.
   */
  public procesarFamilia(familia: Cl_mFamilia): void {
    let montoFamilia: number = familia.precio();
    this.acMontoTotal = this.acMontoTotal + montoFamilia;
  }

  /**
   * Retorna la recaudación total del teatro.
   */
  public montoTotal(): number {
    return this.acMontoTotal;
  }
}
