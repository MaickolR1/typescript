import Cl_mColegio from "./Cl_mColegio.js";
import Cl_vColegio from "./Cl_vColegio.js";

export default class Cl_controlador {
    public modelo: Cl_mColegio;
    public vista: Cl_vColegio;
    constructor(modelo: Cl_mColegio, vista: Cl_vColegio) {
        this.modelo = modelo;
        this.vista = vista;
    }
    ProcesarEstudiante(){
        this.modelo.ProcesarEstudiante(this.vista.ProcesarEstudiante());
        this.vista.reportarEstudiante({
            porcentajeMesJulio: this.modelo.PorcentajeMesJulio(),
            montoFinalCaja: this.modelo.MontoFinalCaja()
        });
    }
}