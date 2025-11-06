import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_vColegio {
    constructor() {
        this._controlador = null;
        this.mEstudiante = null;
        this.salida = document.getElementById("mainFrom_salida");
        if (!this.salida)
            throw new Error("elemento salida no encontrado");
        this.vEstudiante = new Cl_vEstudiante();
    }
    ;
    set controlador(controlador) {
        this._controlador = controlador;
        this.vEstudiante.controlador = controlador;
    }
    get controlador() {
        return this._controlador;
    }
    ProcesarEstudiante() {
        this.mEstudiante = new Cl_mEstudiante({
            nombre: this.vEstudiante.Nombre,
            cedula: this.vEstudiante.Cedula,
            mes: this.vEstudiante.Mes,
            nivel: this.vEstudiante.Nivel
        });
        return this.mEstudiante;
    }
    reportarEstudiante({ porcentajeMesJulio = 0, montoFinalCaja = 0 }) {
        if (!this.mEstudiante)
            throw new Error("no hay estudiante para mostrar");
        this.salida.innerHTML = `<br><br>Estudiante: ${this.mEstudiante.nombre} :
        <br>Cedula: ${this.mEstudiante.cedula}
        <br>Mes: ${this.mEstudiante.mes}
        <br>Nivel: ${this.mEstudiante.nivel}
        <br>Monto: ${this.mEstudiante.Monto()}
        <br>Adicional: ${this.mEstudiante.Adicional()}
        <br><br>Porcentaje de estudiantes inscritos en Julio: ${porcentajeMesJulio}%
        <br>Monto final en caja: ${montoFinalCaja}`;
    }
}
