import Cl_mPoliza from "./Cl_mPoliza.js";

class Cl_mVehiculo extends Cl_mPoliza {
  private _anio: number = 0;
  constructor({
    id,
    porcentajeCobertura,
    tipo,
    montoAsegurar,
    anio = 0,
  }: {
    id: number;
    porcentajeCobertura: number;
    tipo: number;
    montoAsegurar: number;
    anio: number;
  }) {
    super({ id, porcentajeCobertura, tipo, montoAsegurar });
    this.anio = anio;
  }
  set anio(anio: number) {
    this.anio = +anio;
  }
  get anio(): number {
    return this._anio;
  }
  montoAPagar(): number {
    return this.montoAsegurar * (this.anio < 2000 ? 0.07 : 0.12);
  }
}
