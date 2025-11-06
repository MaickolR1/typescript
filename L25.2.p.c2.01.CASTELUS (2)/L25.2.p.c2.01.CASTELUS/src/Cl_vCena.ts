// Cl_vCena.ts (Vista de los detalles de Cena)
import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vCena extends Cl_vGeneral {
  private inEspecialidad: HTMLInputElement;

  constructor() {
    super({ formName: "cenaForm" });
    this.vista = this.crearHTMLElement({
      elementName: this.formName,
      isForm: true,
    });

    this.inEspecialidad = this.crearHTMLInputElement({
      elementName: "inDetalle",
    });
    const btProcesar = this.crearHTMLElement({ elementName: "btProcesar" });

    // El botón llama al controlador con los datos base y el tipo/detalle específico
    btProcesar.onclick = () => {
      if (!this.controlador) throw new Error("No hay controlador asignado");
      this.controlador.procesarPlatoManual({ tipo: 2, detalle: this.detalle }); // Tipo 2: Cena
    };

    this.show({ ver: false });
  }

  public get detalle(): string {
    return this.inEspecialidad.value;
  }

  public limpiarInputs(): void {
    this.inEspecialidad.value = "";
  }
}
