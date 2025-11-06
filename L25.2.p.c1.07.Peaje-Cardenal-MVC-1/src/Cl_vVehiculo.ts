import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vVehiculo {
  public controlador: Cl_controlador | null = null;
  private inPlaca: HTMLInputElement;
  private inTipo: HTMLInputElement;
  public btProcesar: HTMLElement;

  constructor() {
    this.inPlaca = document.getElementById(
      "vehiculoForm_inPlaca"
    ) as HTMLInputElement;
    this.inTipo = document.getElementById(
      "vehiculoForm_inTipo"
    ) as HTMLInputElement;
    this.btProcesar = document.getElementById(
      "vehiculoForm_btProcesar"
    ) as HTMLElement;

    // Validar que los elementos existen
    if (!this.inPlaca || !this.inTipo || !this.btProcesar)
      throw new Error("Elementos del DOM no encontrados");
    this.btProcesar.onclick = () => {
      if (!this.controlador) throw new Error("No hay controlador");
      this.controlador.procesarVehiculo();
    };
  }

  get placa(): string {
    if (!this.inPlaca) throw new Error("Elemento inPlaca no encontrado");
    return this.inPlaca.value;
  }
  get tipo(): number {
    if (!this.inTipo) throw new Error("Elemento inTipo no encontrado");
    return +this.inTipo.value;
  }
}
