export default class Cl_mPoliza {
  public _id: number = 0;
  public _porcentajeCobertura: number = 0;
  public _montoAsegurar: number = 0;
  constructor({
    id,
    porcentajeCobertura,
    montoAsegurar,
  }: {
    id: number;
    porcentajeCobertura: number;
    montoAsegurar: number;
  }) {
    this.id = id;
    this.porcentajeCobertura = porcentajeCobertura;
    this.montoAsegurar = montoAsegurar;
  }
  set id(id: number) {
    this._id = +id;
  }
  get id(): number {
    return this._id;
  }
  set porcentajeCobertura(porcentajeCobertura: number) {
    this._porcentajeCobertura = +porcentajeCobertura;
  }
  get porcentajeCobertura(): number {
    return this._porcentajeCobertura;
  }
  set montoAsegurar(montoAsegurar: number) {
    this._montoAsegurar = +montoAsegurar;
  }
  get montoAsegurar(): number {
    return this._montoAsegurar;
  }
  montoCobertura(): number {
    return (this.montoAsegurar * this.porcentajeCobertura) / 100;
  }
  montoAPagar(): number {
    return 0;
  }
  toJSON() {
    return {
      id: this.id,
      porcentajeCobertura: this.porcentajeCobertura,
      montoAsegurar: this.montoAsegurar,
      montoCobertura: this.montoCobertura(),
      montoAPagar: this.montoAPagar(),
    };
  }
}
