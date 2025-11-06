export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    ProcesarEstudiante() {
        this.modelo.ProcesarEstudiante(this.vista.ProcesarEstudiante());
        this.vista.reportarEstudiante({
            porcentajeMesJulio: this.modelo.PorcentajeMesJulio(),
            montoFinalCaja: this.modelo.MontoFinalCaja()
        });
    }
}
