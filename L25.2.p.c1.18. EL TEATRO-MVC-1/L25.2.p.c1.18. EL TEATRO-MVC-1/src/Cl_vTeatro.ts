// Archivo: Cl_vTeatro.ts
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vTeatro {
  private _controlador: Cl_controlador | null = null;
  private salida: HTMLElement;

  // El constructor de Cl_vTeatro no debe crear Cl_vFamilia.
  // Esa responsabilidad debe ser de Cl_principal.

  constructor() {
    this.salida = document.getElementById("mainForm_salida") as HTMLElement;
    if (!this.salida) throw new Error("Elemento salida no encontrado");
    // No se necesita this.vFamilia aquí, ya que el controlador lo maneja.
  }

  set controlador(controlador: Cl_controlador | null) {
    this._controlador = controlador;
  }

  get controlador(): Cl_controlador | null {
    return this._controlador;
  }

  /**
   * Muestra el pago de la familia y limpia la salida para el total.
   * @param nombre Nombre de la familia.
   * @param pago Monto a pagar.
   */
  public mostrarFamilia(nombre: string, pago: number): void {
    this.salida.innerHTML += `La familia **${nombre}** debe pagar **$${pago.toFixed(
      2
    )}**<br>`;
  }

  /**
   * Muestra la recaudación total del teatro.
   * @param total Monto total acumulado.
   */
  public mostrarTotalTeatro(total: number): void {
    this.salida.innerHTML += `<br>El teatro recibe **$${total.toFixed(
      2
    )}** en total<hr>`;
  }

  /**
   * Limpia la salida antes de un nuevo proceso.
   */
  public limpiarSalida(): void {
    this.salida.innerHTML = "";
  }
}
