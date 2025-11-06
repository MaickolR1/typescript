// Cl_vPlato.ts (Base de la vista de datos - Refactorizada)
import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vPlato extends Cl_vGeneral {
  // Atributos base (inputs comunes)
  private inCodigo: HTMLInputElement;
  private inOrigen: HTMLInputElement;
  private inCosto: HTMLInputElement;
  private slTipo: HTMLSelectElement;

  constructor() {
    super({ formName: "platoForm" });
    this.vista = this.crearHTMLElement({
      elementName: this.formName,
      isForm: true,
    });

    this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
    this.inOrigen = this.crearHTMLInputElement({ elementName: "inOrigen" });
    this.inCosto = this.crearHTMLInputElement({ elementName: "inCosto" });
    this.slTipo = this.crearHTMLElement({
      elementName: "slTipo",
    }) as HTMLSelectElement;
  }

  public get codigo(): string {
    return this.inCodigo.value;
  }
  public get origen(): number {
    return +this.inOrigen.value;
  }
  public get costo(): number {
    return +this.inCosto.value;
  }
  public get tipo(): number {
    return +this.slTipo.value;
  }

  public limpiarInputsBase(): void {
    this.inCodigo.value = "";
    this.inOrigen.value = "";
    this.inCosto.value = "";
    this.slTipo.value = "1";
    this.inCodigo.focus();
  }
}
