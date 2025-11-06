export default class Cl_mColegio {
    constructor() {
        this.acMonto = 0;
        this.acAdicional = 0;
        this.cntMesJulio = 0;
        this.cntMesSeptiembre = 0;
        this.cntEstudiantes = 0;
    }
    ProcesarEstudiante(estudiante) {
        this.acMonto += estudiante.Monto();
        this.acAdicional += estudiante.Adicional();
        if (estudiante.mes === 1) {
            this.cntMesJulio++;
        }
        else {
            this.cntMesSeptiembre++;
        }
        this.cntEstudiantes++;
    }
    PorcentajeMesJulio() {
        return (this.cntMesJulio / this.cntEstudiantes) * 100;
    }
    MontoFinalCaja() {
        return this.acMonto + this.acAdicional;
    }
}
