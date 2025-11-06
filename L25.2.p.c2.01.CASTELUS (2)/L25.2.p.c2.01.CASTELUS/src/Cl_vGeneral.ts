// Cl_vGeneral.ts
import type Cl_controlador from "./Cl_controlador.js";

export default class Cl_vGeneral {
  private _formName: string = "";
  private _controlador: Cl_controlador | null = null;
  public vista: HTMLElement | null = null;

  constructor({ formName }: { formName: string }) {
    this.formName = formName;
  }

  set formName(formName: string) {
    this._formName = formName;
  }
  get formName(): string {
    return this._formName;
  }

  // Aceptar null aquí para evitar error al reasignar desde la vista principal
  set controlador(controlador: Cl_controlador | null) {
    this._controlador = controlador;
  }
  get controlador(): Cl_controlador | null {
    return this._controlador;
  }

  protected crearHTMLElement({
    elementName,
    isForm = false,
  }: {
    elementName: string;
    isForm?: boolean;
  }): HTMLElement {
    let domElementName = isForm
      ? elementName
      : `${this.formName}_${elementName}`;
    let domElement = document.getElementById(domElementName) as HTMLElement;
    if (!domElement) {
      let msg = `Elemento ${domElementName} no encontrado`;
      throw new Error(msg);
    }
    return domElement;
  }

  protected crearHTMLInputElement({
    elementName,
  }: {
    elementName: string;
  }): HTMLInputElement {
    return this.crearHTMLElement({ elementName }) as HTMLInputElement;
  }

  public show({ ver = true }: { ver?: boolean }): void {
    if (this.vista) {
      this.vista.style.display = ver ? "block" : "none";
    }
  }
}
