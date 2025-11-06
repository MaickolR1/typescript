import Cl_vVehiculo from "./Cl_vVehiculo.js";
import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_controlador from "./Cl_controlador.js";
// Define una interfaz para el controlador
export default class Cl_vPeaje {
  private _controlador: Cl_controlador | null = null;
  private salida: HTMLElement;
  private vVehiculo: Cl_vVehiculo;
  private mVehiculo: Cl_mVehiculo | null = null;

  constructor() {
    this.salida = document.getElementById("mainForm_salida") as HTMLElement;
    if (!this.salida) throw new Error("Elemento salida no encontrado");
    this.vVehiculo = new Cl_vVehiculo();
  }

  set controlador(controlador: Cl_controlador | null) {
    this._controlador = controlador;
    this.vVehiculo.controlador = controlador;
  }
  get controlador(): Cl_controlador | null {
    return this._controlador;
  }

  procesarVehiculo(): Cl_mVehiculo {
    this.mVehiculo = new Cl_mVehiculo({
      placa: this.vVehiculo.placa,
      tipo: this.vVehiculo.tipo,
    });
    return this.mVehiculo;
  }

  reportarVehiculo({
    porcentajeTipo1 = 0,
    porcentajeTipo2 = 0,
    porcentajeTipo3 = 0,
    montoMunicipio = 0,
  }): void {
    if (!this.mVehiculo) throw new Error("No hay artículo procesado");
    this.salida.innerHTML += `<br><br>${
      this.mVehiculo.placa
    }: pagar ${this.mVehiculo.tarifaAPagar()}
    <br><br>Porcentajes: Tipo1=${porcentajeTipo1}%, Tipo2=${porcentajeTipo2}%, Tipo3=${porcentajeTipo3}%
    <br>Monto municipio: ${montoMunicipio} Bs`;
  }
}
