import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vPoliza extends Cl_vGeneral {
  private inId: HTMLInputElement;
  private inMontoAsegurar: HTMLInputElement;
  private inPorcentajeCobertura: HTMLInputElement;
  private lblTipo: HTMLElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    super({ formName: "polizaForm" });
    this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
    this.inId = this.crearHTMLInputElement({ elementName: "inId" });
    this.inMontoAsegurar = this.crearHTMLInputElement({
      elementName: "inMontoAsegurar",
    });
    this.inPorcentajeCobertura = this.crearHTMLInputElement({
      elementName: "inPorcentajeCobertura",
    });
    this.btCancelar = this.crearHTMLButtonElement({
      elementName: "btCancelar",
      onclick: () => {
        this.show({ ver: false });
        this.controlador?.vista.show();
      },
    });
  }
  get id(): number {
    return +this.inId.value;
  }
  get montoAsegurar(): number {
    return +this.inMontoAsegurar.value;
  }
  get porcentajeCobertura(): number {
    return +this.inPorcentajeCobertura.value;
  }
  show({
    ver = true,
    nombreTipo = "",
  }: {
    ver?: boolean;
    nombreTipo?: string;
  }): void {
    super.show({ ver });
    this.lblTipo.innerHTML = nombreTipo;
    this.inId.value = "";
    this.inMontoAsegurar.value = "";
    this.inPorcentajeCobertura.value = "";
    this.inId.focus();
  }
}
