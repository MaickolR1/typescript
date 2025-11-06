import Cl_vPoliza from "./Cl_vPoliza.js";
interface iVehiculo {
  id: number;
  montoAsegurar: number;
  porcentajeCobertura: number;
  anio: number;
}

export default class Cl_vVehiculo extends Cl_vPoliza {
  private divInAnio: HTMLElement;
  private inAnio: HTMLInputElement;
  private btAceptar: HTMLElement;
  constructor() {
    super();
    this.divInAnio = this.crearHTMLElement({ elementName: "divInAnio" });
    this.inAnio = this.crearHTMLInputElement({ elementName: "inAnio" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarVehiculo",
      onclick: () => this.controlador?.procesarPolizaVehiculo({
        id: this.id,
        montoAsegurar: this.montoAsegurar,
        porcentajeCobertura: this.porcentajeCobertura,
        anio: this.anio
      }),
    });
  }
  get anio(): number {
    return +this.inAnio.value;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Vehículo" });
    this.inAnio.value = "";
    this.divInAnio.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iVehiculo };
