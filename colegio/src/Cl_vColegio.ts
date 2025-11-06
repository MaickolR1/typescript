import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vColegio {
    private _controlador: Cl_controlador | null = null;
    private salida: HTMLElement;
    private vEstudiante: Cl_vEstudiante;
    private mEstudiante: Cl_mEstudiante | null = null;

    constructor() {
        this.salida = document.getElementById("mainFrom_salida") as HTMLElement;
        if (!this.salida) throw new Error("elemento salida no encontrado");
        this.vEstudiante = new Cl_vEstudiante(); 
    };
   set controlador(controlador: Cl_controlador | null) {
        this._controlador = controlador;
        this.vEstudiante.controlador = controlador;
    }
    get controlador(): Cl_controlador | null {
        return this._controlador;
    }
    ProcesarEstudiante(): Cl_mEstudiante {
        this.mEstudiante = new Cl_mEstudiante({
            nombre: this.vEstudiante.Nombre,
            cedula: this.vEstudiante.Cedula,
            mes: this.vEstudiante.Mes,
            nivel: this.vEstudiante.Nivel
        });
        return this.mEstudiante;
    }
    reportarEstudiante({
        porcentajeMesJulio = 0,
        montoFinalCaja = 0
    }: {
        porcentajeMesJulio?: number,
        montoFinalCaja?: number
    }): void {
        if (!this.mEstudiante) throw new Error("no hay estudiante para mostrar");
        this.salida.innerHTML = `<br><br>Estudiante: ${
        this.mEstudiante.nombre} :
        <br>Cedula: ${this.mEstudiante.cedula}
        <br>Mes: ${this.mEstudiante.mes}
        <br>Nivel: ${this.mEstudiante.nivel}
        <br>Monto: ${this.mEstudiante.Monto()}
        <br>Adicional: ${this.mEstudiante.Adicional()}
        <br><br>Porcentaje de estudiantes inscritos en Julio: ${porcentajeMesJulio}%
        <br>Monto final en caja: ${montoFinalCaja}`;
    }
 } 
