import Cl_vVehiculo from "./Cl_vVehiculo.js";
import Cl_vVida from "./Cl_vVida.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
// Define una interfaz para el controlador
export default class Cl_vAseguradora extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vVida = new Cl_vVida();
        this._vVehiculo = new Cl_vVehiculo();
        this.dataPolizas = this.crearHTMLElement({ elementName: "dataPolizas" });
        this.lblTotalPagado = this.crearHTMLElement({
            elementName: "lblTotalPagado",
        });
        this.lblCantidadPolizas = this.crearHTMLElement({
            elementName: "lblCantidadPolizas",
        });
        this.lblPromedioMontoPagado = this.crearHTMLElement({
            elementName: "lblPromedioMontoPagado",
        });
        this.btAgregarVida = this.crearHTMLButtonElement({
            elementName: "btAgregarVida",
            onclick: () => {
                this.show({ ver: false });
                this.vVida.show();
            },
        });
        this.btAgregarVehiculo = this.crearHTMLButtonElement({
            elementName: "btAgregarVehiculo",
            onclick: () => {
                this.show({ ver: false });
                this.vVehiculo.show();
            },
        });
        this.dataPolizas.innerHTML = "";
        this.vVida.show({ ver: false });
        this.vVehiculo.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vVida.controlador = controlador;
        this.vVehiculo.controlador = controlador;
    }
    get vVida() {
        return this._vVida;
    }
    get vVehiculo() {
        return this._vVehiculo;
    }
    reportarPoliza({ dataPoliza, totalPagado, cantidadPolizas, promedioMontoPagado, }) {
        this.dataPolizas.innerHTML += `
      <td class="colNumber">${dataPoliza.id}</td>
      <td class="colCurrency">${`Bs.${dataPoliza.montoAsegurar.toFixed(2)}`}</td>
      <td class="colNumber">${`${dataPoliza.porcentajeCobertura}%`}</td>
      <td class="colNumber">${dataPoliza.edad ? dataPoliza.edad : "--"}</td>
      <td class="colNumber">${dataPoliza.anio ? dataPoliza.anio : "--"}</td>
      <td class="colCurrency">${`Bs.${dataPoliza.montoCobertura.toFixed(2)}`}</td>
      <td class="colCurrency">${`Bs.${dataPoliza.montoAPagar.toFixed(2)}`}</td>
    `;
        this.lblTotalPagado.innerHTML = totalPagado.toFixed(2);
        this.lblCantidadPolizas.innerHTML = cantidadPolizas.toString();
        this.lblPromedioMontoPagado.innerHTML = promedioMontoPagado.toFixed(2);
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vVehiculo.show({ ver: false });
            this.vVida.show({ ver: false });
        }
    }
}
