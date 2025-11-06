import Cl_vPoliza from "./Cl_vPoliza.js";
interface iVida {
  id: number;
  montoAsegurar: number;
  porcentajeCobertura: number;
  edad: number;
}

export default class Cl_vVida extends Cl_vPoliza {
  private divInEdad: HTMLElement;
  private inEdad: HTMLInputElement;
  private btAceptar: HTMLElement;
  constructor() {
    super();
    this.divInEdad = this.crearHTMLElement({ elementName: "divInEdad" });
    this.inEdad = this.crearHTMLInputElement({ elementName: "inEdad" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarVida",
      onclick: () => this.controlador?.procesarPolizaVida({
        id: this.id,
        montoAsegurar: this.montoAsegurar,
        porcentajeCobertura: this.porcentajeCobertura,
        edad: this.edad
      }),
    });
  }
  get edad(): number {
    return +this.inEdad.value;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Vida" });
    this.inEdad.value = "";
    this.divInEdad.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iVida };