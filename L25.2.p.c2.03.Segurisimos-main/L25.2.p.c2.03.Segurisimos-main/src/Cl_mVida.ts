import Cl_mPoliza from "./Cl_mPoliza.js";

export default class Cl_mVida extends Cl_mPoliza {
  private _edad: number = 0;
  constructor({
    id,
    porcentajeCobertura,
    montoAsegurar,
    edad,
  }: {
    id: number;
    porcentajeCobertura: number;
    montoAsegurar: number;
    edad: number;
  }) {
    super({ id, porcentajeCobertura, montoAsegurar });
    this.edad = edad;
  }
  set edad(edad: number) {
    this._edad = +edad;
  }
  get edad(): number {
    return this._edad;
  }
  montoAPagar(): number {
    return this.montoAsegurar * (this.edad < 18 ? 0.05 : 0.1);
  }
  toJSON() {
    return {
      ...super.toJSON(),
      edad: this.edad,
    };
  }
}
