export default class Cl_mPoliza {
  public _id: number = 0;
  public _tipo: number = 0;
  public _porcentajeCobertura: number = 0;
  public _montoAsegurar: number = 0;
  constructor({
    id,
    porcentajeCobertura,
    tipo,
    montoAsegurar,
  }: {
    id: number;
    porcentajeCobertura: number;
    tipo: number;
    montoAsegurar: number;
  }) {
    this.id = id;
    this.porcentajeCobertura = porcentajeCobertura;
    this.tipo = tipo;
    this.montoAsegurar = montoAsegurar;
  }
  set id(id: number) {
    this.id = +id;
  }
  get id(): number {
    return this.id;
  }
  set porcentajeCobertura(porcentajeCobertura: number) {
    this._porcentajeCobertura = +porcentajeCobertura;
  }
  get porcentajeCobertura(): number {
    return this._porcentajeCobertura;
  }
  set tipo(tipo: number) {
    this._tipo = +tipo;
  }
  get tipo(): number {
    return this._tipo;
  }
  set montoAsegurar(montoAsegurar: number) {
    this._montoAsegurar = +montoAsegurar;
  }
  get montoAsegurar(): number {
    return this._montoAsegurar;
  }
  montoCobertura(): number {
    return this.montoAsegurar * this.porcentajeCobertura;
  }
}
