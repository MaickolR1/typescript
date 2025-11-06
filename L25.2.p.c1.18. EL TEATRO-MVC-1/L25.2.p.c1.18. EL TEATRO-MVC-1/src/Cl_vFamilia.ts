// Archivo: Cl_vFamilia.ts
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vFamilia {
  public controlador: Cl_controlador | null = null;
  private inNombre: HTMLInputElement;
  private inCantAdulto: HTMLInputElement;
  private inCantNino: HTMLInputElement;
  public btProcesar: HTMLElement;

  constructor() {
    // IDs corregidos para coincidir con el HTML
    this.inNombre = document.getElementById(
      "familiaForm_inNombre"
    ) as HTMLInputElement;
    this.inCantAdulto = document.getElementById(
      "familiaForm_inCantAdulto"
    ) as HTMLInputElement;
    this.inCantNino = document.getElementById(
      "familiaForm_inCantNino" // ID faltante en el original
    ) as HTMLInputElement;
    this.btProcesar = document.getElementById(
      "familiaForm_btProcesar"
    ) as HTMLElement;

    if (
      !this.inNombre ||
      !this.inCantAdulto ||
      !this.inCantNino ||
      !this.btProcesar
    ) {
      throw new Error("Elementos del DOM no encontrados");
    }

    // Listener de evento de click para el botón Procesar (Corregido)
    this.btProcesar.onclick = () => {
      if (!this.controlador) throw new Error("No hay controlador");
      this.controlador.procesarFamilia();
    };
  }

  // Getters de valores (correctos)
  get nombre(): string {
    if (!this.inNombre) throw new Error("Elemento inNombre no encontrado");
    return this.inNombre.value;
  }
  get cantAdulto(): number {
    if (!this.inCantAdulto)
      throw new Error("Elemento inCantAdulto no encontrado");
    return +this.inCantAdulto.value; // El operador + convierte a número
  }
  get cantNino(): number {
    if (!this.inCantNino) throw new Error("Elemento inCantNino no encontrado");
    return +this.inCantNino.value; // El operador + convierte a número
  }

  /**
   * Reinicia los campos del formulario.
   */
  public limpiar(): void {
    this.inNombre.value = "";
    this.inCantAdulto.value = "";
    this.inCantNino.value = "";
  }
}
