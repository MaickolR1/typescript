import Cl_vVehiculo from "./Cl_vVehiculo.js";
import Cl_mVehiculo from "./Cl_mVehiculo.js";
// Define una interfaz para el controlador
export default class Cl_vPeaje {
    constructor() {
        this._controlador = null;
        this.mVehiculo = null;
        this.salida = document.getElementById("mainForm_salida");
        if (!this.salida)
            throw new Error("Elemento salida no encontrado");
        this.vVehiculo = new Cl_vVehiculo();
    }
    set controlador(controlador) {
        this._controlador = controlador;
        this.vVehiculo.controlador = controlador;
    }
    get controlador() {
        return this._controlador;
    }
    procesarVehiculo() {
        this.mVehiculo = new Cl_mVehiculo({
            placa: this.vVehiculo.placa,
            tipo: this.vVehiculo.tipo,
        });
        return this.mVehiculo;
    }
    reportarVehiculo({ porcentajeTipo1 = 0, porcentajeTipo2 = 0, porcentajeTipo3 = 0, montoMunicipio = 0, }) {
        if (!this.mVehiculo)
            throw new Error("No hay artículo procesado");
        this.salida.innerHTML += `<br><br>${this.mVehiculo.placa}: pagar ${this.mVehiculo.tarifaAPagar()}
    <br><br>Porcentajes: Tipo1=${porcentajeTipo1}%, Tipo2=${porcentajeTipo2}%, Tipo3=${porcentajeTipo3}%
    <br>Monto municipio: ${montoMunicipio} Bs`;
    }
}
