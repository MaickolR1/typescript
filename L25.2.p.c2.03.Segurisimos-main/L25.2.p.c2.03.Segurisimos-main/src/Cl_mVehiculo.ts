import Cl_mPoliza from "./Cl_mPoliza.js";

export default class Cl_mVehiculo extends Cl_mPoliza {
  private _anio: number = 0;
  constructor({
    id,
    porcentajeCobertura,
    montoAsegurar,
    anio = 0,
  }: {
    id: number;
    porcentajeCobertura: number;
    montoAsegurar: number;
    anio: number;
  }) {
    super({ id, porcentajeCobertura,  montoAsegurar });
    this.anio = anio;
  }
  set anio(anio: number) {
    this._anio = +anio;
  }
  get anio(): number {
    return this._anio;
  }
  montoAPagar(): number {
    return this.montoAsegurar * (this.anio < 2000 ? 0.07 : 0.12);
  }
  toJSON() {
    return {
      ...super.toJSON(),
      anio: this.anio,
    };
  }
}
