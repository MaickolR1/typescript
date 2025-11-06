import Cl_mVehiculo from "./Cl_mVehiculo.js";
export default class Cl_mPeaje {
  private acTarifas: number;
  private cntVehiculos: number;
  private cntTipo1: number;
  private cntTipo2: number;
  private cntTipo3: number;
  constructor() {
    this.acTarifas = 0;
    this.cntVehiculos = 0;
    this.cntTipo1 = 0;
    this.cntTipo2 = 0;
    this.cntTipo3 = 0;
  }
  public procesarVehiculo(vehiculo: Cl_mVehiculo): void {
    const tarifa = vehiculo.tarifaAPagar();
    this.acTarifas += tarifa;
    this.cntVehiculos++;

    if (vehiculo.tipo === 1) this.cntTipo1++;
    if (vehiculo["tipo"] === 2) this.cntTipo2++;
    if (vehiculo.tipo === 3) this.cntTipo3++;
  }
  public porcentajeTipo1(): number {
    if (this.cntVehiculos === 0) return 0;
    return (this.cntTipo1 / this.cntVehiculos) * 100;
  }
  public porcentajeTipo2(): number {
    if (this.cntVehiculos === 0) return 0;
    return (this.cntTipo2 / this.cntVehiculos) * 100;
  }
  public porcentajeTipo3(): number {
    if (this.cntVehiculos === 0) return 0;
    return (this.cntTipo3 / this.cntVehiculos) * 100;
  }
  public montoMunicipio(): number {
    return this.acTarifas * 0.4;
  }
}
