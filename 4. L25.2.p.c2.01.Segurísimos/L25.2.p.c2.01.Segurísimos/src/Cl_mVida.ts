import Cl_mPoliza from "./Cl_mPoliza.js";

class Cl_mVida extends Cl_mPoliza {
  private _edad: number = 0;
  constructor({
    id,
    porcentajeCobertura,
    tipo,
    montoAsegurar,
    edad,
  }: {
    id: number;
    porcentajeCobertura: number;
    tipo: number;
    montoAsegurar: number;
    edad: number;
  }) {
    super({ id, porcentajeCobertura, tipo, montoAsegurar });
    this.edad = edad;
  }
  set edad(edad: number) {
    this.edad = +edad;
  }
  get edad(): number {
    return this._edad;
  }
  montoApagar(): number {
    return this.montoAsegurar * (this.edad < 18 ? 0.05 : 0.1);
  }
}
