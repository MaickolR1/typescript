export default class Cl_mVehiculo {
  private _placa: string = "";
  private _tipo: number = 1;
  constructor({ placa = "", tipo = 1 }) {
    this.placa = placa;
    this.tipo = tipo;
  }
  public tarifaAPagar(): number {
    if (this.tipo === 1) return 10;
    if (this.tipo === 2) return 20;
    if (this.tipo === 3) return 50;
    return 0;
  }
  public set placa(placa: string) {
    this._placa = placa;
  }
  public set tipo(tipo: number) {
    this._tipo = tipo;
  }
  public get placa(): string {
    return this._placa;
  }
  public get tipo(): number {
    return this._tipo;
  }
}
